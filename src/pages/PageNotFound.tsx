import { useNavigate, useParams } from "react-router-dom";
import map from "../assets/images/map.png";
import { tours } from "../data";
import { useState } from "react";
import Modal from "../comps/Modal";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter font-semibold">
      <div className="bg-[#ECF7FF] rounded-[20px] w-fill h-[858px] font-inter text-dark-blue font-semibold justify-center items-center mx-auto py-[20%]">
      </div>
      <div className="flex gap-[2px] mt-[2px]">
        <button
          className="bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer"
          onClick={() => {
            navigate("/")
          }}
        >
          НА ГЛАВНУЮ
        </button>
      </div>
    </div>
  );
}
