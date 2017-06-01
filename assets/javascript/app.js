$(document).ready(function(){

	var answered = 0;
	var unanswered = 0;
	var correct = 0;
	var incorrect = 0;
	var aCounter = 0;
	var counter = 30;

	//function that'll start the program and initialize the start screen
	function startScreen() {
		startScreen = "<p class='startButton text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' n\
		href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}
	startScreen();

		var heroQuestions = [
			{
			question: "What is Batman's real identity?",
			option1: "Matches Malone",
			correct: "Bruce Wayne",
			option2: "Alfred Pennyworth",
			},{

			question: "Where was Superman born?",
			option1: "Draxam",
			correct: "Krypton",
			option2: "Earth",
			}]

	//start game event handler
	$(".startButton").on("click", function(){

			console.log("just checking if this is working")

			$('.mainArea').hide();
			$('body').html('<row class="container"><div class="panel panel-info col-md-8"><div class="panel-heading">Trivia Questions</div><div class="panel-body">Panel Content</div></div></row>');
			$('.panel-body').html('<span class = "answers"></span>');
			generateGame();
		})

		function generateGame() {
			$('.panel-body').html(heroQuestions[aCounter].question);
			$('.answers').html("<li><input type = 'radio' name='choiceRadio'>" + " " +
				heroQuestions[aCounter].option1 + "</li><li><input type='radio' name='choiceRadio'>" + " " + 
				heroQuestions[aCounter].option2 + "</li><li><input type='radio' name='choiceRadio' value = 'correct'>" + " " +
				heroQuestions[aCounter].correct + "</li>");
		}

			function timeCount() {
			theClock = setInterval(thirtySeconds, 1000);
			function thirtySeconds() {
				if (counter === 0) {
					clearInterval(theClock);
					}
				if (counter > 0) {
					counter--;
				}
				$(".timer").html(counter);
			}
		}

		function resetQuiz() {
			answered = 0;
			unanswered = 0;
			incorrect = 0;
			correct = 0;
			counter = 30;
			timeCount();
			generateGame();

		}

	//function generateGame() {
			//gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
			//$('body').html("<span>theClock</span>")
		//}

})