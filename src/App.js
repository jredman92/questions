import { useState } from "react";
import "./App.css";

const questions = [
   {
      prompt: "What color is the sky?",
      correctAnswer: "Blue",
      answers: ["Blue", "Red", "Orange", "Green"],
   },
   {
      prompt: "What is the country's capital?",
      correctAnswer: "Washington DC",
      answers: ["Washington DC", "Houston", "Seattle", "Philly"],
   },
];
function App() {
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [selectedAnswer, setSelectedAnswer] = useState("");
   const [score, setScore] = useState(0);

   const isGameOver = currentQuestionIndex >= questions.length;

   const currentQuestion = questions[currentQuestionIndex];

   function ScoreScreen() {
      const numberOfWrongAnswers = questions.length - score;

      return (
         <div className="score-page">
            <h2>
               Your Score is {score} You got {numberOfWrongAnswers} wrong
            </h2>
            <button
               className="retry"
               onClick={(e) => {
                  setCurrentQuestionIndex(0);
                  setSelectedAnswer("");
                  setScore(0);
               }}
            >
               Retry
            </button>
         </div>
      );
   }

   function Quiz() {
      return (
         <div className="quiz">
            <h1>{currentQuestion.prompt}</h1>

            <form
               onSubmit={(e) => {
                  e.preventDefault();

                  if (selectedAnswer === currentQuestion.correctAnswer) {
                     setScore(score + 1);
                  }

                  setCurrentQuestionIndex(currentQuestionIndex + 1);
               }}
            >
               {currentQuestion.answers.map((answer) => {
                  return (
                     <label key={answer}>
                        <input
                           onChange={() => {
                              setSelectedAnswer(answer);
                           }}
                           type="radio"
                           name="answer"
                           checked={selectedAnswer === answer}
                        ></input>
                        {answer}
                     </label>
                  );
               })}
               <br />
               <button>Submit</button>
            </form>
         </div>
      );
   }

   return <div className="App">{isGameOver ? <ScoreScreen /> : <Quiz />} </div>;
}

export default App;
