import { css } from "@emotion/css";

export type FormProps = {
  label: string;
  name: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  value: React.InputHTMLAttributes<HTMLInputElement>["value"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const style = css`
  display: flex;
  flex: 1;
  align-items: center;
`;

const inputStyle = css`
  flex: 1;
  margin: 10px;
`;

export const Form = ({ label, name, type, value, onChange }: FormProps) => (
  <div className={style}>
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
