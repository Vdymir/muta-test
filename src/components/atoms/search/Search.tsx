import React from "react";
import SearchIcon from "../../../assets/svgs/components/Search";
import "./styles.css";

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export default function Search({
  value,
  onChange,
  placeholder = "Parametro de busqueda",
}: Props) {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <SearchIcon />
    </div>
  );
}
