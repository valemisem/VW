import { useMemo, useState, type FC } from "react";
import { TOAST_TIME } from "./Toast.constants";
import type { ToastVariant } from "./Toast.types";
import type { HOCProps } from "../../types/react";
import { ToastContext, type ToastContextType } from "./Toast.context";
import { useTempState } from "../../utils/hooks/useTempState";

export const ToastProvider: FC<HOCProps> = ({ children }) => {
  const [variant, setVariant] = useState<ToastVariant>("good");
  const [message, setMessage] = useTempState<string>("", TOAST_TIME);

  const contextValue: ToastContextType = useMemo(
    () => ({
      variant,
      setVariant,
      message,
      setMessage,
    }),
    [variant, setVariant, message, setMessage]
  );

  return <ToastContext value={contextValue}>{children}</ToastContext>;
};
