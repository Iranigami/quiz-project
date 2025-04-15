import { useNavigate, useParams } from "react-router-dom";
import map from "../assets/images/map.png";
import { tours } from "../data";
import { useState } from "react";
import Modal from "./Modal";

export default function TourPage() {
  const navigate = useNavigate();
  const { tourId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter font-semibold">
      <div className="bg-[#ECF7FF] rounded-[20px] w-fill h-[858px] font-inter text-dark-blue font-semibold justify-center items-center mx-auto py-[20%]">
        <img
          src={map}
          alt="background"
          className="absolute z-0 top-0 mx-auto left-0 right-0"
        />
        <div className="mx-auto text-center w-[1222px]">
          <div className="text-aspide-blue text-[20px]">
            {Number(tourId) + 1} тур
          </div>
          <div className="text-[80px] tracking-[-2%] leading-[100%]">
            {tours[Number(tourId)].title}
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
            navigate(`/quiz/${tourId}/0`);
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
