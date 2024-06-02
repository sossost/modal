import { Modal, ModalStack, FlagState, ModalProps } from "./types";

class ModalManager {
  private flagState: FlagState;
  private modalStack: ModalStack = [];

  constructor(flagState: FlagState) {
    this.flagState = flagState;
  }

  private updateState() {
    const [_, setFlag] = this.flagState;
    setFlag((prev) => prev + 1);
  }

  get currentModal() {
    return this.modalStack[this.modalStack.length - 1];
  }

  private handleModalResolution(
    key: string,
    resolver: (value: unknown) => void,
    value: unknown
  ) {
    resolver(value);
    this.modalStack = this.modalStack.filter(({ key: _key }) => key !== _key);
    this.updateState();
  }

  clear() {
    while (this.modalStack.length) {
      this.pop();
    }
    this.updateState();
  }

  pop() {
    this.currentModal.reject(`Close modal: ${this.currentModal.key}`);
    this.modalStack.pop();
    this.updateState();
  }

  push(
    key: string,
    modal: Modal,
    props: Omit<ModalProps, "resolve" | "reject">
  ) {
    return new Promise((resolve, reject) => {
      this.modalStack.push({
        key,
        modal,
        props,
        resolve: (value: unknown) =>
          this.handleModalResolution(key, resolve, value),
        reject: (reason: unknown) =>
          this.handleModalResolution(key, reject, reason),
      });
      this.updateState();
    });
  }
}

export default ModalManager;
