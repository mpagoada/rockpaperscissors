/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

$("#shoot").click(function(){
  var value = $("input").val();
  var randomNumber = Math.random();
  $("#userChoice").text(value);
  
  $("#userChoice").show();
});

