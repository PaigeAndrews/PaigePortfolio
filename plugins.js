/// <reference path="..typings/globals/jquery/index.d.ts" />
$(document).ready(function()){
    $("p").click(fuction()){
        $(this).hide();
    });
});


// var winHeight = $(window).innerHeight();
// $(document).ready(function () {
//     $(".panel").height(winHeight);
//     $("body").height(winHeight*$(".panel").length);
// });

// window.addEventListener('resize', function (event) {
//     $(".panel").height($(window).innerHeight());
// });
// $(window).on('scroll',function(){
//     $(".panelCon").css('bottom',$(window).scrollTop()*-1);
// });
function scrollBottom() {window.scrollTo(0, 99999);}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", scrollBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);