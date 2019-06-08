$(document).ready(function() {
var magic8Ball = {};

    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];
    $("answer").hide(); 
    magic8Ball.askQuestion = function(question){
        $("#answer").fadeIn(6000);
		var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $("#answer").text(answer);
		console.log(question);
        console.log(answer);
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");		$("#answer").fadeIn(6000);
    };
		
    var onClick = function() {
        $("#answer").hide();
        
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
 
//wait half a second before showing prompt
   setTimeout(
       function() {
		   $("#8ball").effect("shake");
           //show prompt
           var question = prompt("Ask a yes or no question");
        magic8Ball.askQuestion(question);
       }, 500);
		
    };
    $("#questionButton").click( onClick );
    				 
});