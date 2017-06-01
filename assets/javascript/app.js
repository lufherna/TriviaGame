$(document).ready(function(){

	var answered = 0;
	var unanswered = 0;
	var correct = 0;
	var incorrect = 0;
	var counter = 30;

	//function that'll start the program and initialize the start screen
	function startScreen() {
		startScreen = "<p class='startButton text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' n\
		href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}
	startScreen();

		var q1 = {
			question: "What is Batman's real identity?",
			incorrect: "Matches Malone",
			correct: "Bruce Wayne",
			incorrect: "Alfred Pennyworth",
			incorrect: "Wayne Bruce"
			}

		var q2 = {
			question: "Where was Superman born?",
			incorrect: "Draxam",
			correct: "Krypton",
			incorrect: "Earth",
			incorrect: "Kandor"
			}


	$(".startButton").on("click", function(){

			console.log("just checking if this is working")
			$('.mainArea').hide();
			$('body').html('<row class="container"><div class="mainPanel panel panel-info col-md-8"><div class="panel-heading"> Trivia Questions</div><div class="panel-body">Panel Content</div></div></row>')
			timeCount();
			generateGame();
	})

	function timeCount() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function generateGame() {
	gameInfo = $('.mainPanel').append(q2.question); 
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

})