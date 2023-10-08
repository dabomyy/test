$(function(){

    $(".search-switch").on("click",function(){
        $(".search-model").stop().fadeIn(400);
    });

    $(".search-close-switch").on("click",function(){
        $(".search-model").stop().fadeOut(400,function(){
            $("#search-input").val("");
        });
    });
});