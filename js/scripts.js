$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    var questionOnePoints = $("questionOneAnswer").val();
    var questionTwoPoints = $("questionTwoAnswer").val();
    var questionThreePoints = $("questionThreeAnswer").val();
    var questionFourPoints = $("questionFourAnswer").val();
    var questionFivePoints = $("questionFiveAnswer").val();
    var questionSixPoints = $("questionSixAnswer").val();


  var questionOneFinal = 0;
    if (questionOnePoints === "cAnswer") {
      questionOneFinal = 1;
    } else if (questionOnePoints === "javaAnswer") {
      questionOneFinal = 2;
    } else if (questionOnePoints === "rubyAnswer") {
      questionOneFinal = 3;
    } else if (questionOnePoints === "phpAnswer") {
      questionOneFinal = 4;
    } else (questionOnePoints === "cssAnswer")
      questionOneFinal = 5;
    alert(questionOneFinal);

  var questionTwoFinal = 0;
    if (questionTwoPoints === "cAnswer") {
      questionTwoFinal = 1;
    } else if (questionTwoPoints === "javaAnswer") {
      questionTwoFinal = 2;
    } else if (questionTwoPoints === "rubyAnswer") {
      questionOneFinal = 3;
    } else if (questionTwoPoints === "phpAnswer") {
      questionTwoFinal = 4;
    } else (questionTwoPoints === "cssAnswer")
      questionTwoFinal = 5;
    alert(questionTwoFinal);

  var questionThreeFinal = 0;
    if (questionThreeThreePoints === "cAnswer") {
      questionThreeFinal = 1;
    } else if (questionThreePoints === "javaAnswer") {
      questionThreeFinal = 2;
    } else if (questionThreePoints === "rubyAnswer") {
      questionThreeFinal = 3;
    } else if (questionThreePoints === "phpAnswer") {
      questionThreeFinal = 4;
    } else (questionThreePoints === "cssAnswer")
      questionThreeFinal = 5;
    alert(questionThreeFinal);

  var questionFourFinal = 0;
    if (questionFourPoints === "cAnswer") {
      questionFourFinal = 1;
    } else if (questionFourPoints === "javaAnswer") {
      questionFourFinal = 2;
    } else if (questionFourPoints === "rubyAnswer") {
      questionFourFinal = 3;
    } else if (questionFourPoints === "phpAnswer") {
      questionFourFinal = 4;
    } else (questionFourPoints === "cssAnswer")
      questionFourFinal = 5;
    alert(questionFourFinal);


  var questionFiveFinal = 0;
    if (questionFivePoints === "cAnswer") {
      questionFiveFinal = 1;
    } else if (questionFivePoints === "javaAnswer") {
      questionFiveFinal = 2;
    } else if (questionFivePoints === "rubyAnswer") {
      questionFiveFinal = 3;
    } else if (questionFivePoints === "phpAnswer") {
      questionFiveFinal = 4;
    } else (questionFivePoints === "cssAnswer")
      questionFiveFinal = 5;
    alert(questionFiveFinal);

  var questionSixFinal = 0;
    if (questionSixPoints === "cAnswer") {
      questionSixFinal = 1;
    } else if (questionSixPoints === "javaAnswer") {
      questionSixFinal = 2;
    } else if (questionSixPoints === "rubyAnswer") {
      questionSixFinal = 3;
    } else if (questionSixPoints === "phpAnswer") {
      questionSixFinal = 4;
    } else (questionSixPoints === "cssAnswer")
      questionSixFinal = 5;
    alert(questionSixFinal);

  });
});
