$(function(){
/*// pure JS
    var elem = document.getElementById('slider');
    window.mySwipe = new Swiper(elem, {
        // startSlide: 4,
         auto: 1000,        //每隔3000ms，自动轮播一次
        // continuous: true,
        // disableScroll: true,
        // stopPropagation: true,

//        回调函数表示没做完一个轮播，就执行下面的内容
         callback: function(index, element) {
//             console.log(index);           //在控制台输出index的值

//             让自己的li添加cur类，其他的兄弟li移除cur类，也就是一种排他
             $(".dian li").eq(index).addClass("on").siblings().removeClass("on");

         }
        // transitionEnd: function(index, element) {}
    });

//    点击小圆点，图片会有一个slide的效果
    $('.dian li').click(function(){
        mySwipe.slide($(this).index());
    });

    // with jQuery
    // window.mySwipe = $('#mySwipe').Swipe().data('Swipe');

*/
var slider =  
 new Swipe(document.getElementById('slider'), {  
    auto: 3000,  
    continuous: true,  
    callback: function(pos) {  
        var i = bullets.length;  
        while(i--){  
            bullets[i].className = ' ';  
        }  
        bullets[pos].className = 'on';  
    }  
  });  
var bullets = document.getElementById('position').getElementsByTagName('li');



})