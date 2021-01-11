import React from "react";
import { css } from "@emotion/css";
import logo from "../logo.svg";

const style = css`
  flex: 1;
  text-align: center;
`;

const Page: React.FC = () => {
  return (
    <div className={style}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Page;
