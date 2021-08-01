import React, { ClassicComponent, Component } from 'react';

// HOC
function withComponentDidMount(WrapComponent: any, ...rest: any) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
    }
    componentDidMount() {
      console.log('这是高阶组件的componentDidMount');
    }
    render() {
      return <WrapComponent name={'weng'} {...this.props} />;
    }
  };
}

class NeededWrap extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    console.log('这是被包裹组件的componentDidMount');
  }
  render() {
    return <div>我是被高阶组件包裹的组件</div>;
  }
}

const HOCWrapedComponent = withComponentDidMount(NeededWrap);

export default HOCWrapedComponent;
