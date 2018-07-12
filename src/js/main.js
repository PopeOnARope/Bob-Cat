$(() => {
  setTimeout(function() {
    const video = document.getElementById("video");
    const videoOverlay = document.getElementById("video-overlay");
    //add 80px to account for nav height
    const videoHeight = video.clientHeight + 80;
    videoOverlay.setAttribute("style", `height: ${videoHeight}px`);
  }, 100);

  /**
   * Change page title when out of focus
   */
  function check() {
    if(document.hasFocus() == lastFocusStatus) return;
    lastFocusStatus = !lastFocusStatus;
    statusEl.innerText = lastFocusStatus ? 'Sexbruise?' : 'Baby Come Back!';
  }
  window.statusEl = document.getElementById('status');
  window.lastFocusStatus = document.hasFocus();
  check();
  setInterval(check, 200);
});
