import React, { useState, useEffect } from "react";
import Question from "./Questions";

const baseUrl = "https://opentdb.com/api.php?amount=10&type=multiple";

function Quiz({ difficulty, category, setScore, finishQuiz }) { // <-- added category
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchQuestions = async () => {
      setLoading(true);
      setError(null);
      setQuestions([]);
      setCurrentIndex(0);

      try {
        const url = `${baseUrl}&difficulty=${difficulty}&category=${category}`; // <-- use both
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();

        if (!data.results || data.results.length === 0) {
          throw new Error("No questions returned");
        }

        setQuestions(data.results);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Failed to fetch questions. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();

    return () => controller.abort();
  }, [difficulty, category]); // <-- re-fetch when either changes

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!questions.length) return <h2>No questions available</h2>;

  return (
    <Question
      question={questions[currentIndex]}
      next={handleNext}
      setScore={setScore}
      currentIndex={currentIndex}
      totalQuestions={questions.length}
    />
  );
}

export default Quiz;