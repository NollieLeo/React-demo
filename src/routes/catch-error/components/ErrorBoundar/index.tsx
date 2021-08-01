import React from 'react';
import './index.less';

const prefixCls = 'weng-errorBoundar';

class ErrorBoundar extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      errorMsg: null,
    };
  }

  componentDidCatch(error: any, errorMsg: any) {
    this.setState({
      error,
      errorMsg,
    });
  }

  render() {
    if (this.state.errorMsg) {
      return (
        <div className={prefixCls}>
          <h2>某个子组件报错了....</h2>
          <main>
            <p>{this.state.error && String(this.state.error)}</p>
            <pre>{this.state.errorMsg?.componentStack}</pre>
          </main>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundar;
