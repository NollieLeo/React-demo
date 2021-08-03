import React, { useEffect } from 'react';

function useInterval(handler: CallableFunction, timer: number) {
  const intervalRef = React.useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    startTimer();
    return clearTimer;
  });

  function startTimer() {
    clearTimer();
    intervalRef.current = setInterval(() => {
      handler();
    }, timer);
  }

  function clearTimer() {
    intervalRef.current && clearInterval(intervalRef.current);
  }

  return [clearTimer, startTimer];
}

export default useInterval;
