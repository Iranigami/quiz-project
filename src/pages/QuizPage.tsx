import { useNavigate, useParams } from "react-router-dom";
import AnswerButton from "../comps/AnswerButton";
import { useState } from "react";
import Modal from "../comps/Modal";
import { tours } from "../data";

type Props = {
  onEndTour: (correctAnswers: number) => void;
};

export default function QuizCard({ onEndTour }: Props) {
  const { tourId, questionId } = useParams();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const questionCount = tours[Number(tourId)].questions.length;
  const question = tours[Number(tourId)].questions[Number(questionId)];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isAnswered, toggleAnswered] = useState(false);
  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter text-dark-blue font-semibold flex-col flex">
      <div className="w-full justify-center mx-auto flex flex-auto block gap-[2px]">
        <div
          className={`bg-[#ECF7FF] rounded-[20px] min-w-[909px] max-w-full justify-center mx-auto flex flex-auto block`}
        >
          <div className="w-[130px] h-[54px] rounded-full bg-white text-[24px] justify-center items-center flex absolute top-[20px] left-[20px]">
            <span>{Number(tourId) + 1} тур</span>
          </div>
          <div className="m-auto text-center w-[1222px]">
            <div className="text-aspide-blue text-[20px]">
              ВОПРОС {Number(questionId) + 1}/{questionCount}
            </div>
            <div className="text-[60px] tracking-[-2%] leading-[100%]">
              <pre className="font-inter text-dark-blue font-semibold text-[60px] tracking-[-2%] leading-[100%] text-center">
                {question.title}
              </pre>
            </div>
          </div>
        </div>
        {(question.type === 2 || question.type === 4) && (
          <div
            className={
              "w-[909px] flex-none block bg-white rounded-[20px] flex "
            }
          ></div>
        )}
      </div>
      {question.type !== 5 && (
        <div className="w-full gap-[2px] justify-between mt-[2px] grid grid-cols-4">
          {question.answers.map((answer: string, index: number) => (
            <AnswerButton
              key={String(questionId) + index}
              answer={answer}
              answerNumber={index + 1}
              correct={index === question.correct}
              isAnswered={isAnswered}
              type={question.type}
              onAnswered={() => {
                toggleAnswered(true);
                index === question.correct &&
                  setCorrectAnswers(correctAnswers + 1);
              }}
            />
          ))}
        </div>
      )}
      <div className="block flex gap-[2px] mt-[2px] w-full">
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
            if (question.type === 1) {
              onEndTour(correctAnswers);
              navigate(`/info/${tourId}/${questionId}`);
            } else {
              if (Number(questionId) == questionCount - 1) {
                onEndTour(correctAnswers);
                navigate(`/result/${tourId}`);
              } else {
                toggleAnswered(false);
                navigate(`/quiz/${tourId}/${Number(questionId) + 1}`);
              }
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
