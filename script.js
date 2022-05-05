const start = document.getElementById("button");
const video = document.getElementById("video");
const restart = document.getElementById("restart");

const Stream = async function () {
  try {
    const getStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = getStream;
    video.onloadedmetadata = function () {
      video.play();
    };
  } catch (err) {
    alert(err.message);
  }
};

start.addEventListener("click", async () => {
  start.hidden = true;
  await video.requestPictureInPicture();
  restart.hidden = false;
});

restart.addEventListener("click", function () {
  location.reload();
});

//on load
Stream();
