jQuery(document).ready(function($){

  var options = {
    items:1,
    loop: true,
    autoplayHoverPause:true,
  }
  if($('body').hasClass('rtl')){ options.rtl = true; }
  if(The100SliderData.pager=='true'){ options.dots = true;}
  else{ options.dots = false; }
  if(The100SliderData.autop=='true'){ options.autoplay = true;}
  else{ options.autoplay = false; }
  options.autoplayTimeout = parseInt(The100SliderData.speed);
  if(The100SliderData.controls=='true'){ options.nav = true;}
  else{ options.nav = false; }
  if(The100SliderData.trans=='slideOutLeft'){ options.animateOut = "slideOutLeft";}
  else{ options.animateOut = "fadeOut"; }

  $("#main-slider").owlCarousel(options);

  //Toggling class for search
  $('.menu-search .fa.fa-search').on('click', function(){
   $(this).parent('.menu-search').addClass('menu-search-active');
 });
  $('.header-search-wrap .fa.fa-close').on('click', function(){
   $('.menu-search').removeClass('menu-search-active');
 });

  $('.header-cart .cart-content').on('click', function(){
   $('.header-cart').toggleClass('cart-active');
 });

  //gallery section layout two hover effect
  $('.gallery-section.lay-two .gallery-posts').directionalHover({
  	overlay: "gallery-titledesc-wrap",
  	easing: "swing", 
  	speed: 400
  });

  //responsive menu
  var winWidth = $(window).width();
  if(winWidth<= 980){

    var leftMenu = $('.site-header.lay-three #site-navigation-left ul.menu').html();
    //alert(leftMenu);
    $('.site-header.lay-three #site-navigation ul.menu').append(leftMenu);
    $('#site-navigation-left').hide();

    $('.main-navigation').prepend('<button type="button" class="nav-close"><span clss="nav-arrow"></span></button>');
    $('.main-navigation ul li.menu-item-has-children > a').wrap('<div class="sub-wrap"></div>');
    $('.main-navigation ul li.menu-item-has-children .sub-wrap').append('<button type="button" class="fa fa-angle-down"></button>');
    $('.main-navigation ul ul.sub-menu').hide();
    $('.main-navigation ul li.menu-item-has-children .sub-wrap .fa-angle-down').on('click', function(){
      $(this).parent('.sub-wrap').siblings('.main-navigation ul ul.sub-menu').slideToggle();
    });

  };
  
  $('.main-navigation button.menu-toggle').click(function(){
    $('body').addClass('menu-toggle');
    $('body').css({'overflow':'hidden','height':'100vh','position':'fixed','width':'100%'});
  });
  $('.main-navigation .nav-close').click(function(){
    $('body').removeClass('menu-toggle');
    $('body').css({'overflow':'auto','height':'100vh','position':'relative','width':'100%'});
  });


  $('.aboutservice-section.lay-two .service-titledesc-wrap .service-excerpt').hide();
  $('.aboutservice-section.lay-two .service-titledesc-wrap.expanded .service-excerpt').show();
  $('.aboutservice-section.lay-two .service-titledesc-wrap.collapsed .service-excerpt').hide();
  $('.aboutservice-section.lay-two .service-title').click(function(){
    if($(this).parent('.service-titledesc-wrap').hasClass('expanded')){
      $(this).siblings('.service-excerpt').slideUp('slow');
      $(this).parent('.service-titledesc-wrap').addClass('collapsed').removeClass('expanded');
    }else{
      $(this).siblings('.service-excerpt').slideDown('slow');
      $(this).parent('.service-titledesc-wrap').removeClass('collapsed').addClass('expanded');
    }
  });

  var dirRTL = false;
  if($('body').hasClass('rtl')){ dirRTL = true; }
  $(".testimonial-section.lay-one #testimonial-posts-wrap, .testimonial-section.lay-two.testimonial-only #testimonial-posts-wrap").owlCarousel({
    items:1,
    rtl:dirRTL,
    loop: true,
    autoplay:false,
    //autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav: true,
    dots: true,
    animateOut: 'slideOutLeft',
  });
  $(".testimonial-section.lay-two.testimonial-partner #testimonial-posts-wrap").owlCarousel({
    loop: true,
    autoplay:false,
    rtl:dirRTL,
    //autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav: true,
    dots: true,
    animateOut: 'slideOutLeft',
    //margin:30
    responsive: {
      0:{
        items:1
      },
      640:{
        items:2
      }
    }
  });

  $('#es-top').css('right', -65);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#es-top').css('right', 20);
    } else {
      $('#es-top').css('right', -65);
    }
  });

  $('.menu').addClass('nav-menu');

  $("#es-top").click(function () {
    $('html,body').animate({scrollTop: 0}, 600);
  });

  new WOW().init();

}); //doc close

function toggleDarkMode() { // jshint ignore:line
  var toggler = document.getElementById( 'dark-mode-toggler' );

  if ( 'false' === toggler.getAttribute( 'aria-pressed' ) ) {
    toggler.setAttribute( 'aria-pressed', 'true' );
    document.documentElement.classList.add( 'is-dark-theme' );
    document.body.classList.add( 'is-dark-theme' );
    window.localStorage.setItem( 'the100DarkMode', 'yes' );
  } else {
    toggler.setAttribute( 'aria-pressed', 'false' );
    document.documentElement.classList.remove( 'is-dark-theme' );
    document.body.classList.remove( 'is-dark-theme' );
    window.localStorage.setItem( 'the100DarkMode', 'no' );
  }
}

function the100IsDarkMode() {
  var isDarkMode = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;

  if ( 'yes' === window.localStorage.getItem( 'the100DarkMode' ) ) {
    isDarkMode = true;
  } else if ( 'no' === window.localStorage.getItem( 'the100DarkMode' ) ) {
    isDarkMode = false;
  }

  return isDarkMode;
}

function darkModeInitialLoad() {
  var toggler = document.getElementById( 'dark-mode-toggler' ),
    isDarkMode = the100IsDarkMode();

  if ( isDarkMode ) {
    document.documentElement.classList.add( 'is-dark-theme' );
    document.body.classList.add( 'is-dark-theme' );
  } else {
    document.documentElement.classList.remove( 'is-dark-theme' );
    document.body.classList.remove( 'is-dark-theme' );
  }

  if ( toggler && isDarkMode ) {
    toggler.setAttribute( 'aria-pressed', 'true' );
  }
}
darkModeInitialLoad();
