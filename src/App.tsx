import { BrowserRouter as Router } from "react-router";
import { css } from "@emotion/css";

import "./App.css";
import Routes from "./routes/Routes";

const style = css`
  display: flex;
`;

const Wrapper = (props: { children: React.ReactNode }) => {
  return <div className={style}>{props.children}</div>;
};

const App = () => {
  return (
    <Wrapper>
      <Router
        basename={
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (typeof process === "undefined" ? "" : (process.env as any)).BASENAME
        }
      >
        <Routes />
      </Router>
    </Wrapper>
  );
};

export default App;
