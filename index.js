var button=document.getElementById("myButton");
var modal=document.getElementById("myModal");
var close=document.getElementById("myClose");

button.onclick=function(){
    modal.style.display="block";
}
close.onclick=function(){
    modal.style.display="none";
}

example.onmouseover = function() {
example.style.color= "#F2F99C";
};

example.onmouseleave = function() {
example.style.color= "white";
};
