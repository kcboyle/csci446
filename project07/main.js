var guessesLeft = 10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
var correctGuess = 9;
var win = false;

$(function() {
  updateScore(guessesLeft);
  populateHighScores(highScores);
  decrementGuessesLeft();
});

function populateHighScores(scores) {
  scores.sort();
  scores.reverse();
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
  $('h2#score span#guessesLeft').append(score);
}

function parseGuess() {
  guess=document.getElementById('newGuess');
  if (guess == correctGuess) {
    win = true;
  } else if (guessesLeft == 0) {
    //game is lost
  } else { 
    --guessesLeft;
  }
}
