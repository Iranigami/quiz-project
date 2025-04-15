import { useState } from "react";
import QuizCard from "./comps/QuizPage";
import StartPage from "./comps/StartPage";
import TourPage from "./comps/TourPage";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ResultPage from "./comps/ResultPage";
import { tours } from "./data";

function App() {
  //тестовые данные на время
  const questionsCount = 12;
  const res = 6;


  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/quiz/:tourId/:questionId"
          element={
            <QuizCard
            />
          }
        />
        <Route
          path="/tour/:tourId"
          element={<TourPage/>}
        />
        <Route
          path="/result/:tour_id"
          element={
            <ResultPage
              answeredQuestions={res}
              totalQuestions={questionsCount}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
