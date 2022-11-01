import { inputStyle, wrapperStyle } from "./From.css";

export type FormProps = {
  label: string;
  name: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Form = ({ label, name, type, value, onChange }: FormProps) => (
  <div className={wrapperStyle}>
    <label htmlFor={name}>{label}</label>
    <input
      className={inputStyle}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
    />
  </div>
);
