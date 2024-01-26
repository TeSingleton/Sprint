// import { questionsTemplate } from "./quizQuestions/QuestionTemplate.js";

// include("questions.js");
import { questionTemplate } from "./quizQuestions/QuestionTemplate.js";

// DOM variables
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// Template literal variables
const questions = questionTemplate;

// answer variables

const answerBtns = document.getElementsByClassName("answer_btn");

let answer1 = document.getElementById("answer_1");

let answer2 = document.getElementById("answer_2");

let answer3 = document.getElementById("answer_3");

let answer4 = document.getElementById("answer_4");

// Local/ game time

function updateTime() {
  const currentDate = new Date();

  var theTime = document.getElementById("time");
  theTime.innerHTML = currentDate.toLocaleTimeString();
}

setInterval(updateTime, 1000);

//  create timer so that it pulls from the local time
function starTimer() {
  var timerElement = document.createElement("p");
}

//*  */

//  function to show questions made from template literals
function showQuestions() {}

// DIALOG show/hide functionality
showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

// onClick submit button starts quiz
// onclick show questions

var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  showQuestions();
  starTimer();
});

// if (pressStart) {

// }

/** using the button as the only html element
 *
 * when pressed
 * open a modal
 * the modal asks the users name
 *          name form
 *          email form
 * name will be used to track score at the end of the quiz.
 *
 * once name has been entered the quiz will present the rules
 *          Timed quiz
 *          30-ish questions
 *          Time goes down with each wrong answer == -10
 *          +5 seconds for each correct answer
 *          The number of correct answers + the timer is the users score. **/

// Wrap the above variable in a function visit https://stackoverflow.com/questions/26584233/updating-javascript-time-every-second for more info.

// Q and A Array
// use template literals to create the questions and answers
// template literals are strings that allow embedded expressions. I will use them to identify the answers by the users name.

// let questionsAndAnswers = [{question:
//                            answers:{
//                             a:,
//                             b:,
//                             c:,
//                             d:,

//                            }},{];

// "Show the dialog" button opens the dialog modally
