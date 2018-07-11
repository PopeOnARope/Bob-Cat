$(() => {
  // const incrementNumber = n => Math.floor(Math.random() * 100) + 100;
  // const decrementNumber = n => n - Math.floor(Math.random() * 10);
  //
  // const mainHeading = document.getElementsByClassName("main-heading")[0];
  //
  // const changeColors = (r, g, b) => {
  //   r = r ? r : 0;
  //   g = g ? g : 0;
  //   b = b ? b : 0;
  //   setTimeout(function() {
  //     r = incrementNumber(r);
  //     g = incrementNumber(g);
  //     b = incrementNumber(b);
  //     console.log(r, g, b);
  //
  //     mainHeading.setAttribute("style", `color: rgba(${r},${g},${b});`);
  //     changeColors(r, g, b);
  //   }, 200);
  // };
  // // changeColors();
  setTimeout(function() {
    const video = document.getElementById("video");
    const videoOverlay = document.getElementById("video-overlay");
    //add 80px to account for nav height
    const videoHeight = video.clientHeight + 80;
    videoOverlay.setAttribute("style", `height: ${videoHeight}px`);
  }, 30);
  // video.play();
});
