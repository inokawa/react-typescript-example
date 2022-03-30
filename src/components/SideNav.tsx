import { css } from "linaria";

type Props = {
  items: { title: string; onClick: () => void }[];
};

const style = css`
  width: 200px;
`;

const Component = (props: Props) => (
  <div className={style}>
    {props.items.map((item) => (
      <div key={item.title} onClick={item.onClick}>
        <a>{item.title}</a>
      </div>
    ))}
  </div>
);

export default Component;
