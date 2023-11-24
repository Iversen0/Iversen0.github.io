const quizData = [
    {
        question: "Hvornår blev Agramkow lavet?",
        a: "1980",
        b: "1977",
        c: "1970",
        d: "1975",
        correct: "b",
    },
    {
        question: "Hvor ligger Agramkows Hovedekvater?",
        a: "USA",
        b: "København",
        c: "Sønderborg",
        d: "Vejle",
        correct: "c",
    },
    {
        question: "Hvad laver Agramkow primært?",
        a: "Ingen af dem under",
        b: "lave it support til andre firmaer?",
        c: "Tegne tegninger på computere til firmaer",
        d: "Finder løsninger til firmaer med køleskabe, air conditioner",
        correct: "d",
    },
    {
        question: "Hvor meget erfaring har Agramkow?",
        a: "60+ års erfaring",
        b: "20 års erfaring",
        c: "30 års erfaring",
        d: "40+ års erfaring",
        correct: "d",
    },
    {
        question: "Hvilke typer produker producerer Agramkow?",
        a: "Elektronik",
        b: "Biler",
        c: "Møbler",
        d: "Køkkenudstyr",
        correct: "a",
    },
    {
        question: "Hvad er Agramkows mission?",
        a: "At skabe innovative løsninger",
        b: "At være verdens førende inden for bæredygtihed",
        c: "At forbedre menneskers livskvalitet",
        d: "At opnå global dominans inden for deres industri",
        correct: "a",
    },
    {
        question: "Hvad er Agramkows kernekompetencer",
        a: "Automatisering og robotteknologi",
        b: "Medicinsk udstyr",
        c: "Bygningsmaterialer",
        d: "Fødvareproduktion",
        correct: "a",
    },
    {
        question: "Hvor mange ansatte har Agramkow?",
        a: "100-500",
        b: "500-1000",
        c: "1000-5000",
        d: "Over 5000",
        correct: "b",
    },
    {
        question: "Hvilke lande opererer Agramkow i?",
        a: "Danmark og Tyskland",
        b: "USA og Kina",
        c: "Frankrig og Spanien",
        d: "Alle ovenstående",
        correct: "d",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})