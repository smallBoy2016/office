$(function(){

	/*banner*/

	var caseTitle = 
		document.getElementsByClassName('s_case_title')[0].getElementsByTagName('p');
	var caseBox = 
		document.getElementsByClassName('s_case_box')[0].getElementsByClassName('div1');

	changeTag2(caseTitle,caseBox);
	function changeTag2(arrHead,arrContent){
		for(var i=0;i<arrHead.length;i++){
			arrHead[i].index = i;
			arrHead[i].onclick = function(){
				for(var i=0;i<arrContent.length;i++){
					arrHead[i].style.color = '#4a4a4a';
					arrContent[i].style.display = 'none';
				}
				arrContent[this.index].style.display = 'block';
				arrHead[this.index].style.color = '#1f4e81';
			};
		}
	}


/*img-taggle*/
var prev = document.getElementsByClassName('play_prev');		
var next = document.getElementsByClassName('play_next');		
var s1 = document.getElementsByClassName('s_1');		
var s2 = document.getElementsByClassName('s_2');	

changeImg(prev,next);
function changeImg(arrHead,arrHead2){
	for(var i=0;i<prev.length;i++){
		arrHead[i].onclick = function(){
			for(var j=0;j<s1.length;j++){
				s1[j].style.display = 'block';					
			}
			for(var j=0;j<s2.length;j++){
				s2[j].style.display = 'none';					
			}
		};	
	}
	
	for(var i=0;i<prev.length;i++){
		arrHead2[i].onclick = function(){
			for(var j=0;j<s1.length;j++){
				s1[j].style.display = 'none';					
			}
			for(var j=0;j<s2.length;j++){
				s2[j].style.display = 'block';					
			}
		};	
	}
}	

})

