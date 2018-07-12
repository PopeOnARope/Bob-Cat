$(() => {
  setTimeout(function() {
    const video = document.getElementById("video");
    const videoOverlay = document.getElementById("video-overlay");
    //add 80px to account for nav height
    const videoHeight = $(window).height();
    videoOverlay.setAttribute("style", `height: ${videoHeight}px`);
  }, 100);
});
