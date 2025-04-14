import { useNavigate } from "react-router-dom"
import map from "../assets/images/map.svg"

type Props = {
    tourName: string,
    tourNumber: number,
}

export default function TourPage({tourName, tourNumber}:Props){
    const navigate = useNavigate();
    return(
        <div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter font-semibold">
          <div className="bg-[#ECF7FF] rounded-[20px] w-fill h-[858px] font-inter text-dark-blue font-semibold justify-center items-center mx-auto py-[20%]">
              <img src={map} alt="background" className="absolute z-0 top-0 mx-auto left-0 right-0" />
              <div className="mx-auto text-center w-[1222px]">
						<div className="text-aspide-blue text-[20px]">
							ВОПРОС {tourNumber}
						</div>
						<div className="text-[80px] tracking-[-2%] leading-[100%]">
							{tourName}
						</div>
					</div>
          </div> 
          <div className="flex gap-[2px] mt-[2px]">
					<button 
						className="bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer"
						onClick={()=>{navigate("/")}}>
						НА ГЛАВНУЮ
					</button>
					<button 
                        className="bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer"
                        onClick={()=>{navigate("/quiz")}}>
						ДАЛЕЕ
					</button>
				</div>
        </div>

    )
}