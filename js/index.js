//水平向上滚动
var swiper = new Swiper('#content', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	direction: 'vertical',
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
});


// 3D旋转翻滚
// var swiper = new Swiper('#content', {
// 	direction: 'vertical',
// 	pagination: '.swiper-pagination',
// 	effect: 'cube',
// 	grabCursor: false,
// 	cube: {
// 		shadow: false,
// 		slideShadows: false,
// 		shadowOffset: 0,
// 		shadowScale: 1
// 	}
// });
var isPlay = false;
ado.play();//播放音乐
$("#music").on("click",function(){
	if(isPlay){
		ado.play();
		isPlay = false;
		$("#music img").attr("src","images/musicBtn.png"); 
	}else{
		ado.pause();
		isPlay = true;
		$("#music img").attr("src","images/musicBtnOff.png"); 
	}
});
