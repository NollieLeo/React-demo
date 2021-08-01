import React from 'react';
import { Button } from 'antd';
import { useState } from 'react';
import Modal from '@/components/WengModal';

const TestModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  function toggleModal() {
    setVisible(!visible);
  }
  return (
    <div>
      <Button onClick={toggleModal}>点击打开弹窗</Button>
      {visible ? <Modal>
        helloworld我是modal
        <Button onClick={toggleModal}>点击关闭</Button>
      </Modal> : null}
    </div>
  );
};

export default TestModal;
