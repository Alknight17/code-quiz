const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn') 
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')

// have questions appear in a random order each time
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
} 

function chooseAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass ( element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')       
    } else {
      element.classList.add('wrong')  
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// array for questions
const questions = [
    { 
     question: "Which directory command creates a new file?",
     answers: [
        {text: 'cd ..', correct: false},
        {text: 'mkdir', correct: false},
        {text: 'touch', correct: true},
        {text: 'pwd', correct: false},
     ]
    },
    {
    question: "Choose the syntax that would create an ordered list with numbers",
    answers: [
        {text: '<p>', correct:false},
        {text: '<ol>', correct:true},
        {text: '<ul>', correct:false},
        {text: '<a>', correct:false},
    ]
    },
    {
    question: "Which of these displays the proper flow of the CSS box model from outside to inside",
    answers: [
        {text: 'content > padding > border > margin', correct:false},
        {text: 'margin > border > padding > content', correct:true},
        {text: 'padding > border > margin > content', correct:false},
        {text: 'margin > padding > content > border', correct:false},
        ]
        },
    {
    question: "Using dot notation, select the proper syntax for <section class='hero'>",
    answers: [
        {text: '.hero ', correct:true},
        {text: '#hero', correct:false},
        {text: '-hero', correct:false},
        {text: '*hero', correct:false},
    ]
    },
    {
    question: "Which of these elements allows for a more responsive web page that can adapt to different screen sizes?",
    answers: [
        {text: 'justify-content', correct:false},
        {text: 'flex-grow', correct:false},
        {text: 'space-around', correct:false},
        {text: 'mediaquery', correct:true},
        ]
        },   
        {
    question: "What is it called when a string and a variable are combined?",
    answers: [
        {text: 'string theory', correct:false},
        {text: 'string variables', correct:false},
        {text: 'string concantenation', correct:true},
        {text: 'string cheese', correct:false},
            ]
            },
]

function saveScore() {

}