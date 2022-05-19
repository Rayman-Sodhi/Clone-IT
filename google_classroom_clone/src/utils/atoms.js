import { atom } from "recoil";

const joinDialogAtom = atom({
  key: "joinDialogAtom",
  default: false,
});

const createDialogAtom = atom({
  key: "createDialogAtom",
  default: false,
});

export { createDialogAtom, joinDialogAtom };
