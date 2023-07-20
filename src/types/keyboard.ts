export interface IKey {
  name: string;
  class: KeyClass;
  type: KeyType;
}

export enum KeyClass {
  "number",
  "delete",
  "operator",
}

export enum KeyType {
  "add",
  "delete",
  "deleteAll",
  "negative",
}
