var guessesLeft = 10;
var numberHighScores = 5;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);

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
  //if guess is correct
    //then the game is won
  // else decrement guessesLeft
  //if guessesLeft equals zero
    //then the game is lost

}
