const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt to select media stram, pass to video, then play

async function selectMediaStream()
{
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        console.log(mediaStream);
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }
          
    }catch(err)
    {
        // Catch the error
        console.log('eRRoR');
    }
}


// on load 
selectMediaStream();


button.addEventListener("click",async()=>{
    // disable button
    button.disabled = true;
    // video element start
    videoElement.requestPictureInPicture();

    button.disabled = false;
});