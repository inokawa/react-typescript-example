import React from "react";

type Props = {
  label: string;
  name: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const style = { display: "flex", flex: 1, alignItems: "center" };
const inputStyle = { flex: 1, margin: "10px" };

const Component = ({ label, name, type, value, onChange }: Props) => (
  <div style={style}>
    <label htmlFor={name}>{label}</label>
    <input
      style={inputStyle}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default Component;
