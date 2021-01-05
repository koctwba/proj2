$(function(){
    $('.top').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    })

    var sta = 1;
    $('.search').click(function(){
       if (sta == 1) {
        $('.search_click').fadeIn(700);
        sta = 2;
    }else {
        $('.search').click(function(){
            $('.search_click').fadeOut(700);
        sta = 1;    
    }
   )}
}) 
    
     
    
})