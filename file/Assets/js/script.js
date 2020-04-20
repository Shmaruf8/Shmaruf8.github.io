// section home owl-carousel
$(document).ready(function(){
  $("#home .owl-carousel").owlCarousel({
      items:1,
      nav: true,
      dots:false,
  });
});
// product home owl-carousel
$(document).ready(function(){
  $("#product .owl-carousel").owlCarousel({
      items:8,
      nav: true,
      dots:false,
      autoplay:true,
      // margin:20,
      autoplayTimeout:3000,
      autoplaySpeed:1000,
      rewind:true,
  });
});
// offers home owl-carousel
$(document).ready(function(){
  $("#offers .owl-carousel").owlCarousel({
      items:6,
      nav: true,
      dots:false,
  });
});
// new home owl-carousel
$(document).ready(function(){
  $("#new .owl-carousel").owlCarousel({
      items:6,
      nav: true,
      dots:false,
  });
});
