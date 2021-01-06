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
    $('.aalto').hover(function(){
        $('.aalto img').css({'opacity':'0.5'});
        $('.aalto img').css({'transform':'scale(1.1)'});
        $('.aalto p').css({'color':'#95340A'});
        $('.aalto span::after').css({'color':'#999999'});
        $('.aalto .view_more').css({'color':'#A38C7E'});
    },function(){
        $('.aalto img').css({'opacity':'1'});
        $('.aalto img').css({'transform':'scale(1)'});
        $('.aalto p').css({'color':'#5D2D10'});
        $('.aalto span::after').css({'color':'#88451E'});
        $('.aalto .view_more').css({'color':'#A38C7E'});
    })

})//jq end