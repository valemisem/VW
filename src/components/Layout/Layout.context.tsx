import { createContext } from "react";
import type { Size } from "../../types/types";

export type LayoutContextType = {
  size: Size;
};

export const LayoutContext = createContext<LayoutContextType>(
  {} as LayoutContextType
);
