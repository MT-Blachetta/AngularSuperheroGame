async function fetchUsers() {

    let response = await fetch('http://decgn-pr-newbizz-poc:3000/users')
  
    let json = await response.json();
  
    return json;
  
  }

  async function fetchMessages() {

    let response = await fetch('http://decgn-pr-newbizz-poc:3000/messages')
  
    let json = await response.json();
  
    return json;
  
  }


  
  
  
  function addUser() {
  
    return fetch('http://decgn-pr-newbizz-poc:3000/users', {
  
      method: 'POST',
  
      headers: {
  
        "Content-Type": "application/json",
  
      },
  
      body: JSON.stringify({name: 'Aldin1', city: 'Frankfurt'})
  
    }).then(response => {
  
      if (response.ok) {
  
        console.log('created user');
  
      } else {
  
        throw new Error('could not create user: ' + response.status);
  
      }
  
    })
  
  }

  function addMessage(msg,aut) {
  
    return fetch('http://decgn-pr-newbizz-poc:3000/messages', {
  
      method: 'POST',
  
      headers: {
  
        "Content-Type": "application/json",
  
      },
  
      body: JSON.stringify( {content: msg, author: aut} )
  
    }).then(response => {
  
      if (response.ok) {
  
        console.log('message created');
  
      } else {
  
        throw new Error('could not create message: ' + response.status);
  
      }
  
    })
  
  }

  function getMessageByAuthor(){}
  
  
  



  async function sendMessage(message,author) {

    var existing_messages = await fetchMessages();
    existing_messages.forEach(msg => {
        if(msg.content === message & msg.author === author){
            throw new Error(' The same message already exists !');
        }
    });

    addMessage(message,author);

    }

  

  sendMessage('Hallo allerseits', 'Michael')
  .catch((error) => {
    console.log('could not send message:', error.message);
  })
  .finally(() => {
    fetchMessages()
      .then(messages => console.log(messages))
  })

