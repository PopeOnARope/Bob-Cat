$(() => {
  setTimeout(function() {
    const video = document.getElementById("video");
    const videoOverlay = document.getElementById("video-overlay");
    //add 80px to account for nav height
    const videoHeight = video.clientHeight + 80;
    videoOverlay.setAttribute("style", `height: ${videoHeight}px`);
  }, 30);
  // video.play();
});
