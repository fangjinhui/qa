window.onload=function(){
	var input1=document.querySelector(".input");
	input1.onfocus=function(){
		input1.style.backgroundColor="#DCDCDC";
//		input1.value.style.color="coral";
	}
	input1.onblur=function(){
		input1.style.backgroundColor="";
	}
	var button2=document.querySelector(".button");
	button2.onclick=function(){
		var regex=/[0-9]*?/;
		var value=input1.value;
		console.log(value.search(regex))
		if(!value.search(regex)){
			confirm("单击“确定”继续。单击“取消”停止。"); 
		}
	}
}


