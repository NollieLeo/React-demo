import React, { useEffect, useCallback } from 'react';
import useLatest from '../useLatest';

function useInterval(handler: CallableFunction, timer: number) {
  const intervalRef = React.useRef<ReturnType<typeof setInterval>>();

  // 这里能保证handler是最新的，防止闭包的情况出现，因为hanlder倘若从组件中读取某个值，以这个值为基准做后续操作，就会不生效
  const cacheHandlerRef = useLatest(handler);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, []);

  const clearTimer = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    intervalRef.current = setInterval(() => {
      cacheHandlerRef.current();
    }, timer);
  }, [clearTimer]);

  return [clearTimer, startTimer];
}

export default useInterval;
