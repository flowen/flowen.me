// MENU BAR AND NAVIGATION LINKS

var activeMenu = false;

$('.burger').on('click', function(e) {
    e.preventDefault();
    toggleMenu();
});

function toggleMenu() {
    if (!activeMenu) {
        $('.nav').velocity(showMenu.p, showMenu.o);
        $('.burger').addClass('active');
        activeMenu = true;
    } else {
        $('.nav').velocity(hideMenu.p, hideMenu.o);
        $('.burger').removeClass('active');
        activeMenu = false;
    }
}
var $navAnchors = $('#nav').find('a');

$navAnchors.each(function(i, anchor) {
    var href = $(anchor).attr('href');

    $(anchor).on('click', function(e) {
        e.preventDefault();

        if (!$(anchor).hasClass('active')) {
            // make sure zindex is higher, then animate
            if (!$(anchor).hasClass('close-nav')) {
                $(href).addClass('animate-section')
                    .velocity(activateSection.p, activateSection.o);
                // activate correct nav item
                $navAnchors.removeClass('active');
                $(anchor).addClass('active');
            }

            // NOW HIDE IT
            toggleMenu();
        }
    });
});
