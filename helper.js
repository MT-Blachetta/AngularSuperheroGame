const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 3555;
const saveDir = "./AngularJS/playground/src/assets";


app.use(bodyParser.json());

app.post('/story', async (req, res) => {

  const engineId = 'stable-diffusion-xl-1024-v1-0';
  const apiHost = 'https://api.stability.ai';
  const apiKey = "f";

  const prompt = req.body.description;

  const response = await fetch(
    `${apiHost}/v1/generation/${engineId}/text-to-image`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: prompt,
          },
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 30,
        samples: 1,
      }),
    }
  )

  if (!response.ok) {
    res.status(500).send(`download error response: ${await response.text()}`);
  } else {

    const responseJSON = await response.json();
    let filepath;

    responseJSON.artifacts.forEach((image, index) => {
      filepath = path.join(saveDir,`story_${index}.png`);
      fs.writeFileSync(filepath,Buffer.from(image.base64, 'base64'));
    });

    res.send(filepath);

  }


  });

app.post('/download', async (req, res) => {
  try {
      const apiUrl = 'https://stablediffusionapi.com/api/v3/text2img';

      // Extract the message from the incoming request's body
      const prompts = req.body.prompts;
      var paths = [];

      for(let i = 0; i < prompts.length; i++){

        let filename = prompts[i].name;
        filename = filename.split(' ').join('_') 
        filename += ".png";

        const data = {
          key: "",
          prompt: prompts[i].description, 
          negative_prompt: null,
          width: "256",
          height: "256",
          samples: "1",
          num_inference_steps: "20",
          seed: null,
          guidance_scale: 7.5,
          safety_checker: "no",
          multi_lingual: "yes",
          panorama: "no",
          self_attention: "no",
          upscale: "no",
          embeddings_model: null,
          webhook: null,
          track_id: null
      };

      const apiResponse = await axios.post(apiUrl, data, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    const imageUrl = apiResponse.data.output[0];

    const downloaded = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    fs.writeFileSync(path.join(saveDir,filename), downloaded.data);
    paths.push(filename);


      }

      res.json({ localpath: paths });

    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to download image !');
    }

  });

app.post('/text', async (req, res) => {

    const prompt = req.body.prompt;
    const OPENAI_API_KEY = ""
    gptEndpoint = "https://api.openai.com/v1/chat/completions";
    const payload = {
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: prompt
        } ] }
  
        fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify(payload),
        }).then(response => response.json()).then(res_json => {
              res.send(res_json[0].message.content);
        }).catch(error => {console.error('Error: ', error)}); 
  });

app.listen(PORT, () => {
    console.log(`Image Download Server started on http://localhost:${PORT}`);
  });






