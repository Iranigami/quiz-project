import { useState } from "react";
import QuizCard from "./pages/QuizPage";
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
              onEndTour={(correctAnswers) => {
                setResult(correctAnswers);
              }}
            />
          }
        />
        <Route path="/tour/:tourId" element={<TourPage />} />
        <Route
          path="/result/:tourId"
          element={<ResultPage answeredQuestions={result} />}
        />
        <Route path="/info/:tourId/:questionId" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
