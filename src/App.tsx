import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";

import "./style.css";
import Routes from "./routes/Routes";
import { wrapper } from "./App.css";

const Wrapper = (props: { children: React.ReactNode }) => {
  return <div className={wrapper}>{props.children}</div>;
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
