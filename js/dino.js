function Dino() {
  this.word;
};

var underscoreGenerate = function(word) {
  var letterArray = [];
  for (i = 0; i < word.length; i++) {
    letterArray.push(" _ ");
  }
  output = letterArray.join("");
  return output
};

Dino.prototype.getDinoIpsum = function() {
  console.log("getDinoIpsum has been called");
  $.get('http://dinoipsum.herokuapp.com/api/?paragraphs=1&words=1').then(function(response) {
    word = (JSON.stringify(response));
        console.log(word);
    var output = underscoreGenerate(word);
        console.log("Test" + output);
    $(".dinoWord").html(output);
  }).fail(function(error) {
    $(".dinoWord").text("ERROR");
  });
};


var checkMatch = function(guessedLetter) {
  var success = false;
  for (i = 0; i < secretWord.length; i++) {
    if (guessedLetter == secretWord[i]) {
      secretWord.replace(secretWord[i], guessedLetter);
      success = true;
    }
  }
  return success;
};

exports.dinoModule = Dino;
