const question = document.querySelector('question');
const choices = document.querySelectorAll('.choice-text');

let currentQuestion = {}
let acceptingAnswers = true

let questions = [
    {
        question: "Commonly used data types DO Not Include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: alerts,
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: all of the above,
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parenthesis",
        answer: curly brackets,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: alerts
    },
]

