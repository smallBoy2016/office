$(function(){
	/*nav*/
	$('.nav_right').find('a').eq(0).click(function(){
		$('body').animate({scrollTop: 1500}, 800);
	});
	$('.tel').hide();
	$('.nav_right').find('a').eq(2).click(function(){
		$('.tel').toggle('slow');
	});

	/*wechat*/
	$('#wechat_box').hide();
	$('#wechat_btn').click(function(){
		$('#wechat_box').toggle('fist');
	});
});

function changeTag(arrHead,arrContent){
	for(var i=0;i<arrHead.length;i++){
		arrHead[i].index = i;
		arrHead[i].onclick = function(){
			for(var i=0;i<arrContent.length;i++){
				arrContent[i].style.display = 'none';
			}
			arrContent[this.index].style.display = 'block';
		};
	}
}