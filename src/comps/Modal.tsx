import { useNavigate } from "react-router-dom"
import arrow from "../assets/images/arrow.png" 

type Props ={
    onClose: () => void 
}

export default function Modal({onClose}: Props){
    const navigate = useNavigate()
    return(
        <div className="w-[800px] h-[586px] bg-white rounded-[20px] p-[30px] font-inter font-semibold fixed z-100 top-0 bottom-0 left-0 right-0 m-auto text-dark-blue text-center">
            <img src={arrow} alt="image" className="mx-auto" />
            <div className="text-[40px]">Весь прогресс будет утерян</div>
            <div className="font-normal text-[24px]">Вы уверены что хотите выйти?</div>
            <div className="flex gap-[10px] mt-[50px]">
                <button className="w-[365px] h-[80px] bg-white border-[1px] border-aspide-blue rounded-[9px] text-aspide-blue text-[20px] cursor-pointer"
                onClick={()=>{navigate("/")}}>
                    Да
                </button>
                <button className="w-[365px] h-[80px] bg-aspide-blue rounded-[9px] text-white text-[20px] cursor-pointer"
                onClick={onClose}>
                    Нет
                </button>
            </div>
        </div>
    )
}