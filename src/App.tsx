import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import { css } from "linaria";

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
        <Router>
          <Routes />
        </Router>
      </Wrapper>
    </RecoilRoot>
  );
};

export default App;
