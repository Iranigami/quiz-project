import { useNavigate, useParams } from "react-router-dom";
import AnswerButton from "../comps/AnswerButton";
import { useEffect, useRef, useState } from "react";
import Modal from "../comps/Modal";
import { tours } from "../data";
import AnswerInput from "../comps/AnswerInput";
import HintModal from "../comps/HintModal";

type Props = {
  onEndTour: (correctAnswers: number, questionCount: number) => void;
};

export default function QuizCard({ onEndTour }: Props) {
  const { tourId, questionId } = useParams();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const questionCount = tours[Number(tourId)].questions.length;
  const question = tours[Number(tourId)].questions[Number(questionId)];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isAnswered, toggleAnswered] = useState(false);
  const givenAnswers = useRef(0);
  const [inputState, setInputState] = useState("default");
  const [isHintOpen, setHintOpen] = useState(false);
  //@ts-ignore
  const image = question.image || undefined;

  const answerHandler = (index: number) => {
    //@ts-ignore
    if (question.correct.includes(index)) {
      setCorrectAnswers(correctAnswers + 1);
      givenAnswers.current = givenAnswers.current + 1;
    }
    if (
      question.correct.length === 1 ||
      givenAnswers.current === question.correct.length
    )
      toggleAnswered(true);
  };

  const answerInputHandler = (answer: string) => {
    //@ts-ignore
    if (question.correct.includes(answer.toLowerCase())) {
      setCorrectAnswers(correctAnswers + 1);
      setInputState("correct");
    }
    else {
      setInputState("incorrect");
    }
    toggleAnswered(true);
  };
  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter text-dark-blue font-semibold flex-col flex">
      <div className="w-full justify-center mx-auto flex flex-auto block gap-[2px]">
        <div
          className={`bg-[#ECF7FF] rounded-[20px] min-w-[909px] max-w-full justify-center mx-auto flex flex-auto block`}
        >
          <div className="w-[130px] h-[54px] rounded-full bg-white text-[24px] justify-center items-center flex absolute top-[20px] left-[20px]">
            <span>{Number(tourId) + 1} тур</span>
          </div>
          <div className="m-auto text-center w-[80%]">
            <div className="text-aspide-blue text-[20px]">
              ВОПРОС {Number(questionId) + 1}/{questionCount}
            </div>
            <div className="text-[60px] tracking-[-2%] leading-[100%]">
              <pre className="font-inter text-dark-blue font-semibold text-[60px] tracking-[-2%] leading-[100%] text-center">
                {question.title}
              </pre>
            </div>
            {question.type===5 && (
              <AnswerInput
                key={window.location.pathname}
                state={inputState}
                submitAnswer={(answer) => {
                  answerInputHandler(answer);
                }}/>
            )}
          </div>
        </div>
        {image && (
          <div
            className={
              "w-[909px] flex-none block bg-white rounded-[20px] flex justify-center items-center"
            }
          >
            <img
              src={`/src/assets/images/questions/${image}.png`}
              alt={image}
              className="w-[466px] h-[466px]"
            />
          </div>
        )}
      </div>
      <div className="w-full gap-[2px] justify-between mt-[2px] grid grid-cols-4">
        {question.answers.map((answer: string, index: number) => (
          <AnswerButton
            key={String(questionId) + index}
            answer={answer}
            answerNumber={index + 1}
            //@ts-ignore
            correct={question.correct.includes(index)}
            isAnswered={isAnswered}
            type={question.type}
            onAnswered={() => {
              answerHandler(index);
            }}
          />
        ))}
      </div>
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
            switch(question.type) {
            case 1 : {
              onEndTour(correctAnswers, questionCount);
              givenAnswers.current=0;
              navigate(`/info/${tourId}/${questionId}`);
              break;
            } 
            case 5 :{
              onEndTour(correctAnswers, questionCount);
              givenAnswers.current=0;
              setInputState("default");
              setHintOpen(true);
              toggleAnswered(false);
              break;
            }
            default: {
              if (Number(questionId) == questionCount - 1) {
                onEndTour(correctAnswers, questionCount);
                givenAnswers.current=0;
                setInputState("default");
                navigate(`/result/${tourId}`);
              } else {
                toggleAnswered(false);
                givenAnswers.current=0;
                setInputState("default");
                navigate(`/quiz/${tourId}/${Number(questionId) + 1}`);
              }
            }
          }}}
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
      {isHintOpen && (
        <>
          <div className="w-full h-full fixed absolute bg-dark-blue opacity-[50%] z-100 top-0 left-0" />
          <HintModal
            //@ts-ignore
            title = {question.hint.title || undefined}
            //@ts-ignore
            text = {question.hint.text || undefined}
            onClose={()=>{setHintOpen(false)}}
          />
        </>
      )}

    </div>
  );
}
