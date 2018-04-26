function updateTime() {
  var date = new Date();
  $('#time').html( date.toGMTString() );
}

$(function() {

  updateTime();
  setInterval(updateTime, 1000);
});

var i = 0;
function change() {
  var doc = document.getElementById("background");
  var color = ["black", "gray", "darkgray", "lightgray", "white"];
  $("body").css("background", color[i]);
  i = (i + 1) % color.length;
}
setInterval(change, 1000);