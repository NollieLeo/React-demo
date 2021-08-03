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

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

const BoundaryComponents = () => {
  return (
    <>
      <ErrorBoundar>
        <ErrorCatch />
      </ErrorBoundar>
      <Counter />
      <div>上面那个如果发生错误了我这个还会在。</div>
    </>
  );
};

export default BoundaryComponents;
