import React, { useState } from 'react';


const Redux = () => {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	
		const [showScore, setShowScore] = useState(false);
	
		const [score, setScore] = useState(0);
	
		const handleAnswerOptionClick = (correct) => {
			if (correct) {
				setScore(score + 1);
			}
	
			const nextQuestion = currentQuestion + 1;
			if (nextQuestion < questions.length) {
				setCurrentQuestion(nextQuestion);
			} else {
				setShowScore(true);
			}
		};
 const questions = [
    {
        questionText: 'What is redux?',
        answerOptions: [
            { answerText: '1', correct: false },
            { answerText: '4', correct: false },
            { answerText: '6', correct: false },
            { answerText: '7', correct: true },
        ],
    },
{
        questionText: 'Stateful logic is..?',
        answerOptions: [
            { answerText: 'Jeff Bezos', correct: false },
            { answerText: 'Stateful logic is logic that is built into a component,it can be a function that handles a click event or set toggle state, or even a function that formats data before it gets displayed. ', correct: true },
            { answerText: 'Bill Gates', correct: false },
            { answerText: 'Tony Stark', correct: false },
        ],
    },
{
        questionText: 'What is custom hook()?',
        answerOptions: [
            { answerText: 'using semantic tags, giving appropriate id/classname, and responsive units', correct: true },
            { answerText: 'Intel', correct: false },
            { answerText: 'Amazon', correct: false },
            { answerText: 'Microsoft', correct: false },
        ],
    },
{
        questionText: 'What does the localStorage do?',
        answerOptions: [
            { answerText: 'fixed layouts', correct: false },
            { answerText: 'fluid layouts', correct: false },
            { answerText: 'responsive units are used like rems/em and media queries are used', correct: true },
            { answerText: 'fixed, adaptive, and fluid layouts', correct: false },
        ],
    },
    {
        questionText: 'Redux-thunk is..?',
        answerOptions: [
            { answerText: 'fixed layouts', correct: false },
            { answerText: 'fluid layouts', correct: false },
            { answerText: 'responsive units are used like rems/em and media queries are used', correct: true },
            { answerText: 'fixed, adaptive, and fluid layouts', correct: false },
        ],
    },
    {
        questionText: 'The reducer pattern is a..?',
        answerOptions: [
            { answerText: 'Jeff Bezos', correct: false },
            { answerText: 'uses max and min width to determine where breakpoints are introduced', correct: true },
            { answerText: 'Bill Gates', correct: false },
            { answerText: 'Tony Stark', correct: false },
        ],
    },
    {
        questionText: 'Context API is..?',
        answerOptions: [
            { answerText: 'using semantic tags, giving appropriate id/classname, and responsive units', correct: true },
            { answerText: 'Intel', correct: false },
            { answerText: 'Amazon', correct: false },
            { answerText: 'Microsoft', correct: false },
        ],
    },
];


return (
    <div className='app'>
        {showScore ? (
            <div className='score-section'>
                You scored {score} out of {questions.length}
            </div>
        ) : (
            <>
                <div className='main'>

                    <div className='count'>
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>

                    <div className='text'>
          {questions[currentQuestion].questionText}
          </div>
                </div>

                <div className='answers'>
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(answerOption.correct)}>{answerOption.answerText}</button>
                    ))}
                </div>
            </>
        )}
    </div>
);
}

export default Redux
