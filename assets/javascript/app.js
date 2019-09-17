var myQuestions = [
    {
        question: "What year did Star Wars: A New Hope come out??",
        answers: {
            a: '1966',
            b: '1977',
            c: '1981',
            d: '1976'
        },
        correctAnswer: 'b'
    },
    {
        question: "Who owned the millennium falcon before Han Solo?",
        answers: {
            a: 'Lando Calrissian',
            b: 'Chewbaca',
            c: 'Luke Skywalker',
            d: 'Gerneral Zarpedon'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who did the voice over for Darth Vader?",
        answers: {
            a: 'Arnold Schwarzenegger',
            b: 'Samuel L. Jackson',
            c: 'James Earl Jones',
            d: 'Luther Vandross'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
