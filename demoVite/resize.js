
const stage = 0.95;

document.querySelector("#enlarge").addEventListener('click', () => {
    
    imgElement = document.querySelector('#michaelsImage');
    imgWidth = imgElement.width;
    imgHeight = imgElement.height;
    imgElement.width = Math.ceil(imgWidth/stage);
    imgElement.height = Math.ceil(imgHeight/stage);

});

document.querySelector('#shrink').addEventListener('click', () => { 
    
    imgElement = document.querySelector('#michaelsImage');
    imgWidth = imgElement.width;
    imgHeight = imgElement.height;
    imgElement.width = Math.ceil(imgWidth*stage);
    imgElement.height = Math.ceil(imgHeight*stage);  

});


