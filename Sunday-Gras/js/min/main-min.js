jQuery(document).ready(function($){"use strict";if($(".switcher-icon").length>0&&$(".switcher-icon").on("click",function(e){return e.preventDefault(),$(this).hasClass("in-out")?$(".switcher-area").stop().animate({left:"-210px"},500):$(".switcher-area").stop().animate({left:"0px"},500),$(this).toggleClass("in-out"),!1}),$(".protfolio_menu").length>0&&$(".protfolio_menu").on("click","li.filter",function(){var t=$(this).attr("data-filter");e.isotope({filter:t})}),$(".grid").length>0)var e=$(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-item"}});$(".nav_menu_toggler").length>0&&$(".nav_menu_toggler").on("click",function(){$(".icon").removeClass("nav_menu_remove"),$(".nav_menu_content").removeClass("nav_menu_shift")}),$("#scroll").length>0&&$("#scroll").on("click",function(){$("html,body").animate({scrollTop:0},1e3)}),$(".icon").length>0&&$(".icon").on("click",function(){$(".icon").addClass("nav_menu_remove"),$(".nav_menu_content").addClass("nav_menu_shift")}),$("#manu_area").length>0&&$("#manu_area").sticky({topSpacing:0}),$(".header-area.page_header_area").length>0&&$(".header-area.page_header_area").sticky({topSpacing:0}),$("li.smoot-menu > a").length>0&&$("li.smoot-menu > a").on("click",function(e){var t=$(this),n="59";$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-n+"px"},1200,"easeInOutExpo"),e.preventDefault()}),$("body").length>0&&$("body").scrollspy({target:".main_menu",offset:60}),$(".navbar-toggle").length>0&&$(".navbar-toggle").on("click",function(){$("body").addClass("mobil-menu-activted")}),$(".client_list").length>0&&$(".client_list").owlCarousel({items:1,loop:!0,autoplay:!0,autoplayTimeout:1e4}),$("#fakeloader").length>0&&$("#fakeloader").fakeLoader({timeToHide:2e3,zIndex:"9999999999999",spinner:"spinner4",bgColor:"rgba(51,51,51,33)"}),$("#example").length>0&&$("#example").countdown({date:"02/11/2018 23:59:59",offset:-8,day:"Day",days:"Days"},function(){alert("Done!")}),$(function(){$('[data-toggle="tooltip"]').tooltip()}),$(".counter").length>0&&$(".counter").counterUp({delay:10,time:1e3});var t=new WOW({mobile:!1,offset:0});t.init()}),$(window).scroll(function(){return $(window).scrollTop()>300?$("#scroll").fadeIn():$("#scroll").fadeOut(),!1});