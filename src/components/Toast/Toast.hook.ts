import { useContext, useCallback } from "react";
import { ToastContext } from "./Toast.context";
import type { ToastVariant } from "./Toast.types";

export const useToast = () => {
  const { setVariant, setMessage } = useContext(ToastContext);

  const showToast = useCallback(
    (msg: string, variant: ToastVariant = "good") => {
      setVariant(variant);
      setMessage(msg);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    showToast,
  };
};
