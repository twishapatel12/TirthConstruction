$(document).ready(function(){

    //for sticky navigation
    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll", stickyNavigation);
    function stickyNavigation(){
        let body=$("body");
        if($(window).scrollTop()>=navTop){
            body.addClass("fixedNav");
        }
        else{
            body.removeClass("fixedNav");
        }
    }

    //for images effect
    $("#e0, #i0, #s0").fadeIn(10000);
    $("#e1, #i1, #s1").fadeIn(10000);
    $("#e2, #i2, #s2").fadeIn(10000);
    $("#e3, #i3, #s3").fadeIn(10000);
    $("#e4, #i4, #s4").fadeIn(10000);
    $("#e5, #i5, #s5").fadeIn(10000);

});