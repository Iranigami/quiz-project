import { useState } from "react";
import andrFlag from "../assets/images/andrFlag.png";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../comps/Modal";
import { tours } from "../data";

type Props = {};

export default function InfoPage() {
  const navigate = useNavigate();
  const { tourId, questionId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const questionCount = tours[Number(tourId)].questions.length;

  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter font-semibold text-white">
      <div className="w-full h-[858px] flex gap-[2px]">
        <div className="w-[909px] h-full bg-linear-to-b from-light-blue to-aspide-blue rounded-[20px] justify-center items-center flex">
          <img src={andrFlag} alt="Andreevsky Flag" className="" />
        </div>
        <div className="w-[909px] h-full bg-aspide-blue rounded-[20px] justify-center items-center text-center py-[324px] px-[80px]">
          <div className="text-[60px] tracking-[-2%] leading-[100%]">
            Андреевский флаг
          </div>
          <div className="text-[24px] leading-[110%] tracking-[-2%] font-normal mt-[20px]">
            Андреевский флаг является главным корабельным кормовым флагом
            Российского Флота. Он представляет собой белое полотнище,
            пересеченное по диагонали двумя синими полосами, которые образуют
            наклонный крест, который называется Андреевским. Этот крест
            и дал имя флагу.
          </div>
        </div>
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
            if (Number(questionId) == questionCount - 1) {
              navigate(`/tour/${Number(tourId) + 1}`);
            } else {
              navigate(`/quiz/${tourId}/${Number(questionId) + 1}`);
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
