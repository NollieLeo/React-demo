import React, { useMemo } from 'react';
import getRandonColor from '@/utils/getRandomColor';
import './index.less';

const prefixCls = 'weng-hooks-container';

const Session = (props: { children: any; title?: string }) => {
  const { children, title } = props;
  const borderColor = useMemo(() => getRandonColor(), []);
  return (
    <div
      style={{
        borderColor,
      }}
      className={prefixCls}
    >
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

Session.defaultProps = {
  title: 'This is not only a hooks container',
};

export default Session;
