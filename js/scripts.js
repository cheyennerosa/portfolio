var body = document.body,
	nav = document.getElementsByTagName("nav"),
	button = document.getElementsByTagName("button"),
	menu = document.getElementsByClassName('overlay'),
	open = document.getElementsByClassName('btn-close');

if (classie.has( button, 'btn-close')) {
    classie.add( body, 'disable-scroll');
} else {
    classie.remove( body, 'disable-scroll');
}


