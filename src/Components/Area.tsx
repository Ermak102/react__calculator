import React, { FC, useEffect, useState } from "react";

import "../styles/area.css";

interface Props {
  value: string;
  history: string;
  setValue: (changeValue: string) => void;
}

const Area: FC<Props> = ({ value, setValue, history }) => {
  const [textSize, setTextSize] = useState(1.5);
  const [sizeRatio, setSizeRation] = useState(1.25);

  const changeValue = (currentValue: string) => {
    const checkStr = /[0-9]|[\+\%\-\*\=\/]/;

    const lastChar = currentValue[currentValue.length - 1];

    if (!checkStr.test(lastChar) && currentValue) return;

    setValue(currentValue);
  };

  const sizeController = (size: number) => {
    if (sizeRatio > 3) return;

    if (size * sizeRatio > value.length) return;

    setTextSize(textSize / 1.2);
    setSizeRation(sizeRatio * 1.2);
  };

  return (
    <section className="area">
      <div className="textarea">
        <div
          className="last_history"
          style={{ fontSize: `${textSize / 1.5}rem` }}
        >
          {history}
        </div>
        <input
          autoFocus
          className="area_input"
          value={value}
          placeholder="0"
          onChange={(e) => changeValue(e.currentTarget.value)}
          onInput={(e) => sizeController(e.currentTarget.size)}
          style={{ fontSize: `${textSize}rem` }}
        />
      </div>
    </section>
  );
};

export default Area;
