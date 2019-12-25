import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';
import './App.css';
import Main from './pages/Main';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
