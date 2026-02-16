import React, { useState } from "react";
import Quiz from "./Components/Quiz";
import Result from "./Components/Results";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("18"); // default: Science: Computers


  if (showResult)
    return (
      <div className="app">
        <div className="quiz-card">
          <Result
            score={score}
            reset={() => {
              setScore(0);
              setShowResult(false);
            }}
          />
        </div>
      </div>
    );

  return (
    <div className="app">
      <div className="quiz-card">
        <div className="quiz-header">
          <h1 className="quiz-title">Quiz App</h1>

          <div className="controls-row">
            <label>
              Difficulty:
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>

            <label>
              Category:
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="18">Science: Computers</option>
                <option value="21">Sports</option>
                <option value="23">History</option>
                <option value="9">General Knowledge</option>
              </select>
            </label>
          </div>
        </div>

        <Quiz
          difficulty={difficulty}
          category={category}
          setScore={setScore}
          finishQuiz={() => setShowResult(true)}
        />
      </div>
    </div>
  );
}
export default App;
