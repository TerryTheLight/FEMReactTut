import React, { FunctionComponent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    const modalRoot = document.getElementById("modal");

    if (modalRoot == null) return;
    modalRoot.appendChild(elRef.current);

    //Use effect special feature that when return means it will unmount
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
