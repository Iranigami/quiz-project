import { useNavigate } from "react-router-dom";
import great from "../assets/images/great.png";
import good from "../assets/images/good.png";
import bad from "../assets/images/bad.png";
import { useState } from "react";

type Props = {
  tourNumber: number;
  answeredQuestions: number;
  totalQuestions: number;
};

export default function ResultPage({
  tourNumber,
  answeredQuestions,
  totalQuestions,
}: Props) {
	const result = totalQuestions/answeredQuestions;

  const navigate = useNavigate();
  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter font-semibold">
      <div className="bg-[#ECF7FF] rounded-[20px] w-fill h-[858px] font-inter text-dark-blue font-semibold justify-center items-center mx-auto py-[20%]">
        <div className="w-[130px] h-[54px] rounded-full bg-white text-[24px] justify-center items-center flex absolute top-[20px] left-[20px]">
          <span>{tourNumber} тур</span>
        </div>
		{result===1 && <div>ТЕКСТ КРУТОЙ</div>}
		{result<=2 && result!==1 && <div>ТЕКСТ ХОРОШИЙ</div>}
		{result>2 && <div>ТЕКСТ ПЛОХОЙ</div>}
      </div>
      <div className="flex gap-[2px] mt-[2px]">
        <button
          className="bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          НА ГЛАВНУЮ
        </button>
        <button
          className="bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer"
          onClick={() => {
            navigate("/quiz");
          }}
        >
          ДАЛЕЕ
        </button>
      </div>
    </div>
  );
}
