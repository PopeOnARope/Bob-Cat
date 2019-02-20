$(() => {
  const setAllTheSizes = () => {
    const video = document.getElementById("video");
    const videoOverlay = document.getElementById("video-overlay");

    const videoHeight = $(video).height();
    const windowHeight = $(window).height();
    const overlayHeight =
      videoHeight > windowHeight ? windowHeight : videoHeight;
    videoOverlay.setAttribute("style", `height: ${overlayHeight}px`);
    // debugger

    // resize youtube iframe based on screen width
    const $yt = $(".youtube");

    const $img = $(".img-container");
    const ytWidth = $yt.width();
    $yt.css("height", `${ytWidth * 0.5625}`);

    $img.css("height", windowHeight);
  };
  setTimeout(function() {
    setAllTheSizes();
    $("img.img-responsive").remove();
  }, 100);

  setTimeout(function() {
    console.log("rem");
    console.log($(".img-responsive"));
  }, 1000);

  $(window).resize(setAllTheSizes());

  $(".navlink").click(e => {
    const el = e.target.attributes.href;
    const selector = $(el.value);

    $("html, body").animate(
      {
        scrollTop: $(`${el.value}-section`).offset().top - 81
      },
      1000
    );
  });
});
