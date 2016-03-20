// var body = document.body,
// 	button = document.getElementById("trigger-overlay");
// 	console.log("sup", button)


// button.onclick = function(){
// 	console.log("did you find dis?")

// 	if (classie.has( button, 'btn-close')) {
// 	    classie.add( body, 'disable-scroll');
// 	    console.log("wut hapening?")
// 	} else {
// 	    classie.remove( body, 'disable-scroll');
// 	}

// };

// Brett fixes of course

// var body = document.body,
// 	button = document.getElementById("trigger-overlay"),
// 	menuOpen = false;

// button.onclick=function(){
//    if (menuOpen) {
// 	console.log("menu was open")
//  	classie.remove( body, 'disable-scroll');
   	
// 	}

// 	else {
//     console.log("menu was closed")
//     classie.add( body, 'disable-scroll');
   
// 	}

// 	menuOpen = !menuOpen
// };

// var body = document.body,
// 	button = document.getElementById("trigger-overlay"),
// 	pikachey = {menu:{open:false}};

// button.onclick=function(){
// 	if (pikachey.menu.open) {
// 	console.log("menu was open")
//  	classie.remove( body, 'disable-scroll');
   	
// 	} else {
//     console.log("menu was closed")
//     classie.add( body, 'disable-scroll');
   
// 	}
// 	pikachey.menu.open = !pikachey.menu.open
// };

var body = document.body,
	button = document.getElementById("trigger-overlay"),
	pikachey = {
	    menu:{
	    	open:false
	}};

document.body.addEventListener('click', fn, true);

button.onclick=function(){
    if (pikachey.menu.open) {
	console.log("menu was open")
 	classie.remove( body, 'disable-scroll');
   	
	} else {
	        	 console.log("menu was closed")
	    classie.add( body, 'disable-scroll');
	   
	}
	pikachey.menu.open = !pikachey.menu.open
};





