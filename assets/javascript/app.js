$(document).ready(function(){

	var answered = 0;
	var unanswered = 0;
	var correct = 0;
	var incorrect = 0;

	//function that'll start the program and initialize the start screen
	function startScreen() {
		startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' n\
		href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}
	startScreen();

	$(".startButton").on("click", function(){

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

		

	})

})