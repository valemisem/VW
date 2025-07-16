import type { FC, CSSProperties } from "react";
import type { Size } from "../../types/types";

type ModalProperties =
  | "bottom"
  | "top"
  | "left"
  | "right"
  | "transform"
  | "transition";
export type ModalProps = { onClose: (output?: unknown) => void };
export type ModalDef<T> = {
  Component: FC<T>;
  modalStyle?: ModalStyleProp;
  style?: StyleProp;
  veil?: boolean;
  closeOnVeilClick?: boolean;
  extraProps?: object;
  callback?: (param: unknown) => void;
};
export type StyleProp = Omit<CSSProperties, ModalProperties>;
export type ModalStyleProp =
  | ModalStyle
  | ((size: Size) => ModalStyle | ModalStyle);
export type ModalStyle = Pick<CSSProperties, ModalProperties> & {
  origPos?: string;
};
