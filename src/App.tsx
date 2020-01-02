import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './pages/Main';
import configureStore from './redux/configureStore';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
