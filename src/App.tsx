import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => {
  const onClick = React.useCallback(() => alert('clicked'), []);
  return (
    <Provider store={store}>
      <div className="App">
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
          <Button onClick={onClick} title="alert" />
        </header>
      </div>
    </Provider>
  );
}

export default App;
