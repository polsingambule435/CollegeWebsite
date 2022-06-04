// New Window Open File >
function about_page() {
  window.open("about_us/about.html");
}
function log_in_page() {
  window.open("log_in/login.html");
}
function registration_page() {
  window.open("registration/registration.html");
}
function location_page() {
  window.open("https://g.page/GHRCE?share");
}
function facebook_page() {
  window.open("https://www.facebook.com/raisoniworld/");
}
function twitter_page() {
  window.open("https://twitter.com/raisoniworld?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
}
function pinteres_page() {
  window.open("https://in.pinterest.com/raisoniuniversity/");
}
function instagram_page() {
  window.open("https://www.instagram.com/raisoniworld/?hl=en");
}
// New Window Open File <

// slider >
    $('.logo-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplayspeed: 2000,
        infiniite: true
    });
// slider <

// Toggle Button >
    $(".toggle-btn").click(function(){
      $(".side-menu").toggleClass("active");
      $(this).toggleClass("fa-chevron-right");
    });
// Toggle Button <
// slider >
  $('.bslider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  loop:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}); 
// slider <
   new WOW().init();  
