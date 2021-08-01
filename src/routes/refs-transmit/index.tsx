import { Button } from 'antd';
import React, { useRef, forwardRef } from 'react';

const NeededForward = (props:any, ref: any) => {
  return (
    <div>
      <span>MyInput</span>
      <label>
        这个input提供ref，外部可以获取：
        <input ref={ref} />
      </label>
    </div>
  );
}

const MyInput = forwardRef(NeededForward);

const UseInput = () => {
  const myRef = useRef<any>();

  function handleFocus() {
    console.log(myRef.current);
    if (myRef.current) {
      myRef.current?.focus();
      myRef.current.value = '我他妈聚焦了';
    }
  }

  return (
    <div>
      <p>通过下面的按钮点击，获取MyInput中的ref的值，动态的去使input聚焦</p>
      <br />
      <Button onClick={handleFocus}>
        点击动态获取MyInput组件中的ref值，并且聚焦
      </Button>
      <br />
      <MyInput ref={myRef} />
    </div>
  );
};

export default UseInput;
