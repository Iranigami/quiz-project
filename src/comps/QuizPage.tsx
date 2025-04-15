import { useNavigate, useParams } from "react-router-dom";
import AnswerButton from "./AnswerButton";
import { useState } from "react";
import Modal from "./Modal";
import { tours } from "../data";


export default function QuizCard() {
  const {tourId, questionId} = useParams();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const questionCount = tours[Number(tourId)].questions.length;
  const question = tours[Number(tourId)].questions[Number(questionId)];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isAnswered, toggleAnswered] = useState(false);
  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter text-dark-blue font-semibold">
      <div className="bg-[#ECF7FF] rounded-[20px] w-fill h-[736px] justify-center items-center mx-auto py-[10%]">
        <div className="w-[130px] h-[54px] rounded-full bg-white text-[24px] justify-center items-center flex absolute top-[20px] left-[20px]">
          <span>{Number(tourId)+1} тур</span>
        </div>
        <div className="mx-auto text-center w-[1222px]">
          <div className="text-aspide-blue text-[20px]">
            ВОПРОС {Number(questionId)+1}/{questionCount}
          </div>
          <div className="text-[80px] tracking-[-2%] leading-[100%]">
            {question.title}
          </div>
        </div>
      </div>
      <div className="flex gap-[2px] justify-between mt-[2px]">
        {question.answers.map((answer: string, index: number) => (
          <AnswerButton
            answer={answer}
            answerNumber={index + 1}
            correct={index === question.correct}
            isAnswered={isAnswered}
            onAnswered={() => {
              toggleAnswered(true);
              (index === question.correct) && setCorrectAnswers(correctAnswers+1);
            }}
          />
        ))}
      </div>
      <div className="flex gap-[2px] mt-[2px]">
        <button
          className="bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          НА ГЛАВНУЮ
        </button>
        <button
          className={`bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer ${!isAnswered && "opacity-[40%]"}`}
          disabled={!isAnswered}
          onClick={() => {
            if (Number(questionId) == (questionCount-1)){

              console.log(correctAnswers);
              navigate(`/result/${tourId}`);
            }
            else {
              toggleAnswered(false);
              navigate(`/quiz/${tourId}/${Number(questionId)+1}`)
            }
          }}
        >
          ДАЛЕЕ
        </button>
      </div>
      {isModalOpen && (
        <>
          <div className="w-full h-full fixed absolute bg-dark-blue opacity-[50%] z-100 top-0 left-0" />
          <Modal
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </>
      )}
    </div>
  );
}
