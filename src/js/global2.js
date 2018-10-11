"use strict";var wx,top_h,slider1,$window=$(window),windowHeight=$window.height(),windowWidth=$window.width(),$body=window.opera?"CSS1Compat"==document.compatMode?$("html"):$("body"):$("html,body"),pos=$window.scrollTop();/* ==========================================================================
            * 變數定義
==========================================================================*/ // Console IE fix
h=$(window).height(),w=$(window).width(),$winH=$(".winH"),$jqimgFill=$(".jqimgFill"),$pro55=$(".pro55"),$pro64=$(".pro64"),$banner=$(".banner"),"undefined"==typeof console&&(window.console={log:function a(){}}),$(document).ready(function(){function a(){/*頁面高度*/ /*正方形*/ /*長方形*/ /*縮圖*/h=$(window).height(),w=$(window).width(),$winH.each(function(){$(this).css("height",h)}),$pro55.each(function(){$(this).css("height",$(this).width())}),$pro64.each(function(){$(this).css("height",$(this).width()/1.54)}),$jqimgFill.each(function(){$(this).focusPoint()})}/* ==========================================================================
                  * 最新消息頁籤
      ==========================================================================*/a();/* ==========================================================================
                  * banner
      ==========================================================================*/ // $('.bannerImg').slick({
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
      ==========================================================================*/ // $('.hotList').slick({
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
var b=$(".surroundingsBox .slick-dots li").length,c=$(".surroundingsBox .slick-dots li").outerWidth();$(".surroundingsBox .slick-dots").css("max-width",c*b+c+11),$(".newvideoBox iframe ").attr("width","100%"),$(".newvideoBox iframe ").attr("height","100%");$(".imgLiquidFill img").on("load",function(){$(this).parent(".imgLiquidFill").imgLiquid(),$(this).parent(".imgLiquidFill").addClass("ed")}).each(function(){this.complete&&$(this).load()});$("img").length;$(".top_menu .subheader").on("mouseenter",function(){480<windowWidth&&(!$(this).find("a").hasClass("on")&&($(".top_menu>ul>li a.on").next(".submenu").stop().slideUp(200,"easeInOutSine",function(){$(this).removeAttr("style")}),$(".top_menu>ul>li a.on").removeClass("on")),$(this).find("a").addClass("on"),$(this).find(".submenu").slideDown(400,"easeInOutSine"))}),$(".top_menu .subheader").on("mouseleave",function(){480<windowWidth&&($(".top_menu ul>li>a.on").next(".submenu").stop().slideUp(200,"easeInOutSine",function(){$(this).removeAttr("style")}),$(".top_menu ul>li>a.on").removeClass("on"))}),$(".top_menu .subheader .submenu li").on("mouseenter",function(){480<windowWidth&&$(this).find(".subitem").stop().slideDown(400,"easeInOutSine")}),$(".top_menu .subheader .submenu li").on("mouseleave",function(){480<windowWidth&&$(this).find(".subitem").stop().slideUp(50,"easeInOutSine")}),$(".subheader>a").on("click",function(){480>=windowWidth&&(!$(this).hasClass("on")&&($(".top_menu>ul>li a.on").next(".submenu").stop().slideUp(200),$(".top_menu>ul>li a.on").removeClass("on")),$(this).addClass("on"),$(this).next(".submenu").slideDown(400,"easeInOutSine"))}),$(".submenu li .mmBtn").on("click",function(){return $(".subitem").stop().slideUp(200,"easeInOutSine"),$(this).parent(".submenu li").find(".subitem").stop().slideDown(400,"easeInOutSine"),!1}),$("#header, .top_menu , #content").on("click",function(){$("body,html").css({overflow:""})}),$(".top_menu .icon").on("click",function(){return $(this).hasClass("on")?($("html,body").css({overflow:""}),$(".mask").css({left:"-100%"}),$(".top_menu>.icon, .top_menu>ul, #header").removeClass("on")):($(".top_menu>.icon, .top_menu>ul, #header").addClass("on"),$("html,body").css({overflow:"hidden"}),$(".mask").css({left:"0"})),!1}),$(".closeBtn").on("click",function(){$("html,body").css({overflow:""}),$(".mask").css({left:"-100%"}),$(".top_menu>.icon, .top_menu>ul, #header").removeClass("on")}),$(".serMenu .subheader").on("click",function(){$(".serMenu .subheader").removeClass("open"),event.stopPropagation(),!0!=$(this).hasClass("on")&&($(".serMenu .subheader ").removeClass("on"),$(this).addClass("on"),$(".serMenu .subheader ").children("ul").stop().slideUp(200)),$(this).addClass("on"),$(this).children("ul").slideDown(400,"easeInOutSine")}),$(".leftNav").on("click",function(){var a=$window.width();768>=a&&($(this).hasClass("leftopen")?($(this).children(".leftMenu").stop().slideUp(200),$(this).removeClass("leftopen"),$(this).removeAttr("style")):($(this).addClass("leftopen"),$(this).children(".leftMenu").stop().slideDown(400,"easeInOutSine")))}),$window.on("resize",function(){//目前尺寸
//變動後尺寸
wx=windowWidth,hx=windowHeight,windowWidth=$window.width(),windowHeight=$window.height()}),$window.bind("scroll",function(){pos=$window.scrollTop(),windowWidth=$window.width();var a=$(this).scrollTop(),b=$(".online"),c=$(".header"),d=$("main");47<=a?(c.addClass("open"),b.addClass("open")):(c.removeClass("open"),b.removeClass("open"))}),$window.bind("scroll resize",function(){}),$(".qabox ul>li").on("click",function(a){a.preventDefault(),$(this).children(".qa_list").hasClass("show")?($(".qabox ul>li .qa_list").removeClass("show"),$(".qabox ul>li .qa_content").stop().slideUp(400)):($(".qabox ul>li .qa_list").removeClass("show"),$(".qabox ul>li .qa_content").stop().slideUp(400),$(this).children(".qa_list").addClass("show"),$(this).children(".qa_content").stop().slideDown(400,"easeInOutSine"))}),$(window).resize(function(){a()}),$(".new_surroBox .tag_List li").on("click",function(){var a=$(this).index();$(".tag_List li.active").removeClass("active"),$(this).addClass("active"),$(".tagContent.active").removeClass("active"),$(".tagContent:eq("+a+")").addClass("active")}),$(".tag_List li:eq(0),.tagContent:eq(0)").addClass("active"),pos=$(window).outerHeight()/2-$(".online").height()/2+$("header").outerHeight(),$(".online ").css("top",pos),$(".top").click(function(){return $("html,body").animate({scrollTop:0},1e3,"easeOutExpo"),!1}),768>=windowWidth&&($(".mob .fb-page").attr("data-width","600"),$(".videoBox iframe ").attr("height","320"));480>=windowWidth?($(".mob .fb-page").attr("data-width","300"),$(".videoBox iframe ").attr("height","263")):768<=windowWidth&&$(".itemBox .videoBox iframe ").attr("height","263"),375>=windowWidth&&$(".fb-like").attr("data-width","320"),320>=windowWidth&&($(".mob .fb-page").attr("data-width","320"),$(".fb-like").attr("data-width","280"))});
//# sourceMappingURL=global2.js.map