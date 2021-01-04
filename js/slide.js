$(document).ready(function(){

        $('#pages').wankyPages({
            selector_prefix   : 'wanky_',                // Prefix to give all classes and ID's (apart from animations)
            default_page      : '1',                     // Default/ first page to load
            animation         : 'glueTopBottom'
        });
        $(".lazy").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true,
            dots : true,
            autoplay : true,
            autoplaySpeed : 10000,
            pauseOnHover : true 
          });
    
    });


  