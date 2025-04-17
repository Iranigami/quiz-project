import { useState } from "react";
import QuizPage from "./pages/QuizPage";
import StartPage from "./pages/StartPage";
import TourPage from "./pages/TourPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import { tours } from "./data";
import InfoPage from "./pages/InfoPage";
import PageNotFound from "./pages/PageNotFound";
import Keyboard from "./comps/Keyboard";
import PartGame from "./comps/PartsGame";
import ExamplePage from "./pages/ExamplePage";

function App() {
  const [result, setResult] = useState(0);
  const [tourResult, setTourResult] = useState(0);
  const [currentTotalQuestions, setCurrentTotalQuestions] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route
          path="/quiz/:tourId/:questionId"
          element={
            <QuizPage
              onEndTour={(correctAnswers, questionCount) => {
                setTourResult(correctAnswers);
                setResult(result + correctAnswers);
                setCurrentTotalQuestions(currentTotalQuestions + questionCount);
              }}
            />
          }
        />
        <Route path="/tour/:tourId" element={<TourPage />} />
        <Route
          path="/result/:tourId"
          element={<ResultPage answeredQuestions={tourResult} />}
        />
        <Route path="/info/:tourId/:questionId" element={<InfoPage />} />
        <Route path="/example/:tourId" element={<ExamplePage />} />
        <Route
          path="/result"
          element={<ResultPage answeredQuestions={result} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
