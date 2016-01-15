$( document ).ready(function() {

    // GESTION CHARGEMENT DIFFERE DES IMG AU SCROLL.
    $(function() {
        $("img.lazy").lazyload();
    });

    // Pour l'animation du scroll.
    var $root = $('html, body');
    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 1000, function () {
            window.location.hash = href;
        });
        return false;
    });
});


// GESTION EFFET APPARITION/DISPARITION DU HEADER PRINCIPAL.
// grab an element
var myElement = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();


// GESTION DU SLIDSHOW.
new Photostack( document.getElementById( 'photostack' ), {
    callback : function( item ) {
        //console.log(item)
    }
});