import React, { FC, useState } from "react";
import Area from "./Area";
import Keyboard from "./Keyboard";
import Header from "./Header";

interface Props {
  currentTheme: boolean;
  setTheme: (theme: boolean) => void;
}

const Calculator: FC<Props> = ({ currentTheme, setTheme }) => {
  const [historyField, setHistoryField] = useState("");
  const [input, setInput] = useState("");

  return (
    <main className="calculator">
      <Header currentTheme={currentTheme} setTheme={setTheme} />
      <Area value={input} setValue={setInput} history={historyField} />
      <Keyboard
        value={input}
        setValue={setInput}
        setHistory={setHistoryField}
      />
    </main>
  );
};

export default Calculator;
