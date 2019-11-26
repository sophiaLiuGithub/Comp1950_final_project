//lessons script
//add/remove class when the hover moves in/out

$('document').ready(function(){
    $(".lesson").hover(function(){
        $(this).addClass("enter");         
    }, function() { 
        $(this).removeClass("enter");
    });
});
