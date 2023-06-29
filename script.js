const quizDB = [
    {
        question: "Q1: What is the full form of HTML ?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS ?",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q3: What is the full form of HTTP ?",
        a: "HyperText Train Protocol",
        b: "HyperText Transfer Protocol",
        c: "HyperText Transfer protes",
        d: "HyperText test protocol",
        ans: "ans2"
    },
    {
        question: "Q4: What is the full form of JS ?",
        a: "JavaScript",
        b: "JsonScript",
        c: "JsonScron",
        d: "JavaScron",
        ans: "ans1"
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
let answers = document.querySelectorAll('.answer');
let showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false)
}
submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();

    if (checkAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <h3> You Score ${score}/${quizDB.length} ✌️ </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `
        showScore.classList.remove('scoreArea');
    }

});