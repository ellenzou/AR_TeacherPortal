/*jslint browser: true*/
/*global $, jQuery, TweenMax, TweenLite, toHome, alert*/

//$(function () {

$(document).ready(function ($) {

//Image by Ivaylo Yovchev (  http://ivayloyovchev.com/weddings )
  
	//elements
    "use strict";
	var $menu = $(".menu"), $pages = $(".page"), $menuLi = $menu.find("li").not(".to-home"), $toHome = $menu.find(".to-home"),//interna vars
	
        currentPage = "";
	
	$toHome.on("click", function () {
		currentPage = "";
		TweenMax.to($pages, 0.5, {
			left: "-100%"
		});
		TweenLite.to($menuLi.filter(".active"), 0.5, {
			className: "-=active"
		});
	});
	
	$menuLi.on("click", function (event) {
		
		var $this = $(this), thisHref = $this.find("a").attr("href");
		
		if (currentPage !== thisHref && $pages.filter(thisHref).length > 0) {
			currentPage = thisHref;
			TweenMax.to($pages, 0.5, {
				left: "-100%"
			});
			TweenMax.to($pages.filter(thisHref), 0.5, {
				left: 0
			});
			TweenLite.to($menuLi.filter(".active"), 0.5, {
				className: "-=active"
			});
			TweenLite.to($this, 0.5, {
				className: "+=active"
			});
		}
		
		event.preventDefault();
	});
});