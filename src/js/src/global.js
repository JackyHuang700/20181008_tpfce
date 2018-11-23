var $window = $(window)
var windowHeight = $window.height()
var windowWidth = $window.width()
var $body = window.opera
  ? document.compatMode == 'CSS1Compat'
    ? $('html')
    : $('body')
  : $('html,body')
var pos = $window.scrollTop()
var wx
var hx
var top_h
var slider1
var h = $(window).height()
var w = $(window).width()
var $winH = $('.winH')
var $jqimgFill = $('.jqimgFill')
var $pro55 = $('.pro55')
var $pro64 = $('.pro64')
var $banner = $('.banner')

if (typeof console === 'undefined') {
  window.console = { log: function() {} }
}
$(document).ready(function() {
  resizeCss()
  var slickdotsLength = $('.surroundingsBox .slick-dots li').length
  var slickdotsWidth = $('.surroundingsBox .slick-dots li').outerWidth()
  var slickdots = slickdotsWidth * slickdotsLength + slickdotsWidth + 11
  $('.surroundingsBox .slick-dots').css('max-width', slickdots)

  $('.newvideoBox iframe ').attr('width', '100%')
  $('.newvideoBox iframe ').attr('height', '100%')
  var i = 1
  $('.imgLiquidFill img')
    .on('load', function() {
      $(this)
        .parent('.imgLiquidFill')
        .imgLiquid()
      $(this)
        .parent('.imgLiquidFill')
        .addClass('ed')
    })
    .each(function() {
      if (this.complete) $(this).load()
    })
  var loadn = 0
  var allimgs = $('img').length
  $('.top_menu .subheader').on('mouseenter', function() {
    if (windowWidth > 480) {
      if (
        !$(this)
          .find('a')
          .hasClass('on')
      ) {
        $('.top_menu>ul>li a.on')
          .next('.submenu')
          .stop()
          .slideUp(200, 'easeInOutSine', function() {
            $(this).removeAttr('style')
          })
        $('.top_menu>ul>li a.on').removeClass('on')
      }
      $(this)
        .find('a')
        .addClass('on')
      $(this)
        .find('.submenu')
        .slideDown(400, 'easeInOutSine')
    }
  })
  $('.top_menu .subheader').on('mouseleave', function() {
    if (windowWidth > 480) {
      $('.top_menu ul>li>a.on')
        .next('.submenu')
        .stop()
        .slideUp(200, 'easeInOutSine', function() {
          $(this).removeAttr('style')
        })
      $('.top_menu ul>li>a.on').removeClass('on')
    }
  })
  $('.top_menu .subheader .submenu li').on('mouseenter', function() {
    if (windowWidth > 480) {
      $(this)
        .find('.subitem')
        .stop()
        .slideDown(400, 'easeInOutSine')
    }
  })
  $('.top_menu .subheader .submenu li').on('mouseleave', function() {
    if (windowWidth > 480) {
      $(this)
        .find('.subitem')
        .stop()
        .slideUp(50, 'easeInOutSine')
    }
  })
  $('.subheader>a').on('click', function(e) {
    if (windowWidth <= 480) {
      if (!$(this).hasClass('on')) {
        $('.top_menu>ul>li a.on')
          .next('.submenu')
          .stop()
          .slideUp(200)
        $('.top_menu>ul>li a.on').removeClass('on')
      }
      $(this).addClass('on')
      $(this)
        .next('.submenu')
        .slideDown(400, 'easeInOutSine')
    }
  })
  $('.submenu li .mmBtn').on('click', function() {
    $('.subitem')
      .stop()
      .slideUp(200, 'easeInOutSine')
    $(this)
      .parent('.submenu li')
      .find('.subitem')
      .stop()
      .slideDown(400, 'easeInOutSine')
    return false
  })
  $('#header, .top_menu , #content').on('click', function(e) {
    $('body,html').css({ overflow: '' })
  })

  $('.top_menu .icon').on('click', function(e) {
    if (!$(this).hasClass('on')) {
      $('.top_menu>.icon, .top_menu>ul, #header').addClass('on')
      $('html,body').css({ overflow: 'hidden' })
      $('.mask').css({ left: '0' })
    } else {
      $('html,body').css({ overflow: '' })
      $('.mask').css({ left: '-100%' })
      $('.top_menu>.icon, .top_menu>ul, #header').removeClass('on')
    }
    return false
  })
  $('.closeBtn').on('click', function() {
    $('html,body').css({ overflow: '' })
    $('.mask').css({ left: '-100%' })
    $('.top_menu>.icon, .top_menu>ul, #header').removeClass('on')
  })

  $('.serMenu .subheader').on('click', function() {
    $('.serMenu .subheader').removeClass('open')
    event.stopPropagation()
    if ($(this).hasClass('on') != true) {
      $('.serMenu .subheader ').removeClass('on')
      $(this).addClass('on')
      $('.serMenu .subheader ')
        .children('ul')
        .stop()
        .slideUp(200)
    }
    $(this).addClass('on')
    $(this)
      .children('ul')
      .slideDown(400, 'easeInOutSine')
  })

  $('.leftNav').on('click', function(e) {
    var windowWidth = $window.width()
    if (windowWidth <= 1000) {
      if ($(this).hasClass('leftopen')) {
        $(this)
          .children('.leftMenu')
          .stop()
          .slideUp(300)
        $(this).removeClass('leftopen')
        $(this).removeAttr('style')
      } else {
        $(this).addClass('leftopen')
        $(this)
          .children('.leftMenu')
          .stop()
          .slideDown(400, 'easeInOutSine')
      }
    }
  })
  $window.on('resize', function() {
    wx = windowWidth
    hx = windowHeight
    windowWidth = $window.width()
    windowHeight = $window.height()

    ;(function(){
      var leftMenuDom = document.getElementsByClassName('leftMenu')[0]
      if (windowWidth > 1000) {
        if (leftMenuDom.style.display === 'none') {
          leftMenuDom.style.display = 'block'
        }
      }else{
        if (leftMenuDom.style.display === 'block') {
          leftMenuDom.style.display = 'none'
        }
      }
    })()
  })

  $window.bind('scroll', function() {
    pos = $window.scrollTop()
    windowWidth = $window.width()
    var scrollTop = $(this).scrollTop()
    var top = $('.online')
    var hea = $('.header')
    var memberInfo = $('.memberInfo')
    var mainHegiht = $('main')
    if (scrollTop >= 47) {
      hea.addClass('open')
      top.addClass('open')
      memberInfo.addClass('open')
    } else {
      hea.removeClass('open')
      top.removeClass('open')
      memberInfo.removeClass('open')
    }
  })

  $window.bind('scroll resize', function() {})

  $('.qabox ul>li').on('click', function(event) {
    event.preventDefault()
    if (
      !$(this)
        .children('.qa_list')
        .hasClass('show')
    ) {
      $('.qabox ul>li .qa_list').removeClass('show')
      $('.qabox ul>li .qa_content')
        .stop()
        .slideUp(400)
      $(this)
        .children('.qa_list')
        .addClass('show')
      $(this)
        .children('.qa_content')
        .stop()
        .slideDown(400, 'easeInOutSine')
    } else {
      $('.qabox ul>li .qa_list').removeClass('show')
      $('.qabox ul>li .qa_content')
        .stop()
        .slideUp(400)
    }
  })
  $(window).resize(function() {
    resizeCss()
  })

  function resizeCss() {
    h = $(window).height()
    w = $(window).width()

    $winH.each(function() {
      $(this).css('height', h)
    })
    $pro55.each(function() {
      $(this).css('height', $(this).width())
    })
    $pro64.each(function() {
      $(this).css('height', $(this).width() / 1.54)
    })
    $jqimgFill.each(function() {
      $(this).focusPoint()
    })
  }
  $('.new_surroBox .tag_List li').on('click', function() {
    var st_current = $(this).index()
    $('.tag_List li.active').removeClass('active')
    $(this).addClass('active')
    $('.tagContent.active').removeClass('active')
    $('.tagContent:eq(' + st_current + ')').addClass('active')
  })
  $('.tag_List li:eq(0),.tagContent:eq(0)').addClass('active')

  pos =
    $(window).outerHeight() / 2 -
    $('.online').height() / 2 +
    $('header').outerHeight()
  $('.online ').css('top', pos)

  $('.top').click(function() {
    $('html,body').animate({ scrollTop: 0 }, 1000, 'easeOutExpo')
    return false
  })

  if (windowWidth <= 768) {
    $('.mob .fb-page').attr('data-width', '600')
    $('.videoBox iframe ').attr('height', '320')
  }
  if (windowWidth <= 480) {
    $('.mob .fb-page').attr('data-width', '300')
    $('.videoBox iframe ').attr('height', '263')
  } else if (windowWidth >= 768) {
    $('.itemBox .videoBox iframe ').attr('height', '263')
  }
  if (windowWidth <= 375) {
    $('.fb-like').attr('data-width', '320')
  }
  if (windowWidth <= 320) {
    $('.mob .fb-page').attr('data-width', '320')
    $('.fb-like').attr('data-width', '280')
  }
})
