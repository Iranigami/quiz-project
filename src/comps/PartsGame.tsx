import { useState } from "react";
import { textParts } from "../data";

export default function PartGame() {
  const [activePart, setActivePart] = useState(0);
  return (
    <div className="w-[1820px] h-[506px] bg-[#ECF7FF] rounded-[20px] p-[40px] flex gap-[30px]">
      <div className="w-[1522px] h-[426px] rounded-[20px] bg-white"></div>
      <div className="w-[200px] h-[270px]s">
        {[0, 1, 2, 3].map((index: number) => (
          <button
            key={index}
            className={`flex mt-[10px] w-full h-[60px] bg-aspide-blue rounded-[8px] text-white text-center flex justify-center items-center ${activePart !== index && "opacity-[50%]"}`}
            onClick={() => {
              setActivePart(index);
            }}
          >
            ОТРЫВОК {index}
          </button>
        ))}
      </div>
    </div>
  );
}
