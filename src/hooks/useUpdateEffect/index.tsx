import { useEffect, useRef } from 'react';
import useLatest from '../useLatest';

function useUpdateEffect(callback: () => any, args: any[]) {
  const isFirstMount = useRef(true);
  const cacheCallback = useLatest(callback);
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    } else {
      return cacheCallback.current?.();
    }
  }, args);
}

export default useUpdateEffect;
