import { useState } from "react";

export function useTempState<T>(
  initState: T | undefined = undefined,
  timeout: number = 1000
): [state: T | undefined, setState: (newState: T) => void] {
  const [state, setState] = useState<T | undefined>(initState);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const setNewState = (newState: T | undefined) => {
    setState(newState);
    if (timeoutId) clearTimeout(timeoutId);
    setTimeoutId(
      setTimeout(() => {
        setState(undefined);
      }, timeout)
    );
  };

  return [state, setNewState];
}
