import { atom } from "jotai";

const customerNameAtom = atom([]);
const customerChangeAtom = atom(0);
const customerQueueAtom = atom();

export { customerNameAtom, customerChangeAtom, customerQueueAtom };
