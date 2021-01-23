import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { css } from "@emotion/css";

import "./App.css";
import { configureStore } from "./redux";
import { Routes } from "./routes/Routes";

const store = configureStore();

const style = css`
  display: flex;
`;

const Wrapper = (props: { children: React.ReactNode }) => {
  return <div className={style}>{props.children}</div>;
};

const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Router>
          <Routes />
        </Router>
      </Wrapper>
    </Provider>
  );
};

export default App;
