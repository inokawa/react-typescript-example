export type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button = ({ title, onClick }: ButtonProps) => (
  <button onClick={onClick}>{title}</button>
);
