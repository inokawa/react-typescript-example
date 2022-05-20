export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  size?: ButtonSize;
  label: string;
  onClick: () => void;
};

export const Button = ({ size = "md", label, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    style={{
      fontSize: size === "sm" ? "0.5rem" : size === "lg" ? "1.5rem" : "1.0rem",
    }}
  >
    {label}
  </button>
);
