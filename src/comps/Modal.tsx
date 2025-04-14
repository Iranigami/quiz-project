import arrow from "../assets/images/arrow.png" 

export default function Modal(){
    return(
        <div className="w-[800px] h-[586px] bg-white rounded-[20px] p-[30px] font-inter font-semibold">
            <img src={arrow} alt="image" className="" />
            <div className=""></div>
            <div className="font-normal"></div>
        </div>
    )
}