import { useState } from "react";
import QuizCard from "./comps/QuizPage";
import StartPage from "./comps/StartPage";
import TourPage from "./comps/TourPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultPage from "./comps/ResultPage";

function App() {
  //тестовые данные на время
  const [tour, setTour] = useState(1);
  const question =
    "Как называется трехмачтовый боевой корабль, у которого много пушек?";
  const questionNumber = 1;
  const questionsCount = 12;
  const answers = ["ФРЕГАТ", "ЛИНКОР", "БОТ", "КОРВЕТ"];
  const correctAnswer = "ФРЕГАТ";

  const res = 6;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/quiz"
          element={
            <QuizCard
              tour={tour}
              question={question}
              questionNumber={questionNumber}
              questionCount={questionsCount}
              answers={answers}
              correctAnswer={correctAnswer}
            />
          }
        />
        <Route
          path="/tour"
          element={<TourPage tourNumber={tour} tourName={"Викторина"} />}
        />
        <Route
          path="/result"
          element={
            <ResultPage
              answeredQuestions={res}
              totalQuestions={questionsCount}
              tourNumber={tour}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
