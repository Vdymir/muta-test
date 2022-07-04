import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode | React.ReactNode[];
}

export default function Modal({ children, onClose, isOpen }: Props) {
  if (!isOpen) return null;

  const close = (target: HTMLDivElement) => {
    const element = target;
    if (element.id === "modal") onClose();
  };

  return ReactDOM.createPortal(
    <dialog
      className="modal"
      id="modal"
      onClick={({ target }) => close(target as HTMLDivElement)}
    >
      <section>{children}</section>
    </dialog>,
    document.getElementById("portal")!
  );
}
