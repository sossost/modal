export type SetStateFunction = (prev: number) => number;
export type FlagState = [number, (updateFunction: SetStateFunction) => void];

export type ModalProps = {
  [key: string]: unknown;
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
};

export type Modal<P = ModalProps> = (props: P) => any;

export type ModalStackItem<P = ModalProps> = {
  key: string;
  modal: Modal;
  resolve: (value: unknown) => void;
  reject: (reason: unknown) => void;
  props: Omit<P, "resolve" | "reject">;
};

export type ModalStack<P = ModalProps> = ModalStackItem<P>[];
