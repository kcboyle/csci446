var guessesLeft = 10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
var correctGuess = 9;
var win = false;

$(function() {
  updateScore(guessesLeft);
  populateHighScores(highScores);
});

function populateHighScores(scores) {
  scores.sort();
  scores.reverse();
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");

  }
}

function updateScore(score) {
  if (win == true) {
    alert("Congratulations! You have survived the game!!");
    var name=prompt("A new high score! Please enter your name ","Your Name");
    highScores.push(name);
    populateHighScores(highScores);
    var r=confirm("Would you like to play again?");
    if (r == true) {
      playAgain();
    } else { 
      alert("We hope you gamble with your life again soon...");
    }
  } else {
    $('h2#score span#guessesLeft').empty();
    $('h2#score span#guessesLeft').append(score);
  }
}

function parseGuess() {
  guess=document.getElementById("guess").value;
  checkGuess(guess);  
  if (guessesLeft == 0) {
    alert("Sorry! You have lost the game and DIED...");
    var l=confirm("Would you like to play again?");
    if (l == true) {
      playAgain();
    } else { 
      alert("Fine then. Enjoy the afterlife...");
    }
  } else {
    updateScore(guessesLeft);
  }
}

function checkGuess(playerGuess) {
  if (playerGuess == correctGuess) {
    win = true;
  } else if (playerGuess < correctGuess) {
    alert("Your guess is too low...");
  } else if (playerGuess > correctGuess) {
    alert("Your guess is too high...");
  }
  --guessesLeft;
}

function playAgain() {
  //set all values to the defaults
}
//get name and display the name in high scores
