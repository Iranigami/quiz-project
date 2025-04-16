import { ChangeEvent, useRef, useState } from "react";
import Keyboard from "./Keyboard";

export default function AnswerInput() {
    const [isKeyboardOpen, setKeyboardOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const timeoutId = useRef<number | null>(null);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const currAnswer = event.target.value;
        setAnswer(currAnswer);

        if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        }

        timeoutId.current = window.setTimeout(() => {
        console.log(currAnswer);
        }, 350);
    };

  return(
    <>
    <input 
        type="text" 
        className="w-[800px] h-[80px] bg-white rounded-[10px] mt-[30px] px-[20px] text-[24px] font-medium" 
        placeholder="Введите ответ" 
        value={answer}
        onChange={handleChange}
        onFocus={()=> {setKeyboardOpen(true)}}
        onBlur={() => {setKeyboardOpen(false)}}/>

    <Keyboard
        opened={isKeyboardOpen}
        enterText={()=>{}}/>
    
    </>


        
  )
}