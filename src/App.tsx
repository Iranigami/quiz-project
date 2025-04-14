import { useState } from "react";
import QuizCard from "./comps/QuizCard";
import StartPage from "./comps/StartPage";
import TourPage from "./comps/TourPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [tour, setTour] = useState(1);
  const question = "Как называется трехмачтовый боевой корабль, у которого много пушек?";
  const questionNumber = "1/12";
  const answers = ["ФРЕГАТ", "ЛИНКОР", "БОТ", "КОРВЕТ"];
  const correctAnswer = "ФРЕГАТ"

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/quiz" element={<QuizCard tour={tour} question={question} questionNumber={questionNumber} answers={answers} correctAnswer={correctAnswer}/> }/>
        <Route path="/tour" element={<TourPage tourNumber={tour} tourName={"Викторина"}/>} />
      </Routes>
    </Router>
  );
}

export default App;
