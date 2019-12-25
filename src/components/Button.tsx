import React from 'react';

const component: React.FC<{
  title: string;
  onClick: () => void;
}> = ({ title, onClick }) => <button onClick={onClick}>{title}</button>;

export default component;
