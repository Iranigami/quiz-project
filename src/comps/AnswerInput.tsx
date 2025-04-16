import { ChangeEvent, useRef, useState } from "react";
import Keyboard from "./Keyboard";
import correct from "../assets/images/icons/circleCorrect.svg"
import incorrect from "../assets/images/icons/circleIncorrect.svg"

type Props = {
    submitAnswer: (answer:string) => void;
    state: string;
}

export default function AnswerInput({submitAnswer, state}: Props) {
    const [isKeyboardOpen, setKeyboardOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const timeoutId = useRef<number | null>(null);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currAnswer = event.target.value;
        setAnswer(currAnswer);
    };

  return(
    <>
    <div className="w-[800px] h-[80px] justify-center text-center mx-auto relative mt-[30px]">
        <input 
            disabled={state!=="default"}
            type="text" 
            className={`w-full h-full bg-white rounded-[10px] px-[20px] text-[24px] font-medium z-0
            ${state==="incorrect" && "border-[#E3605F] border-[1px]"}
            ${state==="correct" && "border-[#44BE72] border-[1px]"}`}
            placeholder="Введите ответ" 
            value={answer}
            onChange={handleChange}
            onFocus={()=> {setKeyboardOpen(true)}}/>
        
        {state==="incorrect" && (
            <img src={incorrect} alt="image" className="right-[22px] top-[30px] absolute z-10" />
        )}
        {state==="correct" && (
            <img src={correct} alt="image" className="right-[22px] top-[30px] absolute z-10" />
        )}
    </div>
    <Keyboard
        opened={isKeyboardOpen}
        onFocus={()=> {}}
        enterText={()=>{
            setKeyboardOpen(false);
            submitAnswer(answer)}}/>
    
    </>


        
  )
}