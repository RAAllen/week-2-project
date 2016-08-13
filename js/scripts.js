$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();

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
      } else {
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
      } else {
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
      } else {
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
      } else {
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
      } else {
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
      } else {
        questionSixFinal = 5;
      }

    if (questionOneFinal + questionTwoFinal + questionThreeFinal + questionFourFinal + questionFiveFinal + questionSixFinal <= 9) {
      $("#c-net").show();
      $("#ruby-rails").hide();
      $("#php-drupal").hide();
      $("#java-android").hide();
      $("#css-design").hide();
      $("#quiz").hide();
    } else if (questionOneFinal + questionTwoFinal + questionThreeFinal + questionFourFinal + questionFiveFinal + questionSixFinal <= 14) {
      $("#java-android").show();
      $("#ruby-rails").hide();
      $("#php-drupal").hide();
      $("#css-design").hide();
      $("#c-net").hide();
      $("#quiz").hide();
    } else if (questionOneFinal + questionTwoFinal + questionThreeFinal + questionFourFinal + questionFiveFinal + questionSixFinal <= 19) {
      $("#ruby-rails").show();
      $("#php-drupal").hide();
      $("#java-android").hide();
      $("#css-design").hide();
      $("#c-net").hide();
      $("#quiz").hide();
    } else if (questionOneFinal + questionTwoFinal + questionThreeFinal + questionFourFinal + questionFiveFinal + questionSixFinal <= 24) {
      $("#php-drupal").show();
      $("#ruby-rails").hide();
      $("#java-android").hide();
      $("#css-design").hide();
      $("#c-net").hide();
      $("#quiz").hide();
    } else if (questionOneFinal + questionTwoFinal + questionThreeFinal + questionFourFinal + questionFiveFinal + questionSixFinal <= 30) {
      $("#css-design").show();
      $("#ruby-rails").hide();
      $("#php-drupal").hide();
      $("#java-android").hide();
      $("#c-net").hide();
      $("#quiz").hide();
    }
  });

  $(".reQuiz").click(function(event){
    event.preventDefault();
    $("#quiz").show();
    $("#css-design").hide();
    $("#ruby-rails").hide();
    $("#php-drupal").hide();
    $("#java-android").hide();
    $("#c-net").hide();
  });

});
