var body = document.body,
    button = document.getElementById("trigger-overlay"),
    //later might need to move pikachey object out into the index so that it doesn't cause conflicts with the load order of other scripts. if you get pikachey is undefined errors then that is what that means
    pikachey = {
        menu: {
            open: false,
            checkFn: {}
        },

    };

// globally accessible function so that anything can call the menu open close check
pikachey.menu.checkFn = function() {
    if (pikachey.menu.open) {
        console.log("menu was open")
        classie.remove(body, 'disable-scroll');

    }
    else {
        console.log("menu was closed")
        classie.add(body, 'disable-scroll');

    }
    pikachey.menu.open = !pikachey.menu.open
}



document.body.addEventListener('click', pikachey.menu.checkFn, true);
button.onclick = function(e){
    pikachey.menu.checkFn;
    if(e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        //unhandled
    }
}
