import React from "react";

function Result({ score, reset }) {
  return (
    <div>
      <h1>Quiz Finished!</h1>
      <p>Score: {score}</p>
      <button
  onClick={() => {
    localStorage.removeItem("questions"); // force new fetch next time
    reset();
  }}
>
  Restart Quiz
</button>

    </div>
  );
}

export default Result;
