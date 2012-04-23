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
  $('h2#score span#guessesLeft').empty();
  $('h2#score span#guessesLeft').append(score);
}

function parseGuess() {
  guess=document.getElementById("guess").value;
  checkGuess(guess);  
  if (guessesLeft == 0) {
    alert("Sorry! You have lost the game and DIED...");
    // ask to play again
  } else {
    updateScore(guessesLeft);
  }
}

function checkGuess(playerGuess) {
  if (playerGuess == correctGuess) {
    alert("Congratulations! You have survived the game!!");
    win = true;
    //ask to play again
  } else if (playerGuess < correctGuess) {
    alert("Your guess is too low...");
  } else if (playerGuess > correctGuess) {
    alert("Your guess is too high...");
  }
  --guessesLeft;
}
//check the guess is equal
//you win message displayed
//decrement guesses(only 10 total)
//game is over if guessesLeft == 0
//you lose message displayed
//display too low, too high messages
//get name and display the name in high scores
