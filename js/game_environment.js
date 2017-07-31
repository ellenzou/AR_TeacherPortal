$( document ).ready( function ($) {
   $( ".imagebox" ).each( function () {
       var imagebox = this;
       var clicked = false;
       var hovering = false;
       var captionVisible = false;
       
       function toggle() {
           captionVisible = !captionVisible;
           if ( captionVisible ) {
                $( ".caption", imagebox ).css( { "opacity": 0.8, "top": 0 } );
           } else {
               $( ".caption", imagebox ).css( { "opacity": 0, "top": "100%" } );
           }
       }
       
       $( this ).hover( function () {
           hovering = true;
           if ( !clicked ) toggle();
       }, function () {
           hovering = false;
           if ( !clicked ) toggle();
       }).click( function () {
           clicked = !clicked;
           if ( !hovering ) toggle();
           return false;
       });
   } );
});