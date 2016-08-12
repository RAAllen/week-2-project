$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    // debugger;

    var questionOnePoints = $("#questionOneAnswer").val();
    var questionTwoPoints = $("#questionTwoAnswer").val();
    var questionThreePoints = $("#questionThreeAnswer").val();
    var questionFourPoints = $("#questionFourAnswer").val();
    var questionFivePoints = $("#questionFiveAnswer").val();
    var questionSixPoints = $("#questionSixAnswer").val();

    var questionOneFinal = 0;
      if (questionOnePoints === "cPoints") {
        questionOneFinal = 1;
      } else if (questionOnePoints === "javaPoints") {
        questionOneFinal = 2;
      } else if (questionOnePoints === "rubyPoints") {
        questionOneFinal = 3;
      } else if (questionOnePoints === "phpAnswer") {
        questionOneFinal = 4;
      } else if (questionOnePoints === "cssAnswer") {
        questionOneFinal = 5;
      }

    var questionTwoFinal = 0;
      if (questionTwoPoints === "cAnswer") {
        questionTwoFinal = 1;
      } else if (questionTwoPoints === "javaAnswer") {
        questionTwoFinal = 2;
      } else if (questionTwoPoints === "rubyAnswer") {
        questionOneFinal = 3;
      } else if (questionTwoPoints === "phpAnswer") {
        questionTwoFinal = 4;
      } else (questionTwoPoints === "cssAnswer") {
        questionTwoFinal = 5;
      }

    var questionThreeFinal = 0;
      if (questionThreePoints === "cAnswer") {
        questionThreeFinal = 1;
      } else if (questionThreePoints === "javaAnswer") {
        questionThreeFinal = 2;
      } else if (questionThreePoints === "rubyAnswer") {
        questionThreeFinal = 3;
      } else if (questionThreePoints === "phpAnswer") {
        questionThreeFinal = 4;
      } else (questionThreePoints === "cssAnswer") {
        questionThreeFinal = 5;
      }

    var questionFourFinal = 0;
      if (questionFourPoints === "cAnswer") {
        questionFourFinal = 1;
      } else if (questionFourPoints === "javaAnswer") {
        questionFourFinal = 2;
      } else if (questionFourPoints === "rubyAnswer") {
        questionFourFinal = 3;
      } else if (questionFourPoints === "phpAnswer") {
        questionFourFinal = 4;
      } else (questionFourPoints === "cssAnswer") {
        questionFourFinal = 5;
      }


    var questionFiveFinal = 0;
      if (questionFivePoints === "cAnswer") {
        questionFiveFinal = 1;
      } else if (questionFivePoints === "javaAnswer") {
        questionFiveFinal = 2;
      } else if (questionFivePoints === "rubyAnswer") {
        questionFiveFinal = 3;
      } else if (questionFivePoints === "phpAnswer") {
        questionFiveFinal = 4;
      } else (questionFivePoints === "cssAnswer") {
        questionFiveFinal = 5;
      }

    var questionSixFinal = 0;
      if (questionSixPoints === "cAnswer") {
        questionSixFinal = 1;
      } else if (questionSixPoints === "javaAnswer") {
        questionSixFinal = 2;
      } else if (questionSixPoints === "rubyAnswer") {
        questionSixFinal = 3;
      } else if (questionSixPoints === "phpAnswer") {
        questionSixFinal = 4;
      } else (questionSixPoints === "cssAnswer") {
        questionSixFinal = 5;
      }

    if (questionOneFinal + questionTwoFinal + questionThreeFinal + questionFourFinal + questionFiveFinal + questionSixFinal <= 9) {
      display
    }

  });
});
