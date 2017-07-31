/*jslint browser: true*/
/*global $, jQuery, TweenMax, TweenLite, toHome, alert*/
$(function ( $ ) {
    "use strict";
    $('dd').hide();
    $('dl').on('click', 'dt', function () {
        $(this).next().slideToggle(200);
    });
});