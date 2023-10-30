import { useState } from "react";
import "./App.css";

const questions = [
   {
      prompt: "What color is the sky",
      correctAnswer: "blue",
      answers: ["blue", "red", "orange", "green"],
   },
];

function App() {
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

   const currentQuestion = questions[currentQuestionIndex];

   return (
      <div className="App">
         <div className="quiz">
            <h1>{currentQuestion.prompt}</h1>

            {currentQuestion.answers.map((answer, idx) => {
               return (
                  <label>
                     <input
                        key={idx}
                        type="radio"
                        name="answer"
                     ></input>
                     {answer}
                  </label>
               );
            })}

            <button>Submit</button>
         </div>
      </div>
   );
}

export default App;
