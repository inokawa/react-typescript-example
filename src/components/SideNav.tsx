import { wrapperStyle } from "./SideNav.css";

export type SideNavProps = {
  items: { title: string; onClick: () => void }[];
};

export const SideNav = (props: SideNavProps) => (
  <div className={wrapperStyle}>
    {props.items.map((item) => (
      <div key={item.title} onClick={item.onClick}>
        <a>{item.title}</a>
      </div>
    ))}
  </div>
);
