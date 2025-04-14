import { useState } from "react"

type Props = {
  className?:string,
  answerNumber?:number,
  answer:string,
  correct:boolean,
  onAnswered: (answerNumber:number) => void;
}


export default function AnswerButton({className, answerNumber, answer, correct}: Props) {

  const [state, setState] = useState("default") //default, correct, incorrect

  return(
    <button className={`w-full min-h-[120px] rounded-[20px] justify-center items-center flex relative cursor-pointer
      ${state==="default" && "bg-white text-dark-blue"} 
      ${state === "correct" && "bg-[#44BE72] text-white"}
      ${state === "incorrect" && "bg-[#E3605F] text-white"}
      ${className}`}
      
      onClick={()=>{
        setState(correct ? "correct" : "incorrect")
      }}>
      <div className="opacity-[50%] text-[14px] absolute top-[16px] left-[16px]">
        {answerNumber}
      </div>
      <div className="text-[20px] font-semibold">
        {answer}
      </div>
    </button>
  )
}