import React, { useEffect } from 'react';

function useUnmount(callback: () => void) {
  useEffect(() => () => {
    callback();
  });
}
export default useUnmount;
