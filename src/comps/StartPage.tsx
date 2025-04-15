import img1 from "../assets/images/icons/img1.svg";
import img2 from "../assets/images/icons/img2.svg";
import ship from "../assets/images/icons/ship.svg";
import face from "../assets/images/icons/face.svg";
import national from "../assets/images/icons/national.svg";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();
  return (
    <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter font-semibold">
      <div className="w-full h-[134px] rounded-[20px] bg-aspide-blue flex p-[20px] justify-between">
        <div className="w-[280px] flex gap-[16px] items-center tracking-[-4%] leading-[110%]">
          <img src={face} alt="image" className="w-[62px]" />
          Дубенский районный краеведческий музей
        </div>
        <img
          src={national}
          alt="russian national projects"
          className="w-[116px]"
        />
      </div>
      <div className="flex mt-[2px] gap-[2px]">
        <div className="w-[909px] h-[844px] rounded-[20px] bg-linear-to-b from-light-blue to-aspide-blue justify-center items-center text-center">
          <div className="w-[766px] text-center text-white text-[60px] font-semibold w-[412px] mx-auto leading-[100%] tracking-[-2%] mt-[282px]">
            Квиз для старшеклассников «Умная морская душа»
          </div>
          <button
            className="w-[290px] h-[60px] bg-white rounded-[9px] justify-center text-center items-center text-dark-blue mx-auto mt-[40px] cursor-pointer"
            onClick={() => {
              navigate("/tour/0");
            }}
          >
            НАЧАТЬ
          </button>
        </div>
        <div className="">
          <div className="w-[909px] h-[421px] rounded-[20px] bg-aspide-blue justify-center items-center flex">
            <img src={ship} alt="image" className="" />
          </div>
          <div className="flex gap-[2px] mt-[2px]">
            <div className="w-full h-[421px] rounded-[20px] bg-aspide-blue justify-center items-center">
              <img src={img1} alt="image" className="mx-auto mt-[115px]" />
              <div className="text-center text-white text-[24px] font-semibold w-[266px] mx-auto leading-[100%] tracking-[-2%]">
                7 захватывающих этапов
              </div>
            </div>
            <div className="w-full h-[421px] rounded-[20px] bg-aspide-blue justify-center items-center">
              <img src={img2} alt="image" className="mx-auto mt-[115px]" />
              <div className="text-center text-white text-[24px] font-semibold w-[412px] mx-auto leading-[100%] tracking-[-2%]">
                Отправься в увлекательное путешествие по загадочным глубинам
                знаний
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
