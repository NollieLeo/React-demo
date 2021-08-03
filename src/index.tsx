import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import './index.less';
import { ModalContainer } from './components/WengModal';

const prefixCls = 'weng';

const CatchError = lazy(() => import('./routes/catch-error'));
const RefTransmit = lazy(() => import('./routes/refs-transmit'));
const HOC = lazy(() => import('./routes/HOC'));
const TestModal = lazy(() => import('./routes/modal'));
const Profiler = lazy(() => import('./routes/profiler'));
const TestReducer = lazy(() => import('./routes/reducer-test'));
const HooksTest = lazy(()=>import('./routes/hooks-test'));

const HomePage = () => {
  return (
    <ModalContainer>
      <div className={prefixCls}>
        <div className={`${prefixCls}-menu`}>
          <Link to="/"> Home</Link>
          <Link to="/error-catch"> 错误边界（Error Boundaries）</Link>
          <Link to="/refs-transmit">refs转发（refs transmit）</Link>
          <Link to="/hoc">高阶函数（HOC）</Link>
          <Link to="/profiler-test">profiler</Link>
          <Link to="/modal-test">自己写的modal</Link>
          <Link to="/reducer-test">reducer测试</Link>
          <Link to="/hooks-test">自定义hooks测试</Link>

        </div>
        <div className={`${prefixCls}-container`}>
          <Suspense fallback={Spin}>
            <Switch>
              <Route component={() => <div>'主页'</div>} exact path="/" />
              <Route component={CatchError} exact path="/error-catch" />
              <Route component={RefTransmit} exact path="/refs-transmit" />
              <Route component={HOC} exact path="/hoc" />
              <Route component={TestModal} exact path="/modal-test" />
              <Route component={Profiler} exact path="/profiler-test" />
              <Route component={TestReducer} exact path="/reducer-test" />
              <Route component={HooksTest} exact path="/hooks-test" />
            </Switch>
          </Suspense>
        </div>
      </div>
    </ModalContainer>
  );
};

export default HomePage;
