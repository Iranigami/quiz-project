import { useState } from "react"

type Props = {
  className?:string,
  answerNumber?:number,
  answer:string,
  correct:boolean,
  isAnswered:boolean,
  onAnswered: () => void;
}


export default function AnswerButton({className, answerNumber, answer, correct, isAnswered, onAnswered}: Props) {

  const toggleClick = ()=>{
    setState(correct ? "correct" : "incorrect");
    onAnswered();
  }

  const [state, setState] = useState("default") //default, correct, incorrect

  return(
    <button className={`w-full min-h-[120px] rounded-[20px] justify-center items-center flex relative cursor-pointer
      ${state==="default" && "bg-white text-dark-blue"} 
      ${state === "correct" && "bg-[#44BE72] text-white"}
      ${state === "incorrect" && "bg-[#E3605F] text-white"}
      ${state === "default" && isAnswered && "opacity-[50%]"}
      ${className}`}
      disabled = {isAnswered}
      onClick={toggleClick}>
      <div className="opacity-[50%] text-[14px] absolute top-[16px] left-[16px]">
        {answerNumber}
      </div>
      <div className="text-[20px] font-semibold">
        {answer}
      </div>
    </button>
  )
}