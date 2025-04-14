import { useNavigate } from "react-router-dom"
import AnswerButton from "./AnswerButton"
import { useState } from "react"
import Modal from "./Modal"


type Props = {
	tour:number,
	question:string,
	questionNumber:string,
	answers:string[],
	correctAnswer:string
}

export default function QuizCard({tour, question, questionNumber, answers, correctAnswer}: Props){
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();
	const [isAnswered, toggleAnswered] = useState(false);
    return(
			<div className="w-[1820px] h-[980px] justify-center items-center top-[50px] mx-auto left-0 right-0 fixed font-inter text-dark-blue font-semibold">
				<div className="bg-[#ECF7FF] rounded-[20px] w-fill h-[736px] justify-center items-center mx-auto py-[10%]">
					<div className="w-[130px] h-[54px] rounded-full bg-white text-[24px] justify-center items-center flex absolute top-[20px] left-[20px]">
						<span>{tour} тур</span>
					</div>
					<div className="mx-auto text-center w-[1222px]">
						<div className="text-aspide-blue text-[20px]">
							ВОПРОС {questionNumber}
						</div>
						<div className="text-[80px] tracking-[-2%] leading-[100%]">
							{question}
						</div>
					</div>
				</div>
				<div className="flex gap-[2px] justify-between mt-[2px]">
				{answers.map((answer: string, index: number) => (
					<AnswerButton
						answer={answer}
						answerNumber={index+1}
						correct={answer===correctAnswer}
						isAnswered={isAnswered}
						onAnswered={()=>{toggleAnswered(true)}}/>
          ))}
				</div>
				<div className="flex gap-[2px] mt-[2px]">
					<button 
						className="bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer"
						onClick={()=>{setIsModalOpen(true)}}>
						НА ГЛАВНУЮ
					</button>
					<button 
						className={`bg-aspide-blue w-full flex justify-center items-center h-[120px] rounded-[20px] text-white text-[20px] cursor-pointer ${!isAnswered && "opacity-[40%]"}`}
						disabled = {isAnswered}>
						ДАЛЕЕ
					</button>
				</div>
				{isModalOpen && 
					<>					
					<div className="w-full h-full fixed absolute bg-dark-blue opacity-[50%] z-100 top-0 left-0"/>
					<Modal
						onClose={() => {setIsModalOpen(false)}}/>
					</>}
			</div>
    )
}