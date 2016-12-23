
var deviceWidth = document.documentElement.clientWidth;

if(deviceWidth > 750) deviceWidth = 750;

document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';



window.onload = function(){
	var deviceHeight = document.documentElement.clientHeight;
	
	warpDom = document.getElementsByClassName('warp')[0];
	warpDom.style.width = deviceWidth + 'px';
	// warpDom.style.height = deviceHeight + 'px';
	// alert(warpDom.clientHeight);
/*	if(warpDom.offsetHeight <= deviceHeight ){
		warpDom.style.height = deviceHeight + 'px';
	}*/
};