import React, { useState } from "react";
import quizQuests from "../../data/quizQuestions";
import QuizStep from "./QuizStep";

const Quiz = () => {
  const [quests, setQuests] = useState(quizQuests),
    [result, setResult] = useState('');

  const handleAnswer = (value) => {
    setTimeout(() => {
      setQuests(
        quests.slice(1, quests.length)
              .filter((quest) => quest.theme === value)
      );
    }, 350);
    console.log((quests.length));
    console.log(quests.slice(1, quests.length));
    if (!quests.length) {
      setTimeout(() => setResult("the result"), 350);
    }
  };

  const renderQuiz = () => (
    <QuizStep quest={quests[0]} handler={handleAnswer} />
  );
  const renderResult = () => <div>{result}</div>;
  return quests.length ? renderQuiz() : renderResult();
};

export default Quiz;
