import React, { createElement, useState, useEffect } from 'react';
import { createPortal, render } from 'react-dom';
import './index.less';

let modalRoot: any = document.getElementById('WengModalContainer');
const modalPrefix = 'weng-modal';

export const ModalContainer = (props: any) => {
  function renderRoot() {
    const docRoot = window.document;
    if (!modalRoot) {
      modalRoot = docRoot.createElement('div');
      modalRoot.id = 'WengModalContainer';
      docRoot.body.appendChild(modalRoot);
    }
  }
  useEffect(() => {
    renderRoot();
  }, []);

  return props.children;
};

const Modal = (props: any) => {
  const { children } = props;
  const [ele] = useState(document.createElement('div'));

  useEffect(() => {
    ele.className = `${modalPrefix}`;
    modalRoot && modalRoot.appendChild(ele);
    return () => {
      modalRoot && modalRoot.removeChild(ele);
    };
  }, []);

  return createPortal(children, ele);
};

export default Modal;
