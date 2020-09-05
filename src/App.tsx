import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { configureStore } from "./redux";
import { Routes } from "./routes/Routes";

const store = configureStore();

const style = {
  display: "flex",
};

const Wrapper = (props: { children: React.ReactNode }) => {
  return <div style={style}>{props.children}</div>;
};

const App: React.FC = () => {
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
