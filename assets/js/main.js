// FIXED NAVBAR AND BACK TO TOP START

$(document).ready(function () {

  $(window).scroll(function () {
      ($(window).scrollTop())
      if ($(window).scrollTop() > 63) {
          $('header').addClass('fix-nav');
      }
      if ($(window).scrollTop() < 64) {
          $('header').removeClass('fix-nav');
      }
  });

  var btn = $('#backtop');
  $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
          btn.addClass('show');
      } else {
          btn.removeClass('show');
      }
  });

  btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
  });


});

// FIXED NAVBAR AND BACK TO TOP END
// Banner Slider
$('.banner-slider').slick({
    infinite: true,
    speed: 1000,
    autoplaySpeed:1000,
    autoplay: true,
    fade:true,
    arrows:false,
    pauseOnHover:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        autoplay: true,
      },
      {
        breakpoint: 600,
        autoplay: true,
      },
      {
        breakpoint: 480,
        autoplay: true,
      }
    ]
  });
// Team Slider
  $('.ourTeam-slider').slick({
    infinite: true,
    speed: 500,
    autoplaySpeed:1000,
    autoplay: true,
    pauseOnHover:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
// EVENT Slider
$('.eventlist-slider').slick({
  infinite: true,
  vertical:true,
  speed: 500,
  autoplaySpeed:1000,
  autoplay: true,
  pauseOnHover:true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// Testimoanial Slider
$('.testi-slider').slick({
  infinite: true,
  speed: 500,
  autoplaySpeed:1000,
  autoplay: true,
  pauseOnHover:true,
  dots: true,
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// BLOG Slider
$('.post-slider').slick({
  infinite: true,
  speed: 500,
  autoplaySpeed:1000,
  autoplay: true,
  pauseOnHover:true,
  dots: true,
  arrows:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


