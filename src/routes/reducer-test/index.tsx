import React, { useReducer } from 'react';
import { Button } from 'antd';

function init(initialCount) {
  return { count: initialCount };
}

const TestReducer = ({ initCount = 1 }) => {
  const [state, dispatch] = useReducer(reducer, initCount, init);

  function reducer(
    state: number,
    action: {
      type: string;
    },
  ) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'reset':
        return init(action.payload);
      default:
        throw new Error();
    }
  }

  return (
    <div>
      <span>Count: {state.count}</span>
      <Button onClick={() => dispatch({ type: 'reset', payload: initCount })}>
        Reset
      </Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
    </div>
  );
};

export default TestReducer;
