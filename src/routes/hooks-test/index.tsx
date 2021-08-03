import React, { useState } from 'react';

import { useInterval } from '@/hooks';
import { Button } from 'antd';
import Session from '@/components/session';
import useTimeout from '@/hooks/useTimeout';

const TestInterval = () => {
  const [cancel, start] = useInterval(setMyCount, 1000);
  const [cancel2, start2] = useInterval(setMyCount2, 2000);

  const [state, setCount] = useState<number>(0);

  const [state2, setCount2] = useState<number>(0);

  function setMyCount() {
    setCount((number) => number + 1);
  }

  function setMyCount2() {
    setCount2((number) => number + 1);
  }

  return (
    <Session title="useInterval">
      Count: {state}
      <Button onClick={cancel}>取消计时</Button>
      <Button onClick={start}>重新开始</Button>
      Count2: {state2}
      <Button onClick={cancel2}>取消计时</Button>
      <Button onClick={start2}>重新开始</Button>
    </Session>
  );
};

const TestTimeOut = ()=>{
  const [isEnd, start, reset]= useTimeout(4000);
  const [isEnd2, start2, reset2]= useTimeout(8000);

  return(
    <Session title="useTimeout">
      1.开始了吗：{isEnd ? '开始了' :'结束了'}
      <Button onClick={start}>开始</Button>
      <Button onClick={reset}>重置</Button>
      <br />
      2.开始了吗：{isEnd2 ? '开始了' :'结束了'}
      <Button onClick={start2}>开始</Button>
      <Button onClick={reset2}>重置</Button>
      <line />
    </Session>
  )
}

const HooksTest = () => {
  return (
    <div style={{
      display: 'flex',
    }}>
      <TestInterval />
      <TestTimeOut />
    </div>
  );
};

export default HooksTest;
