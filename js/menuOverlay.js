$(document).ready(function(){
    $("#trigger-overlay").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $("#trigger-overlay").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
