import React, { useState } from "react";

function Question({ question, next, setScore, currentIndex, totalQuestions }) {
  const [selected, setSelected] = useState(null);

  if (!question) return null;

  const answers = [...question.incorrect_answers, question.correct_answer].sort(
    () => Math.random() - 0.5
  );

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleClick = (answer) => {
    if (selected) return;
    setSelected(answer);

    if (answer === question.correct_answer) setScore((prev) => prev + 1);

    setTimeout(() => {
      setSelected(null);
      next();
    }, 1000);
  };

  return (
    <div className="question-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="question-progress">
        Question {currentIndex + 1} / {totalQuestions}
      </p>

      <h2
        className="question-text"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      <div className="answers-grid">
        {answers.map((ans, idx) => {
          let statusClass = "";
          if (selected) {
            if (ans === question.correct_answer) statusClass = "correct";
            else if (ans === selected && ans !== question.correct_answer)
              statusClass = "wrong";
          }

          return (
            <button
              key={idx}
              onClick={() => handleClick(ans)}
              dangerouslySetInnerHTML={{ __html: ans }}
              disabled={!!selected}
              className={`answer-button ${statusClass}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Question;