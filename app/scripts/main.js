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
    slidesToShow: 3,
    focusOnSelect: true,
    centerPadding: 200,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>'
  });

  $('.js-corporative-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: false,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>'
  });

  $('.js-wedding-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>'
  });

  $('.js-adult-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    centerPadding: 80,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>'
  });

  $('.js-festival-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    centerPadding: 80,
    focusOnSelect: true,
    nextArrow: '<button class="arrow arrow--next"></button>',
    prevArrow: '<button class="arrow arrow--prev"></button>'
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

// $(function () {
//   $('window').on('scroll', animateElements);
//
//   function animateElements() {
//     console.log("cd");
//     $('.js-celebration').addClass('is-inview')
//   }
// });
// var canvas;
// var context;
// var screenH;
// var screenW;
// var stars = [];
// var fps = 50;
// var numStars = 2000;
//
// $('document').ready(function() {
//
//   // Calculate the screen size
//   screenH = $(window).height();
//   screenW = $(window).width();
//
//   // Get the canvas
//   canvas = $('.space');
//
//   // Fill out the canvas
//   canvas.attr('height', screenH);
//   canvas.attr('width', screenW);
//   context = canvas[0].getContext('2d');
//
//   // Create all the stars
//   for(var i = 0; i < numStars; i++) {
//     var x = Math.round(Math.random() * screenW);
//     var y = Math.round(Math.random() * screenH);
//     var length = 1 + Math.random() * 2;
//     var opacity = Math.random();
//
//     // Create a new star and draw
//     var star = new Star(x, y, length, opacity);
//
//     // Add the the stars array
//     stars.push(star);
//   }
//
//   setInterval(animate, 2000 / fps);
// });
//
// function animate() {
//   context.clearRect(0, 0, screenW, screenH);
//   $.each(stars, function() {
//     this.draw(context);
//   })
// }
//
// //
// function Star(x, y, length, opacity) {
//   this.x = parseInt(x);
//   this.y = parseInt(y);
//   this.length = parseInt(length);
//   this.opacity = opacity;
//   this.factor = 1;
//   this.increment = Math.random() * .03;
// }
//
//
// Star.prototype.draw = function() {
//   context.rotate((Math.PI * 1 / 10));
//
//   // Save the context
//   context.save();
//
//   // move into the middle of the canvas, just to make room
//   context.translate(this.x, this.y);
//
//   // Change the opacity
//   if(this.opacity > 1) {
//     this.factor = -1;
//   }
//   else if(this.opacity <= 0) {
//     this.factor = 1;
//
//     this.x = Math.round(Math.random() * screenW);
//     this.y = Math.round(Math.random() * screenH);
//   }
//
//   this.opacity += this.increment * this.factor;
//
//   context.beginPath()
//   for (var i = 5; i--;) {
//     context.lineTo(0, this.length);
//     context.translate(0, this.length);
//     context.rotate((Math.PI * 2 / 10));
//     context.lineTo(0, - this.length);
//     context.translate(0, - this.length);
//     context.rotate(-(Math.PI * 6 / 10));
//   }
//   context.lineTo(0, this.length);
//   context.closePath();
//   context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
//   context.shadowBlur = 5;
//   context.shadowColor = '#ffff33';
//   context.fill();
//
//   context.restore();
// }

// var vw = $( window ).width(),
//   vh = $(window).height(),
//   num = vw/20;
//
// num = Math.max(num, 50);

// function random(high){
//   return Math.random() * high;
// }
//
// for(var i = 0; i<= num; i++){
//   $('#confetti-container').append("<div class='confetti' style='background-color: rgb(" + Math.round(random(255)) + "," + Math.round(random(255)) + "," + Math.round(random(255)) + ");'></div>")
// }
//
// var $confetti = $('.confetti'),
//   tl = new TimelineMax();
//
// tl.add('start')
//
// $confetti.each(function(index, element){
//   var dot = $(this),
//     dotTL = new TimelineMax();
//
//   //set each confetti piece
//   dotTL.set(dot, {
//     x: random(vw),
//     y: random(-vh) - 10,
//     scale: random(1) + 1,
//     opacity: random(1),
//     transformStyle:"preserve-3d"
//   });
//
//   tl.to(dot, 6, {
//     y: vh + 100,
//     ease:Sine.easeInOut,
//     repeat:-1,
//     opacity: random(2),
//     delay: -6,
//     scale: random(1) + 1
//   }, random(6), 'start')
//
//   tl.to(dot, 2,{
//     x:'+=' + random(100),
//     repeat:-1,
//     yoyo:true,
//     ease:Sine.easeInOut
//   }, random(2), 'start')
//
//   tl.to(dot, random(4),{
//     repeat:-1,
//     yoyo:true,
//     rotationX: random(270),
//     rotationY: random(270),
//     ease:Sine.easeInOut
//   }, random(2), 'start')
//
// });

if ($(window).width() > 1024) {
  $('.js-init-scroll').onepage_scroll({
    updateUrl: true,
    easing: 'ease',
    animationTime: 1000,
    loop: false,
    keyboard: true,
    pagination: false
  })
}
