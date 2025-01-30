
let timer=document.getElementById("timer");
let currdate=new Date();
setInterval(function(){
	currdate=new Date();
	timer.innerHTML=currdate.toLocaleString();
},1000)
