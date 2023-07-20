import React, { FC } from "react";
import { IKey, KeyClass, KeyType } from "../types/keyboard";

interface Props {
  item: IKey;
  value: string;
  setValue: (value: string) => void;
}

const KeyboardItem: FC<Props> = ({ item, setValue, value }) => {
  const filterType = (type: string) => {
    switch (type) {
      case KeyType[KeyType.add]:
        addItem();
        break;
      case KeyType[KeyType.delete]:
        deleteLastItem();
        break;
      case KeyType[KeyType.deleteAll]:
        deleteAll();
        break;
      case KeyType[KeyType.negative]:
        reverseSign();
        break;
    }
  };

  const addItem = () => {
    setValue(value + item.name);
  };

  const deleteLastItem = () => {
    setValue(value.split("").slice(0, -1).join(""));
  };

  const deleteAll = () => {
    setValue("");
  };

  const reverseSign = () => {
    setValue((eval(value) * -1).toString());
  };

  return (
    <div className={"key " + KeyClass[item.class]}>
      <div className="key_wrapper">
        <button
          className="key_btn"
          value={KeyType[item.type]}
          onClick={(e) => filterType(e.currentTarget.value)}
        >
          {item.name}
        </button>
      </div>
    </div>
  );
};

export default KeyboardItem;
