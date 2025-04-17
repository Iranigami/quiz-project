import { useRef, useState } from "react";
import arr from "../assets/images/icons/arr.svg";
import { textParts } from "../data";

type Props = {
  onAnswered: () => void;
};

export default function PartsGame({ onAnswered }: Props) {
  const [activePart, setActivePart] = useState(0);
  const [isAnswersOpen, setAnswersOpen] = useState(false);
  const [isAnswered, setAnswered] = useState(false);
  const answeredParts = useRef([false, false, false, false]);
  const [clickedAnswer, setClickedAnswer] = useState<number>();
  const handleAnswerClick = (answer: number) => {
    setClickedAnswer(answer);
    setAnswered(true);
    answeredParts.current[activePart] = true;
    console.log(!answeredParts.current.includes(false));
    if (!answeredParts.current.includes(false)) onAnswered();
  };
  return (
    <div className="w-[1820px] h-[506px] bg-[#ECF7FF] rounded-[20px] p-[40px] flex gap-[30px] font-inter">
      <div className="w-[1522px] h-[426px] rounded-[20px] bg-white p-[30px] flex gap-[16px]">
        <div className="gap-[4px]">
          <button
            className="w-[200px] h-[44px] rounded-[4px] bg-[#ECF7FF] justify-center items-center flex text-dark-blue leading-[120%] tracking-[-4%] gap-[4px]"
            onClick={() => {
              setAnswersOpen(!isAnswersOpen);
            }}
          >
            Выбрать позицию
            <img
              src={arr}
              alt="img"
              className={`${isAnswersOpen && "rotate-180"} transition duration-150`}
            />
          </button>
          {isAnswersOpen && (
            <div
              className={
                "w-[200px] h-[156px] rounded-[8px] bg-[#ECF7FF] mt-[6px] grid p-[10px]"
              }
            >
              {[0, 1, 2, 3].map((index: number) => (
                <button
                  disabled={isAnswered}
                  key={index}
                  className={`${textParts[activePart].correctNumber !== index && clickedAnswer === index && answeredParts.current[activePart] && "outline outline-[#E3605F]"} ${textParts[activePart].correctNumber === index && answeredParts.current[activePart] && "outline outline-[#44BE72]"} flex items-center gap-[8px] w-[180px] h-[31px] rounded-[8px] text-[16px] font-normal text-dark-blue leading-[120%] tracking-[-4%] text-left pl-[8px]`}
                  onClick={() => {
                    handleAnswerClick(index);
                  }}
                >
                  <div
                    className={`size-[18px] rounded-full border border-[#D0D5DD] ${textParts[activePart].correctNumber !== index && clickedAnswer === index && answeredParts.current[activePart] && "scale-[50%] border-none outline-[2px] outline-[#E3605F] outline-offset-8 bg-[#E3605F]"} ${textParts[activePart].correctNumber === index && answeredParts.current[activePart] && "scale-[50%] border-none outline-[2px] outline-[#44BE72] outline-offset-8 bg-[#44BE72]"}`}
                  ></div>
                  Часть {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
        <pre className="w-[1246px] h-[366px] overflow-auto text-dark-blue text-[24px] leading-[120%] tracking-[-4%] font-inter font-normal">
          {textParts[activePart].text}
        </pre>
      </div>
      <div className="w-[200px] h-[270px]">
        {[0, 1, 2, 3].map((index: number) => (
          <button
            key={index}
            className={`flex mt-[10px] w-full h-[60px] bg-aspide-blue rounded-[8px] text-white text-center flex justify-center items-center ${activePart !== index && "opacity-[50%]"}`}
            onClick={() => {
              setActivePart(index);
              setClickedAnswer(undefined);
              setAnswered(answeredParts.current[index]);
            }}
          >
            ОТРЫВОК {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
