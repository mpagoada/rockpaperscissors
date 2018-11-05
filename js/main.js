/* global $ */

$("#shoot").click(function(){
  var value = $("input").val();
  $("#userChoice").text(value);
});