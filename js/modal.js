//Модальное окно на странице "Контакты"
var button2 = document.getElementById("myButton");
var modal = document.getElementById("myModal");
var close = document.getElementById("myClose");


button2.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}




