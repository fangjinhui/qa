window.onload=function(){
	var button1=document.querySelector(".y_body_1");
	var button2=document.querySelector(".y_body_2");
	button1.onclick=function(){
		rightMo();
	}
	button2.onclick=function(){
		leftMo();
	}
	var button3=document.querySelector(".but_one");
	button3.onclick=function(){
		tiao();
	}
}
function rightMo(){
	var P_1=document.getElementsByClassName("one");
	console.log(P_1)
	var strarr=["精简版","杀人版","3.0版"];
	for(var i=0;i<P_1.length;i++){
		P_1[i].innerText=strarr[i];
	}
}
function leftMo(){
	var P_1=document.getElementsByClassName("one");
	console.log(P_1)
	var strarr=["简化版","经典版","白痴版"];
	for(var i=0;i<P_1.length;i++){
		P_1[i].innerText=strarr[i];
	} 
}
function tiao(){
	window.open("../tow.html")
}
