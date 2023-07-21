import React, { FC, useEffect, useState } from "react";

import "../styles/area.css";

interface Props {
  value: string;
  history: string;
  setValue: (changeValue: string) => void;
}

const Area: FC<Props> = ({ value, setValue, history }) => {
  const defaultSize = 1.5;
  const defaultRatio = 1.2;

  const defaultMaxSizeInput = 20;

  const [textSize, setTextSize] = useState(defaultSize);

  useEffect(() => {
    sizeController(defaultMaxSizeInput);
  }, [value]);

  const changeValue = (currentValue: string) => {
    const checkStr = /[0-9]|[\+\%\-\*\=\/]/;

    const lastChar = currentValue[currentValue.length - 1];

    if (!checkStr.test(lastChar) && currentValue) return;

    setValue(currentValue);
  };

  const sizeController = (size: number) => {
    if (value.length > (size / textSize) * defaultSize) {
      setTextSize(textSize / defaultRatio);
    }

    if (
      value.length * defaultRatio < (size / textSize) * defaultSize &&
      value.length * defaultRatio > size
    ) {
      setTextSize(textSize * defaultRatio);
    }

    if (value.length === 0 || value.length < defaultMaxSizeInput) {
      setTextSize(defaultSize);
    }
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
          style={{ fontSize: `${textSize}rem` }}
        />
      </div>
    </section>
  );
};

export default Area;
