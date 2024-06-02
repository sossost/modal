import { ReactNode, useState } from "react";
import ModalManager from "../ModalManager";
import ModalContext from "./ModalContext";
import ModalContainer from "./ModalContainer";

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const flagState = useState(1);
  const [modalManager] = useState(() => new ModalManager(flagState));

  return (
    <ModalContext.Provider value={modalManager}>
      {children}
      <ModalContainer />
    </ModalContext.Provider>
  );
};

export default ModalProvider;
