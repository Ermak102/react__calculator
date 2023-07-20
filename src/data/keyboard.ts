import { IKey, KeyClass, KeyType } from "../types/keyboard";

export const keyboards: IKey[] = [
  {
    name: "AC",
    class: KeyClass.delete,
    type: KeyType.deleteAll,
  },
  {
    name: "<-",
    class: KeyClass.delete,
    type: KeyType.delete,
  },
  {
    name: "%",
    class: KeyClass.operator,
    type: KeyType.add,
  },
  {
    name: "/",
    class: KeyClass.operator,
    type: KeyType.add,
  },

  {
    name: "7",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "8",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "9",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "*",
    class: KeyClass.operator,
    type: KeyType.add,
  },

  //

  {
    name: "4",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "5",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "6",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "-",
    class: KeyClass.operator,
    type: KeyType.add,
  },

  //

  {
    name: "1",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "2",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "3",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "+",
    class: KeyClass.operator,
    type: KeyType.add,
  },

  //

  {
    name: "+/-",
    class: KeyClass.number,
    type: KeyType.negative,
  },
  {
    name: "0",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: ".",
    class: KeyClass.number,
    type: KeyType.add,
  },
  {
    name: "=",
    class: KeyClass.operator,
    type: KeyType.add,
  },
];
