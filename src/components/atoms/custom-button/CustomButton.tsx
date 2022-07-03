import React from "react";
import "./styles.css";

interface Props {
  text: string;
  icon?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export default function CustomButton({
  text,
  icon: Component = null,
  onClick,
  disabled = false,
}: Props) {
  return (
    <div className="customButton">
      <button onClick={onClick} disabled={disabled}>
        <p>{text}</p>
        {Component && <Component />}
      </button>
    </div>
  );
}
