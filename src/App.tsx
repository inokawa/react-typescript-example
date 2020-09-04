import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { configureStore } from "./redux";
import { Routes } from "./Routes";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
