import { css } from "linaria";

type Props = {
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

const Component = ({ label, name, type, value, onChange }: Props) => (
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

export default Component;
