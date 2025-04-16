import { useNavigate, useParams } from "react-router-dom";
import { tours } from "../data";

type Props = {
  onClose: () => void;
  title: string;
  text: string;
};

export default function HintModal({title, text, onClose }: Props) {
  const navigate = useNavigate();
  const {tourId, questionId} = useParams();
  return (
    <div className="w-[818px] max-h-[500px] h-fill bg-white rounded-[20px] font-inter font-semibold relative z-100 top-0 bottom-0 left-0 right-0 m-auto text-dark-blue text-left px-[30px] py-[34px]">
      <div className="text-[40px]">{title}</div>
      <div className="font-normal text-[24px] mt-[20px]">
        {text}
      </div>
      <div className="flex gap-[10px] mt-[50px]">
        <button
          className="w-[758px] h-[80px] bg-aspide-blue rounded-[9px] text-white text-[20px] cursor-pointer bottom-[30px]"
          onClick={() => {
            if (Number(questionId) == tours[Number(tourId)].questions.length-1) {
                navigate(`/result/${tourId}`);
              } else {
                navigate(`/quiz/${tourId}/${Number(questionId) + 1}`);
              }
            onClose();
          }}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
