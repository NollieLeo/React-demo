import React, { useEffect, useState } from 'react';

import useInterval from '@/hooks/useInterval';
import { Button } from 'antd';
import Session from '@/components/session';
import useTimeout from '@/hooks/useTimeout';
import useMount from '@/hooks/useMount';
import useUnmount from '@/hooks/useUnmount';
import useForceUpdate from '@/hooks/useForceUpdate';
import useLatest from '@/hooks/useLatest';
import useUpdateEffect from '@/hooks/useUpdateEffect';
import useDeepEffect from '@/hooks/useDeepEffect';

const TestInterval = () => {
  const [cancel, start] = useInterval(setMyCount, 1000);
  const [cancel2, start2] = useInterval(setMyCount2, 500);

  const [state, setCount] = useState<number>(0);
  const [state2, setCount2] = useState<number>(0);

  function setMyCount() {
    setCount((number) => number + 1);
  }

  function setMyCount2() {
    // 这样存在闭包的情况
    setCount2(state2 + 1);
  }

  return (
    <Session title="useInterval">
      <span>Count: {state}</span>
      <Button onClick={cancel}>取消计时</Button>
      <Button onClick={start}>重新开始</Button>
      <br />
      <span>Count2: {state2}</span>
      <Button onClick={cancel2}>取消计时</Button>
      <Button onClick={start2}>重新开始</Button>
    </Session>
  );
};

const TestTimeOut = () => {
  const [isEnd, start, reset] = useTimeout(4000);
  const [isEnd2, start2, reset2] = useTimeout(8000);

  return (
    <Session title="useTimeout">
      1.开始了吗：{isEnd ? '开始了' : '结束了'}
      <Button onClick={start}>开始</Button>
      <Button onClick={reset}>重置</Button>
      <br />
      2.开始了吗：{isEnd2 ? '开始了' : '结束了'}
      <Button onClick={start2}>开始</Button>
      <Button onClick={reset2}>重置</Button>
    </Session>
  );
};

const TestMount = () => {
  const [count, setMyCount] = useState<number>(0);

  useMount(setCount);

  function setCount() {
    setTimeout(() => {
      setMyCount((state) => state + 1);
    }, 3000);
  }
  return <div>Count（等待3秒）：{count}</div>;
};

const TestUnMount = ({ callback }: { callback: (...args: any[]) => void }) => {
  useUnmount(callback);
  return <div>待销毁组件</div>;
};

const TestAllMount = () => {
  const [visible, setVisible] = useState(true);
  return (
    <Session title="useMount | useUnmount">
      <TestMount />
      {visible ? (
        <TestUnMount callback={() => alert('销毁了')} />
      ) : (
        '这玩意被销毁了'
      )}
      <Button onClick={() => setVisible(false)}>销毁楼上那个</Button>
    </Session>
  );
};

const TestForceUpdate = () => {
  const forceUpdate = useForceUpdate();

  return (
    <Session title="useForceUpdate">
      {Date.now()}
      <Button onClick={forceUpdate}>点我强制更新</Button>
    </Session>
  );
};

const TestPrevious = () => {
  const [num, setNum] = useState(0);

  const previous = useLatest(num);

  return (
    <Session title="useLatest">
      <span>previous: {previous.current}</span>
      <span>current: {num}</span>
      <Button onClick={() => setNum((pre) => pre + 1)}>增加</Button>
    </Session>
  );
};

const TestUpdateEffect = () => {
  const [status, setStatus] = useState(false);

  useUpdateEffect(() => {
    console.log(`第一次进来不更新status:${status}`);
  }, [status]);

  return (
    <Session title="useUpdateEffect">
      {`第一次进来不更新status:${status}`}
      <Button onClick={() => setStatus((status) => !status)}>
        点击触发更新
      </Button>
    </Session>
  );
};

const TestDeepEffect = () => {
  const [count, setCount] = useState<any>(0);

  function getData() {
    return {
      detail: {
        name: 'weng',
      },
      count,
    };
  }

  useDeepEffect(() => {
    console.log(getData());
  }, [getData()]);

  return (
    <Session title="useDeepEffect">
      <span>Count:{count}</span>
      <Button onClick={() => setCount(count + 1)}>click</Button>
    </Session>
  );
};

const HooksTest = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <TestInterval />
      <TestTimeOut />
      <TestAllMount />
      <TestForceUpdate />
      <TestPrevious />
      <TestUpdateEffect />
      <TestDeepEffect />
    </div>
  );
};

export default HooksTest;
