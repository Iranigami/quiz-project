import { useEffect, useState } from "react";
import correctIcon from "../assets/images/icons/correct.svg";
import incorrectIcon from "../assets/images/icons/incorrect.svg";

type Props = {
  className?: string;
  answerNumber?: number;
  answer?: string;
  correct: boolean;
  isAnswered: boolean;
  type: number;
  onAnswered: () => void;
};

export default function AnswerButton({
  className,
  answerNumber,
  answer,
  correct,
  isAnswered,
  type,
  onAnswered,
}: Props) {
  const toggleClick = () => {
    setState(correct ? "correct" : "incorrect");
    onAnswered();
  };
  const [state, setState] = useState("default"); //default, correct, incorrect

  useEffect(() => {
    !isAnswered && setState("default");
  }, [isAnswered]);
  switch (type) {
    case 0: {
      return (
        <button
          className={`w-full min-h-[120px] rounded-[20px] justify-center items-center flex relative cursor-pointer
          ${state === "default" && "bg-white text-dark-blue"} 
          ${state === "correct" && "bg-[#44BE72] text-white"}
          ${state === "incorrect" && "bg-[#E3605F] text-white"}
          ${state === "default" && isAnswered && "opacity-[50%]"}
          ${className}`}
          disabled={isAnswered}
          onClick={toggleClick}
        >
          <div className="opacity-[50%] text-[14px] absolute top-[16px] left-[16px]">
            {answerNumber}
          </div>
          <div className="text-[20px] font-semibold">{answer}</div>
        </button>
      );
    }
    case 1: {
      return (
        <button
          className={`w-full h-[307px] rounded-[20px] justify-center items-center flex relative cursor-pointer
          ${state === "correct" && "border-[#44BE72] border-[4px]"}
          ${state === "incorrect" && "border-[#E3605F] border-[4px]"}
          ${className}`}
          disabled={isAnswered}
          onClick={toggleClick}
        >
          <div className="text-[14px] absolute top-[16px] left-[16px] flex z-100 justify-between w-fill right-[16px]">
            <span className="opacity-[50%]">{answerNumber}</span>
            <div
              className={`w-[24px] h-[24px] rounded-[4px] justify-center items-center flex
              ${state === "default" && "bg-white border-[#D0D5DD] border-[1.5px]"}
              ${state === "correct" && "bg-[#44BE72]"}
              ${state === "incorrect" && "bg-[#E3605F]"}`}
            >
              {state === "correct" && (
                <img src={correctIcon} alt="correct" className="" />
              )}
              {state === "incorrect" && (
                <img src={incorrectIcon} alt="correct" className="" />
              )}
            </div>
          </div>
          <img
            src={`/src/assets/images/questions/${answer}.png`}
            alt="answer"
            className={`z-[-1] absolute ${state === "default" && isAnswered && "opacity-[50%]"}`}
          />
        </button>
      );
    }
    default: {
      return (
        <button
          className={`w-full min-h-[120px] rounded-[20px] justify-center items-center flex relative cursor-pointer
          ${state === "default" && "bg-white text-dark-blue"} 
          ${state === "correct" && "bg-[#44BE72] text-white"}
          ${state === "incorrect" && "bg-[#E3605F] text-white"}
          ${state === "default" && isAnswered && "opacity-[50%]"}
          ${className}`}
          disabled={isAnswered}
          onClick={toggleClick}
        >
          <div className="opacity-[50%] text-[14px] absolute top-[16px] left-[16px]">
            {answerNumber}
          </div>
          <div className="text-[20px] font-semibold">{answer}</div>
        </button>
      );
    }
  }
}
