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
//패럴랙스
var wd = $(window);
$('.box_img img').each(function(){
  var bg = $(this);
  wd.scroll(function(){
    var yPos = -(wd.scrollTop() / 3); 
      //배경이미지의 위치는 나눠지는 숫자로 조절
    var coords = '50%' + yPos + 'px';
    bg.css({backgroundPosition:coords});
  });
}); //패럴렉스 end
    /*$('.aalto').hover(function(){
        $('.aalto img').css({'opacity':'0.5'});
        $('.aalto img').css({'transform':'scale(1.1)'});
        $('.aalto p').css({'color':'#95340A'});
        $('#sec2 .aalto span').css({'border-color':'#A38C7E'});
        $('#sec2 .aalto .view_more').css({'color':'#897970'});
    },function(){
        $('.aalto img').css({'opacity':'1'});
        $('.aalto img').css({'transform':'scale(1)'});
        $('.aalto p').css({'color':'#5D2D10'});
        $('#sec2 .aalto span').css({'border-color':'#88451E'});
        $('#sec2 .aalto .view_more').css({'color':'#522307'});
    })

    $('#sec2 div').each(function(){
        $(this).hover(function(){
            var f_img = $(this).find('img')
            f_img.css()
             $('#sec2 div img').css({'opacity':'0.5'});
             $('#sec2 div img').css({'transform':'scale(1.1)'});
             $('#sec2 p').css({'color':'#95340A'});
             $('#sec2 span').css({'border-color':'#A38C7E'});
             $('#sec2 .view_more').css({'color':'#897970'});
        },function(){})
    })*/

})//jq end