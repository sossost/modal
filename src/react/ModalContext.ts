import { createContext } from "react";
import { ModalContextType } from "./types";

const ModalContext = createContext<ModalContextType>(null);

export default ModalContext;
