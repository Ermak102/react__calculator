import React, { FC, useEffect } from "react";
import { keyboards } from "../data/keyboard";
import KeyboardItem from "./KeyboardItem";

import "../styles/keyboard.css";

interface Props {
  value: string;
  setValue: (change: string) => void;
  setHistory: (changeHistory: string) => void;
}

const Keyboard: FC<Props> = ({ value, setValue, setHistory }) => {
  useEffect(() => {
    calculate();
  }, [value]);

  const calculate = () => {
    const strFormat = /\d[\+\-\*\/\%]\d/;

    if (!strFormat.test(value)) return;

    historyCalculate();
  };

  const historyCalculate = () => {
    if (value.split("").pop() === "=") {
      const calc = eval(value.slice(0, -1)).toString();

      setValue(calc);
      saveHistoryToStore(`${value}${calc}`);
      return;
    }

    try {
      setHistory(`${value} = ${eval(value)}`);
    } catch {
      setHistory("Ошибка");
    }
  };

  const saveHistoryToStore = (value: string) => {
    const storeHistory = localStorage.getItem("history");
    localStorage.setItem("history", `${storeHistory},${value}`);
  };

  return (
    <section className="keyboard">
      {keyboards.map((item) => (
        <KeyboardItem
          key={item.name}
          item={item}
          setValue={setValue}
          value={value}
        />
      ))}
    </section>
  );
};

export default Keyboard;
