import backspace from "../assets/images/icons/backspace.svg";

type Props = {
  type: string;
  text: string;
  className?: string;
  clickHandler?: () => void;
};

export default function Key({ type, text, className, clickHandler }: Props) {
  return (
    <button
      className={`h-[56px] flex justify-center items-center text-center rounded-[17px] bg-[#F1F3F3] ${className} active:bg-[#E1E3E3]`}
      onClick={clickHandler}
    >
      {text}
      {type === "backspace" && <img src={backspace} alt="backspace" />}
    </button>
  );
}
