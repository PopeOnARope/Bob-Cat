const news = [
  {
    url:
      "https://www.holycitysinner.com/2019/08/24/local-band-sexbruise-to-release-new-ep-on-august-30th/",
    title: "Sexbruise? to Release New 5 song EP <i>Real Gold</i>",
    img:
      "https://www.holycitysinner.com/wp-content/uploads/2019/08/artworks-000584722856-0l93z4-t500x500.jpg"
  },
  {
    url:
      "https://www.charlestoncitypaper.com/FeedbackFile/archives/2019/07/16/sexbruise-shot-a-music-video-last-week-but-we-still-have-no-clue-what-its-about",
    title:
      "Sexbruise? shot a music video last week, but we still have no clue what it's about",
    img:
      "https://media1.fdncms.com/charleston/imager/u/blog/28861679/img_5474.jpg?cb=1563306424"
  },

  {
    url:
      "https://www.charlestoncitypaper.com/FeedbackFile/archives/2017/11/16/live-music-dudes-and-dolly-sexbruise-fake-news-huey-lewis-tribute-punks-in-the-cheese-house",
    title:
      "You know that age-old question, “The Beatles or the Stones?” Well, Sexbruise? is the answer",
    img:
      "https://media1.fdncms.com/charleston/imager/u/blog/12995578/sexb.jpg?cb=1511189760"
  },
  {
    url:
      "https://www.charlestoncitypaper.com/FeedbackFile/archives/2015/10/13/sexbruise-is-back-with-their-brand-of-damn-good-but-ridiculous-randb",
    title:
      "Sexbruise? is back with their brand of damn good but ridiculous R&B",
    img:
      "https://media1.fdncms.com/charleston/imager/u/blog/12995578/sexb.jpg?cb=1511189760"
  },
  {
    url:
      "https://www.charlestoncitypaper.com/charleston/pizza-hut-presents-sexbruise-question-a-band-an-enigma/Content?oid=5036321",
    title:
      "Sexbruise? named Charleston City Paper's Electronic Act of the Year",
    img:
      "https://media1.fdncms.com/charleston/imager/sexbruise-has-creative-ideas-and-an-hones/u/magnum/5036322/sexbruisemag.jpg"
  },
  {
    url:
      "https://www.charlestoncitypaper.com/charleston/the-2018-city-paper-music-awards/Content?oid=24696763",
    title:
      "Sexbruise? named <i>Experimental Act of the Year</i> by Charleston City Paper",
    img: "https://media2.fdncms.com/charleston/imager/u/magnum/24733019/mar.jpg"
  }
];

const setAllTheSizes = () => {
  const video = document.getElementById("video");
  const videoOverlay = document.getElementById("video-overlay");

  const videoHeight = $(video).height();
  const windowHeight = $(window).height();
  const overlayHeight = videoHeight > windowHeight ? windowHeight : videoHeight;
  videoOverlay.setAttribute("style", `height: ${overlayHeight}px`);

  // resize youtube iframe based on screen width
  const $yt = $(".youtube");

  const $img = $(".img-container");
  const ytWidth = $yt.width();
  $yt.css("height", `${ytWidth * 0.5625}`);

  $img.css("height", windowHeight);
};

$(() => {
  setTimeout(function() {
    setAllTheSizes();
    $("img.img-responsive").remove();
  }, 100);

  setTimeout(function() {}, 1000);
  // iterate over news stories and generate widgets
  const appendNewsStories = () => {
    const $section = $("#news-section ul");

    const newsStories = news.map(
      ({ url, title, img }) =>
        `<li style="margin-right: 16px;">
            <a href="${url}">
            <div class="card" style="width: 18rem; color: black; background: #ddd; height: 100%;">
             <img class="card-img-top" src="${img}" alt="Card image cap">
             <div class="card-body">
               <p class="card-text">${title}</p>
             </div>  
           </div>
          </a>
        </li>`
    );

    $section.append(newsStories);
  };
  appendNewsStories();

  $(window).resize(setAllTheSizes());

  //handle nav link clicks and scrolls
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
