var $window = $(window);
var windowHeight = $window.height();
var windowWidth = $window.width();
var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
var pos = $window.scrollTop();
var wx;
var top_h;
var slider1;
/* ==========================================================================
            * 變數定義
==========================================================================*/
h = $(window).height();
w = $(window).width();

$winH = $('.winH');
$jqimgFill = $('.jqimgFill');
$pro55 = $('.pro55');
$pro64 = $('.pro64');
$banner = $('.banner');

if (typeof console == "undefined") { window.console = { log: function() {} } } // Console IE fix
$(document).ready(function() {
    resizeCss();
    /* ==========================================================================
                  * banner
      ==========================================================================*/
    // $('.bannerImg').slick({
    //     dots: true,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 8000,
    //     infinite: true,
    //     speed: 1000,
    //     fade: true,
    //     cssEase: 'ease',
    //     //vertical: true,
    //     pauseOnHover: false,
    // });

    // $('.activities_lsit ul').slick({
    //     dots: true,
    //     infinite: true,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     fade: true,
    //     autoplay: true,
    //     autoplaySpeed: 3500,
    //     infinite: true,
    //     speed: 1000,
    //     cssEase: 'ease',
    //     //vertical: true,
    //     pauseOnHover: false,
    // });

    // $('.imgContent ul').slick({
    //     infinite: true,
    //     fade: true,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,

    //     autoplay: true,
    //     autoplaySpeed: 3500,
    //     infinite: true,
    //     speed: 1000,
    //     cssEase: 'ease',
    //     //vertical: true,
    //     pauseOnHover: false,
    // });
    // $('.hotContent').slick({
    //     dots: true,
    //     arrows: true,
    //     autoplay: true,
    //     autoplaySpeed: 3500,
    //     infinite: true,
    //     speed: 1000,

    //     cssEase: 'ease',
    //     //vertical: true,
    //     pauseOnHover: false,
    // });
    /* ==========================================================================
                  * index
      ==========================================================================*/
    // $('.hotList').slick({
    //     dots: true,
    //     speed: 500,
    //     fade: false,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     autoplay: true,
    //     autoplaySpeed: 4500,
    //     cssEase: 'linear'
    // });

    // $('.alumnus_list ul').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     autoplay: true,
    //     autoplaySpeed: 4500,
    //     responsive: [{
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1
    //         }
    //     }, 
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //           }
    //         }
    //     ]
    // });

    // $('.caseBox .caseStudies ul').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     responsive: [{
    //         breakpoint: 800,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     }, 
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1
    //           }
    //         }
    //     ]
    // });

    // $('.caseListBox .caseList').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     responsive: [{
    //             breakpoint: 780,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         }

    //     ]
    // });

    // $('.dosList').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     autoplay: true,
    //     autoplaySpeed: 4500,
    //     responsive: [{
    //         breakpoint: 780,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     }]
    // });
    var slickdotsLength = $('.surroundingsBox .slick-dots li').length;
    var slickdotsWidth = $('.surroundingsBox .slick-dots li').outerWidth();
    var slickdots = slickdotsWidth * slickdotsLength + slickdotsWidth + 11;
    $('.surroundingsBox .slick-dots').css('max-width', slickdots);

    $(".newvideoBox iframe ").attr("width", "100%");
    $(".newvideoBox iframe ").attr("height", "100%");
    var i = 1;
    $('.imgLiquidFill img').on('load', function() {
        $(this).parent('.imgLiquidFill').imgLiquid();
        $(this).parent('.imgLiquidFill').addClass('ed');
    }).each(function() {
        if (this.complete) $(this).load();
    });
    var loadn = 0;
    var allimgs = $('img').length;
    // $('img').on('load', function() {
    //     $(this).parent('.imgLiquidFill').imgLiquid();
    //     loadn++;
    //     var iw = (loadn / allimgs) * 100;
    //     $('.loadbar').width(iw + '%');
    //     if (iw == 100) {
    //         setTimeout("$('.loadbar').addClass('ed');", 400);
    //         setTimeout("$('.loading').fadeOut(1000);", 1600);
    //     }
    // }).each(function() {
    //     if (this.complete) $(this).load();
    // });
    /* ==========================================================================
                  * 選單
      ==========================================================================*/
    //desk
    $('.top_menu .subheader').on('mouseenter', function() {
        if (windowWidth > 480) {
            if (!$(this).find('a').hasClass('on')) {
                $('.top_menu>ul>li a.on').next('.submenu').stop().slideUp(200, 'easeInOutSine', function() { $(this).removeAttr('style'); });
                $('.top_menu>ul>li a.on').removeClass('on');
            }
            $(this).find('a').addClass('on');
            $(this).find('.submenu').slideDown(400, 'easeInOutSine');
        }
    });
    $('.top_menu .subheader').on('mouseleave', function() {
        if (windowWidth > 480) {
            $('.top_menu ul>li>a.on').next('.submenu').stop().slideUp(200, 'easeInOutSine', function() { $(this).removeAttr('style'); });
            $('.top_menu ul>li>a.on').removeClass('on');
        }
    });
    //第三層
    $('.top_menu .subheader .submenu li').on('mouseenter', function() {
        if (windowWidth > 480) {
            $(this).find('.subitem').stop().slideDown(400, 'easeInOutSine');
        }
    });
    $('.top_menu .subheader .submenu li').on('mouseleave', function() {
        if (windowWidth > 480) {
            $(this).find('.subitem').stop().slideUp(50, 'easeInOutSine');
        }
    });
    //手機板點下後
    $('.subheader>a').on('click', function(e) {
        if (windowWidth <= 480) {
            if (!$(this).hasClass('on')) {
                $('.top_menu>ul>li a.on').next('.submenu').stop().slideUp(200);
                $('.top_menu>ul>li a.on').removeClass('on');
            }
            $(this).addClass('on');
            $(this).next('.submenu').slideDown(400, 'easeInOutSine');
        }
    });
    $('.submenu li .mmBtn').on('click', function() {
        $('.subitem').stop().slideUp(200, 'easeInOutSine');
        $(this).parent('.submenu li').find('.subitem').stop().slideDown(400, 'easeInOutSine');
        return false;
    });
    $('#header, .top_menu , #content').on('click', function(e) {
        $("body,html").css({ "overflow": "" });

    });
    //手機選單展開

    $('.top_menu .icon').on('click', function(e) {
        if (!$(this).hasClass('on')) {
            $('.top_menu>.icon, .top_menu>ul, #header').addClass('on');
            $("html,body").css({ 'overflow': 'hidden' })
            $('.mask').css({ "left": "0" });
        } else {
            $("html,body").css({ 'overflow': '' })
            $('.mask').css({ "left": "-100%" });
            $('.top_menu>.icon, .top_menu>ul, #header').removeClass('on');
        }
        return false;
    });
    $('.closeBtn').on('click', function() {
        $("html,body").css({ 'overflow': '' })
        $('.mask').css({ "left": "-100%" });
        $('.top_menu>.icon, .top_menu>ul, #header').removeClass('on');
    });

    $('.serMenu .subheader').on('click', function() {
        $('.serMenu .subheader').removeClass('open');
        event.stopPropagation();
        if ($(this).hasClass('on') != true) {
            $('.serMenu .subheader ').removeClass('on');
            $(this).addClass('on');
            $('.serMenu .subheader ').children('ul').stop().slideUp(200);
        }
        $(this).addClass('on');
        $(this).children('ul').slideDown(400, 'easeInOutSine');

        // if($(this).hasClass('open')){
        //     $(this).removeClass('open');
        //     $(this).addClass('on');
        //     $(this).children('submenu').stop().slideDown(0);
        // }
    });


    $('.leftNav').on('click', function(e) {
          var windowWidth = $window.width();
        if (windowWidth <= 768) {
            if ($(this).hasClass('leftopen')) {
                $(this).children('.leftMenu').stop().slideUp(200);
                $(this).removeClass('leftopen');
                $(this).removeAttr('style');
            }else{
                $(this).addClass('leftopen');
                $(this).children('.leftMenu').stop().slideDown(400, 'easeInOutSine');               
            }

        }
    });
    //變更視窗尺寸時
    $window.on('resize', function() {
        //目前尺寸
        wx = windowWidth;
        hx = windowHeight;
        //變動後尺寸
        windowWidth = $window.width();
        windowHeight = $window.height();
    }); //RESIZE END

    //捲動視窗
    $window.bind('scroll', function() {
        pos = $window.scrollTop();
        windowWidth = $window.width();
        var scrollTop = $(this).scrollTop();
        var top = $('.online');
        var hea = $('.header');
        //top
        // if (scrollTop >= $('.banner').offset().top - 50) {
        //     top.addClass('open');
        // } else if (scrollTop <= $('.banner').offset().top) {
        //     top.removeClass('open');
        // }
        // if (scrollTop >= 47) {
        //     hea.addClass('open');
        // } else if (scrollTop <= $('.banner').offset().top) {
        //     hea.removeClass('open');
        // }
        // if (scrollTop >= $('.banner').offset().top - 50) {
        //     top.addClass('open');
        // } else if (scrollTop <= $('.banner').offset().top) {
        //     top.removeClass('open');
        // }
        var mainHegiht = $('main');
        if (scrollTop >= 47) {
            hea.addClass('open');
            top.addClass('open');
        } else{
            hea.removeClass('open');
             top.removeClass('open');
        }
        // if (scrollTop >= $('main').offset().top - 50) {
        //     top.addClass('open');
        // } else if (scrollTop <= $('main').offset().top){
        //     top.removeClass('open');
        // }
    });


    //變更尺寸及捲動視窗時
    $window.bind('scroll resize', function() {});

    /* ==========================================================================
                * QA
    ==========================================================================*/
    $('.qabox ul>li').on('click', function(event) {
        event.preventDefault();
        if (!$(this).children('.qa_list').hasClass('show')) {
            // 關閉
            $('.qabox ul>li .qa_list').removeClass('show');
            $('.qabox ul>li .qa_content').stop().slideUp(400);
            //打開
            $(this).children('.qa_list').addClass('show');
            $(this).children('.qa_content').stop().slideDown(400, 'easeInOutSine');
        }else{
            // 關閉
            $('.qabox ul>li .qa_list').removeClass('show');
            $('.qabox ul>li .qa_content').stop().slideUp(400); 
        }
    });
    /* ==========================================================================
                * 螢幕縮放動作
    ==========================================================================*/
    $(window).resize(function() {
        resizeCss();
    });

    function resizeCss() {
        h = $(window).height();
        w = $(window).width();

        /*頁面高度*/
        $winH.each(function() {
            $(this).css("height", h);
        });
        /*正方形*/
        $pro55.each(function() {
            $(this).css("height", $(this).width());
        });
        /*長方形*/
        $pro64.each(function() {
            $(this).css("height", $(this).width() / 1.54);
        });
        /*縮圖*/
        $jqimgFill.each(function() {
            $(this).focusPoint();
        });

        /*首頁用縮圖*/
        // $("#wrapper").each(function() {
        //     $(".activities_img,.alumnus_photo, .banner .jqimgFill, .bg-pic .jqimgFill,.project li .proImg span,.caseBox .casePhoto div,.hotImg,.medicalContent .imgContent li,.newsImg, .casePhoto.jqimgFill").imgLiquid();
        // });

    }
    /* ==========================================================================
                  * 最新消息頁籤
      ==========================================================================*/
    $('.new_surroBox .tag_List li').on('click', function() {
        var st_current = $(this).index();
        $('.tag_List li.active').removeClass('active');
        $(this).addClass('active');
        $('.tagContent.active').removeClass('active');
        $('.tagContent:eq(' + st_current + ')').addClass('active');
    });
    $('.tag_List li:eq(0),.tagContent:eq(0)').addClass('active');

    /* ==========================================================================
                  * 線上諮詢&top
      ==========================================================================*/

    pos = ($(window).outerHeight() / 2 - $(".online").height() / 2) + $('header').outerHeight();
    $(".online ").css("top", pos);

    $(".top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000, 'easeOutExpo');
        return false;
    });


    if (windowWidth <= 768) {
        $(".mob .fb-page").attr("data-width", "600");
        $(".videoBox iframe ").attr("height", "320");
    };
    if (windowWidth <= 480) {
        $(".mob .fb-page").attr("data-width", "300");
        $(".videoBox iframe ").attr("height", "263");


    } else if (windowWidth >= 768) {
        $('.itemBox .videoBox iframe ').attr("height", "263");
    }
    if (windowWidth <= 375) {
        $('.fb-like').attr("data-width", "320");
    }
    if (windowWidth <= 320) {
        $(".mob .fb-page").attr("data-width", "320");
        $('.fb-like').attr("data-width", "280");
    }
});