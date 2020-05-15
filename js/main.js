const $btnTop = $("#to-top-btn");

const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    $btnTop.fadeIn();
  } else {
    $btnTop.fadeOut();
  }
};


$(".popup").magnificPopup({
  type: "image"
});

$(window).on("scroll", updateButton);

$btnTop.on("click", (e) => {
  e.preventDefault();

  $("html, body").animate({ scrollTop: 0 }, 600);
});

updateButton();