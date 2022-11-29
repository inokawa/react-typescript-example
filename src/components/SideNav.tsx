import { css } from "@emotion/css";

export type SideNavProps = {
  items: { title: string; onClick: () => void }[];
};

const style = css`
  width: 200px;
`;

export const SideNav = (props: SideNavProps) => (
  <div className={style}>
    {props.items.map((item) => (
      <div key={item.title} onClick={item.onClick}>
        <a>{item.title}</a>
      </div>
    ))}
  </div>
);
