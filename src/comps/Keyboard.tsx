import { useState } from "react";
import Key from "./Key";
import search from "../assets/images/icons/search.svg";

type Props = {
  enterText: () => void;
  opened: boolean;
  onFocus: () => void;
  enterButton: (letter: string) => void;
};

export default function Keyboard({
  opened,
  enterText,
  onFocus,
  enterButton,
}: Props) {
  const [language, setLanguage] = useState("RUS");

  return (
    <div
      onClick={onFocus}
      className={`transition ${opened && "translate-y-[-600px]"} duration-700 w-[1014px] h-[380px] rounded-[17px] bg-white font-manrope text-[#373737] justify-center items-center text-center px-[30.12px] pt-[27.81px] mx-auto mt-[655px] absolute left-0 right-0 z-10`}
    >
      <div className="w-full h-[56px] relative">
        <input
          className="w-full h-[56px] bg-[#FCFCFC] border-[#F1F3F3] border-[1.09px] rounded-[13px] px-[17.39px]"
          placeholder="Поиск"
        />
        <img
          src={search}
          alt="search"
          className="absolute right-0 top-0 bottom-0 my-auto mx-[17.39px]"
        />
      </div>
      <div className="flex gap-[10px] justify-center items-center text-center mt-[12.44px]">
        {language === "RUS" &&
          ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={text}
                type="symbol"
                className="w-[60px]"
                clickHandler={() => {
                  enterButton(text);
                }}
              />
            ),
          )}
        {language === "ENG" &&
          ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={text}
                type="symbol"
                className="w-[60px]"
                clickHandler={() => {
                  enterButton(text);
                }}
              />
            ),
          )}
        <Key text={""} type="backspace" className="w-[110px]" />
      </div>
      <div className="flex gap-[10px] justify-center items-center text-center mt-[12.44px]">
        {language === "RUS" &&
          ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={text}
                type="symbol"
                className="w-[60px]"
                clickHandler={() => {
                  enterButton(text);
                }}
              />
            ),
          )}
        {language === "ENG" &&
          ["a", "s", "d", "f", "g", "h", "j", "k", "l"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={text}
                type="symbol"
                className="w-[60px]"
                clickHandler={() => {
                  enterButton(text);
                }}
              />
            ),
          )}
        <Key
          text={"Enter"}
          type="enter"
          className="w-[143px]"
          clickHandler={enterText}
        />
      </div>
      <div className="flex gap-[10px] justify-center items-center text-center mt-[12.44px]">
        <Key text={"&123"} type="nums" className="w-[110px]" />
        {language === "RUS" &&
          ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ё"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={text}
                type="symbol"
                className="w-[60px]"
                clickHandler={() => {
                  enterButton(text);
                }}
              />
            ),
          )}
        {language === "ENG" &&
          ["z", "x", "c", "v", "b", "n", "m"].map(
            (text: string, index: number) => (
              <Key
                key={index}
                text={text}
                type="symbol"
                className="w-[60px]"
                clickHandler={() => {
                  enterButton(text);
                }}
              />
            ),
          )}
        <Key
          text={language}
          type="lang"
          className="w-[110px]"
          clickHandler={() => {
            setLanguage(`${language === "RUS" ? "ENG" : "RUS"}`);
          }}
        />
      </div>
      <div className="flex gap-[10px] justify-center items-center text-center mt-[12.44px]">
        <Key text={" "} type="symbol" className="w-[552px]" />
      </div>
    </div>
  );
}
