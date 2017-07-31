 $(window).load(function(){
jQuery('#myModal2').on('hidden.bs.modal', function (e) {
jQuery('#myModal2 video').attr("src", jQuery("#myModal2 video").removeAttr("src"));
});
});