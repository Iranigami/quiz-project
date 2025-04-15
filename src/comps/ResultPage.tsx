import { useNavigate, useParams } from "react-router-dom";
import great from "../assets/images/great.png";
import good from "../assets/images/good.png";
import bad from "../assets/images/bad.png";
import { useState } from "react";
import { tours } from "../data";
import Modal from "./Modal";

type Props = {
  answeredQuestions: number;
};

export default function ResultPage({ answeredQuestions }: Props) {
  const navigate = useNavigate();
  const { tourId } = useParams();
  const questionCount = tours[Number(tourId)].questions.length;
  const result = questionCount / answeredQuestions;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed">
      <div className="bg-[#ECF7FF] rounded-[20px] w-fill h-[858px] font-inter text-dark-blue font-semibold justify-center items-center mx-auto py-[158px]">
        <div className="w-[130px] h-[54px] rounded-full bg-white text-[24px] justify-center items-center flex absolute top-[20px] left-[20px]">
          <span>{Number(tourId) + 1} тур</span>
        </div>
        {result === 1 && (
          <div className="w-[1004px] h-[542px] justify-center text-center items-center mx-auto">
            <img src={great} alt="great" className="mx-auto" />
            <div className="mt-[20px] text-[80px] leading-[100%] tracking-[-2%]">
              Вы справились отлично!
            </div>
            <div className="mt-[20px] text-[20px] text-aspide-blue leading-[100%] tracking-[-2%]">
              ВЫ ОТВЕТИЛИ ПРАВИЛЬНО НА {answeredQuestions} / {questionCount}{" "}
              ВОПРОСОВ
            </div>
          </div>
        )}
        {result <= 2 && result !== 1 && (
          <div className="w-[1004px] h-[542px] justify-center text-center items-center mx-auto">
            <img src={good} alt="good" className="mx-auto" />
            <div className="mt-[20px] text-[80px] leading-[100%] tracking-[-2%]">
              Хороший результат
            </div>
            <div className="mt-[20px] text-[20px] text-aspide-blue leading-[100%] tracking-[-2%]">
              ВЫ ОТВЕТИЛИ ПРАВИЛЬНО НА {answeredQuestions} / {questionCount}{" "}
              ВОПРОСОВ
            </div>
          </div>
        )}
        {result > 2 && (
          <div className="w-[1004px] h-[542px] justify-center text-center items-center mx-auto">
            <img src={bad} alt="bad" className="mx-auto" />
            <div className="mt-[20px] text-[80px] leading-[100%] tracking-[-2%]">
              Не сдавайся!
            </div>
            <div className="mt-[20px] text-[20px] text-aspide-blue leading-[100%] tracking-[-2%]">
              ВЫ ОТВЕТИЛИ ПРАВИЛЬНО НА {answeredQuestions} / {questionCount}{" "}
              ВОПРОСОВ
            </div>
          </div>
        )}
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
          className="bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer"
          onClick={() => {
            navigate(`/tour/${Number(tourId) + 1}`); //добавить обработку последнего тура
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
