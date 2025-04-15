import { useState } from "react";
import QuizCard from "./comps/QuizPage";
import StartPage from "./comps/StartPage";
import TourPage from "./comps/TourPage";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import ResultPage from "./comps/ResultPage";
import { tours } from "./data";

function App() {
  const [result, setResult] = useState(0);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/quiz/:tourId/:questionId"
          element={
            <QuizCard
            onEndTour={(correctAnswers) => {setResult(correctAnswers)}}
            />
          }
        />
        <Route
          path="/tour/:tourId"
          element={<TourPage/>}
        />
        <Route
          path="/result/:tourId"
          element={
            <ResultPage
              answeredQuestions={result}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
