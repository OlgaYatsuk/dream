$(function () {
  const $connectionBtn = $('.js-connection-btn');
  const $connectionMenu = $('.js-connection-menu');

  $connectionBtn.on('click', showMenu);
  $(document).on('mouseup', handleDocumentClick);

  function showMenu() {
    $(this).toggleClass('is-active');
    $connectionMenu.toggleClass('is-visible');
  }

  function handleDocumentClick(e) {
    if ($('document').has(e.target).length === 0) {
      $connectionMenu.removeClass('is-visible');
    }
  }
});

$(function () {
  $('.js-birthday-slider').slick({
    centerMode: true,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 200,
    mobileFirst: true,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      }]
  });

  $('.js-corporative-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false,
    mobileFirst: true,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>',

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      }]
  });

  $('.js-wedding-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    mobileFirst: true,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>',
  });

  $('.js-adult-slider').slick({
    centerMode: true,
    slidesToShow: 1,
    focusOnSelect: true,
    centerPadding: 80,
    mobileFirst: true,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      }]
  });

  $('.js-festival-slider').slick({
    centerMode: true,
    slidesToShow: 1,
    centerPadding: 80,
    focusOnSelect: true,
    mobileFirst: true,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      }]
  });
});

$(function () {
  const $text = $('.js-text-hidden');
  const $textExpandingBtn = $('.js-expanding-btn');

  $textExpandingBtn.on('click', expandText);

  function expandText() {
    $text.slideToggle();
  }
});

if ($(window).width() > 1024) {
  $('.js-init-scroll').onepage_scroll({
    updateUrl: true,
    easing: 'ease',
    animationTime: 800,
    loop: false,
    updateURL: false,
    keyboard: true,
    pagination: false,
  },
  scrollTo()
);

}

$(function () {

});
