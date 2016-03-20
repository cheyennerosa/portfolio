var body = document.getElementByTagName("body");
var menu = document.getElementByClassName("overlay");
if (body.hasClass(menu)) {
    body.addClass("disable-scroll");
} else {
    body.removeClass("disable-scroll");
}