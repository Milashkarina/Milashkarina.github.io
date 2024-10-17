var button=document.getElementById("myButton");
var modal=document.getElementById("myModal");
var close=document.getElementById("myClose");

button.onclick=function(){
    modal.style.display="block";
}
close.onclick=function(){
    modal.style.display="none";
}