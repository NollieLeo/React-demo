import { useRef, useEffect } from 'react';
import useLatest from '../useLatest';
import isEqual from 'fast-deep-equal';

function useDeepEffect(callback: (...args: any[]) => any, deps: any[]) {
  const emitRef = useRef<number>(0);
  const depsRef = useLatest(deps);

  if (!isEqual(depsRef.current, deps)) {
    emitRef.current += 1;
  }

  depsRef.current = deps;

  useEffect(() => {
    return callback();
  }, [emitRef.current]);
}

export default useDeepEffect;
