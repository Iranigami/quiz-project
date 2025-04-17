import { useNavigate, useParams } from "react-router-dom";
import grandshtock from "../assets/images/grangshtok.png";
import sekstan from "../assets/images/sekstan.png";
import lag from "../assets/images/lag.png";
import quadrant from "../assets/images/quadrand.png";
import sunhours from "../assets/images/sunhours.png";
import kabestan from "../assets/images/kabestan.png";

export default function ExamplePage() {
  const navigate = useNavigate();
  const { tourId } = useParams();
  return (
    <div
      className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter font-semibold"
      onClick={() => {
        navigate(`/tour/${Number(tourId) + 1}`);
      }}
    >
      <div className="bg-[#ECF7FF] rounded-[20px] w-full h-[180px] font-inter text-dark-blue font-semibold justify-center items-center mx-auto py-[60px]">
        <div className="text-[60px] tracking-[-2%] leading-[100%] mx-auto text-center">
          Примеры оснастки и снаряжения
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[2px] w-full mt-[2px] font-medium">
        <div className="w-[909px] h-full bg-aspide-blue flex block rounded-[20px] p-[20px] gap-[20px] items-end">
          <img src={grandshtock} alt="grandshtock" />
          <span className="text-white text-[40px] leading-[100%] tracking-[-2%]">
            Градшток
          </span>
        </div>
        <div className="w-[909px] h-full bg-aspide-blue flex block rounded-[20px] p-[20px] gap-[20px] items-end">
          <img src={quadrant} alt="quadrant" />
          <span className="text-white text-[40px] leading-[100%] tracking-[-2%]">
            Квадрант
          </span>
        </div>
        <div className="w-[909px] h-full bg-aspide-blue flex block rounded-[20px] p-[20px] gap-[20px] items-end">
          <img src={sekstan} alt="sekstan" />
          <span className="text-white text-[40px] leading-[100%] tracking-[-2%]">
            Секстан
          </span>
        </div>
        <div className="w-[909px] h-full bg-aspide-blue flex block rounded-[20px] p-[20px] gap-[20px] items-end">
          <img src={sunhours} alt="sunhours" />
          <span className="text-white text-[40px] leading-[100%] tracking-[-2%]">
            Солнечные часы
          </span>
        </div>
        <div className="w-[909px] h-full bg-aspide-blue flex block rounded-[20px] p-[20px] gap-[20px] items-end">
          <img src={lag} alt="lag" />
          <span className="text-white text-[40px] leading-[100%] tracking-[-2%]">
            Лаг
          </span>
        </div>
        <div className="w-[909px] h-full bg-aspide-blue flex block rounded-[20px] p-[20px] gap-[20px] items-end">
          <img src={kabestan} alt="kabestan" />
          <span className="text-white text-[40px] leading-[100%] tracking-[-2%]">
            Кабестан
          </span>
        </div>
      </div>
    </div>
  );
}
