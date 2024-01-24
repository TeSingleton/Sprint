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

// misc variables
const currentDate = new Date();
console.log(currentDate);
console.dir(currentDate);
var theTime = document.getElementById("time");
console.dir(theTime);

theTime.innerHTML = currentDate.toLocaleTimeString();

// time variable ,add date and use this variable as a stamp for the players score.

var theTime = currentDate.toLocaleTimeString();

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

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
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
