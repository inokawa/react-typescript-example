import React from "react";

type Props = {
  title: string;
  onClick: () => void;
};

const Component = ({ title, onClick }: Props) => (
  <button onClick={onClick}>{title}</button>
);

export default Component;
