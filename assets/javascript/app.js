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

		var heroQuestions = [
			{
			question: "What is Batman's real identity?",
			option1: "Matches Malone",
			correct: "Bruce Wayne",
			option2: "Alfred Pennyworth",
			option3: "Wayne Bruce"
			},{

			question: "Where was Superman born?",
			option1: "Draxam",
			correct: "Krypton",
			option2: "Earth",
			option3: "Kandor"
			}]


	$(".startButton").on("click", function(){

			console.log("just checking if this is working")

			$('.mainArea').hide();
			$('body').html('<row class="container"><div class="mainPanel panel panel-info col-md-8"><div class="panel-heading"> Trivia Questions</div><div class="panel-body">Panel Content</div></div></row>')
		})

	
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

function generateGame() {
	gameInfo = $('.mainPanel').html(q2.question);
	$(gameInfo).append() 
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