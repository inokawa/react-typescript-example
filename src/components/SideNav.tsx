import React from "react";

type Props = {
  items: { title: string; onClick: () => void }[];
};

const style = {
  width: "200px",
};

const Component = (props: Props) => (
  <div style={style}>
    {props.items.map((item) => (
      <div key={item.title} onClick={item.onClick}>
        <a>{item.title}</a>
      </div>
    ))}
  </div>
);

export default Component;
