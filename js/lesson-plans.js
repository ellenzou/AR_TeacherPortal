$( document ).ready( function ($) {
    $( '.side-menu' ).hide();
    $( '.day-plan' ).hide();
    $( '.day-plan div' ).hide();
    
    var activeDay = null;
    
    $( '.top-menu li' ).click( function () {
        // Hide the activeDay if one has already been selected
        // Show the side menu if one wasn't being shown (first select)
        if ( activeDay ) activeDay.hide();
        else $( '.side-menu' ).show();
        
        // Show the new activeDay (based off the href of the link that was clicked)
        activeDay = $( $( 'a', this ).attr( 'href' ) );
        activeDay.show();
        
        // Remove active from all top-menu li; add it to this li
        $( '.top-menu li' ).removeClass( 'active' );
        $(this).addClass( 'active' );
        
        return false; // Make sure the link doesn't get followed
    } );
    
    $( '.side-menu li' ).click( function () {
        // Hide all the sections then show the selected one
        $( '.section', activeDay ).hide();
        $( $( 'a', this ).attr( 'href' ), activeDay ).show();
        
        // Remove active from all side-menu li; add it to this li
        $( '.side-menu li' ).removeClass( 'active' );
        $(this).addClass( 'active' );
        
        return false; // Make sure the link doesn't get followed
    });
} );