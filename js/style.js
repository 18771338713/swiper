var Audio=document.getElementById("audio");
var DivAudio=document.getElementById("DivAudio");
var i=1;
function music(){
    DivAudio.style.animation="mymusic 2s linear infinite";
};music();
DivAudio.onclick=function(){
    if(i%2==0){
        Audio.play();
        music();
    }else{
        Audio.pause();
        DivAudio.style.animationPlayState="paused";
    }
    i++;    
};

   var mySwiper = new Swiper ('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',


    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素 
        swiperAnimate(swiper); 
        //初始化完成开始动画
    }, 

    onSlideChangeEnd: function(swiper){ 
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    } 
});
