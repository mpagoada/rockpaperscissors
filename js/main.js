/* global $ */
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;

$("#shoot").click(function(){
  var value = $("input").val();
  var randomNumber = Math.random();
  $("#userChoice").text(value);
  
  if (randomNumber < .33) {
    computerChoice = "rock";
  } else if (randomNumber < .66) {
    computerChoice = "paper";
  } else if (randomNumber < 1) {
    computerChoice = "scissors";
  }
  $("#computerChoice").html(computerChoice);
  
  if ((userChoice === "paper") && (computerChoice === "rock")) {
  $("#result").show("User wins!");
  } else if ((userChoice === "paper") && (computerChoice === "paper")) {
  $("#result").text("It's a tie!");
  } else if  ((userChoice === "paper") && (computerChoice === "scissors")) {
  $("#result").text("Computer wins!")
  } else if ((userChoice === "scissors") && (computerChoice === "rock")) {
  $("#result").text("");
  } else if  ((userChoice === "scissors") && (computerChoice === "paper")) {
  $("#result").text("");
  } else if  ((userChoice === "scissors") && (computerChoice === "scissors")) {
  $("#result").text("");
  } 
});



