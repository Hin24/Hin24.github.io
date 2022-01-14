var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,0);
ctx.stroke();

src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
$(document).ready(function(){
  $("#adres").click(function(){
    $("#maps").toggle();
  });
});

// popup modal, services page //
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
