import { useState, useEffect, useCallback } from 'react';

type timeoutHandlars = [() => void, () => void];

function useTimeout(ms = 0): [boolean, ...timeoutHandlars] {
  const [timeOut, setTimeout] = useState(false);

  const [start, reset] = useTimeoutCallback(() => setTimeout(true), ms);

  return [timeOut, start, reset];
}

function useTimeoutCallback(
  callback: (...args: any[]) => any,
  ms = 0,
): timeoutHandlars {
  const [timeout, setTimeoutId] = useState<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [timeout, ms]);

  const start = useCallback(() => {
    setTimeoutId(setTimeout(callback, ms));
  }, [ms, callback]);

  const reset = useCallback(() => {
    setTimeoutId(undefined);
  }, []);

  return [start, reset];
}

export default useTimeout;
