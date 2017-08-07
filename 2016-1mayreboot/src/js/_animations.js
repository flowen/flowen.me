/* 
    ANIMATIONS
*/

//cubic bezier
var cb = [0.24, 0.6, 0.26, 1];

var showMenu = {
    p: {
        translateY: [0, '-150%']
    },
    o:{
        duration: 400,
        easing: cb
    }
};

var hideMenu = {
    p: {
        translateY: ['-150%', 0]
    },
    o:{
        duration: 400,
        easing: cb
    }
};

var zoomIn = {
    p: {
        scaleX: [1.15, 1],
        scaleY: [1.05, 1]
    },
    o: {
        duration: 5000,
        easing: 'easeInSine'
    }
};

var activateSection = {
    p: {
        translateX: [0, '-100%'],
        scaleX: [1, cb, .95],
        scaleY: [1, cb, .7],
        opacity: 1
    },
    o:{
        duration: 400,
        easing: cb,
        complete: function(el) {
            $(el).removeClass('animate-section')
                 .addClass('current-section');
            $('main > section').not(el)
                               .removeClass('current-section');
            // put pixijs on hold unless it's in view
            if ($(el).hasClass('section-intro')) {
                playCanvas = true;
            } else {
                playCanvas = false;
            }
        }
    }
};

var popup = {
    p: {
        opacity: [1, 0],
        translateY: [0, '-2rem']
    },
    o:{
        duration: 400,
        easing: cb
    }
};

var loadSequence = [
    {
        e: $('.burger'), 
        p: showMenu.p, 
        o:{
            duration: 400,
            delay: 500,
            easing: cb
        }
    }
];