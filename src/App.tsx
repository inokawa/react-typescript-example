import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
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
    <RecoilRoot>
      <Wrapper>
        <Router basename={(process.env as any).BASENAME}>
          <Routes />
        </Router>
      </Wrapper>
    </RecoilRoot>
  );
};

export default App;
