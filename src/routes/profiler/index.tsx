import React, { Profiler, useState } from 'react';
import { Button } from 'antd';
import getRandomColor from '@/utils/getRandomColor';

const currentArr = new Array(1000).fill(0).map(() => getRandomColor());

const Navigation = () => {
  const [arr, setArr] = useState<any>([]);

  return (
    <div>
      <Button onClick={() => setArr(currentArr)}>更新</Button>
      {arr.map((value: any) => {
        return (
          <div
            key={value}
            style={{
              background: value,
              height: 50,
            }}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

const ProfilerNavigation = () => {
  function callback(
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions, // 属于本次更新的 interactions 的集合
  ) {
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    );
  }

  return (
    <Profiler id="ProfilerNavigation" onRender={callback}>
      <Navigation />
    </Profiler>
  );
};

export default ProfilerNavigation;
