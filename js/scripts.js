var body = document.body,
	button = document.getElementById("trigger-overlay");

if (classie.has( button, 'btn-close')) {
    classie.add( body, 'disable-scroll');
    console.log("wut hapening?")
} else {
    classie.remove( body, 'disable-scroll');
}


