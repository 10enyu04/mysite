const $btnTop = $("#to-top-btn");

const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    $btnTop.fadeIn();
  } else {
    $btnTop.fadeOut();
  }
};

// 背景画像のスクロール速度。数字が小さいほど速い。
const speed = 3;
const $window = $(window);

// スライド1枚の高さを保持する変数
let slideHeight;

// パララックスを適用する関数
const showParallax = () => {
  const scrollTop = $window.scrollTop();

  // 各スライドの背景位置をスクロールに合わせて変える
  $('.parallax-section').each((index, element) => {
    const pos = Math.round((slideHeight * index - scrollTop) / speed);
    $(element).css({
      'background-position': `center ${pos}px`,
    });
  });
};

// パララックスの初期設定をする関数
const initParallax = () => {
  // ウインドウの高さをスライド1枚分の高さとする
  slideHeight = $window.height();

  // 表示を更新
  showParallax();
};

// スクロールのたびにshowParallax関数を呼ぶ
$window.on('scroll', showParallax);

$window.on('resize', () => {
  // ウインドウがリサイズされるとここが実行される
  initParallax();
});

initParallax();


$(".navbar-brand").on("click", (e) => {
  e.preventDefault();
  $("body, html").animate({ scrollTop: 0 }, 600);
});

$(window).on("click", (e) => {
  e.preventDefault();
  console.log($("#nav-bar").is(":visible"));
  if ($("#nav-bar").is(":visible")) {
    $(".navbar-toggler").trigger("click");
  } 
});

$(".nav-item a").on("click", (e) => {
  const destination = $(e.target).attr("href");
  e.preventDefault();
  $("body, html").animate({
    scrollTop: $(destination).offset().top,
  },
  600);
});

$(".animated").waypoint({
  handler(direction) {
    if (direction === "down") {
      $(this.element)
        .removeClass("zoomOut")
        .addClass("fadeInUp");
    } else if (direction === "up") {
      $(this.element)
        .removeClass("fadeInUp")
        .addClass("zoomOut");
    }
  },
  offset: "100%"
});

$(document).ready(function() {
	$('.popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
});

$(window).on("scroll", updateButton);

$btnTop.on("click", (e) => {
  e.preventDefault();

  $("html, body").animate({ scrollTop: 0 }, 600);
});

updateButton();