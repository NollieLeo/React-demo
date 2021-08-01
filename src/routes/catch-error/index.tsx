import React, { useState } from 'react';
import { Button } from 'antd';
import ErrorBoundar from './components/ErrorBoundar';

const ErrorCatch = () => {
  const [number, setNumber] = useState<number>(0);

  function addNumber() {
    setNumber(number + 1);
  }

  if (number > 5) {
    throw new Error('数字超过五了，我让你报错');
  }

  return (
    <div>
      <Button onClick={addNumber}>{number}</Button>
    </div>
  );
};

const BoundaryComponents = () => {
  return (
    <>
      <ErrorBoundar>
        <ErrorCatch />
      </ErrorBoundar>
      <div>上面那个如果发生错误了我这个还会在。</div>
    </>
  );
};

export default BoundaryComponents;
