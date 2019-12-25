import React from 'react';
import logo from '../logo.svg';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/sample/selectors';
import { fetchSample } from '../redux/sample/operations';

const Page: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const onClick = React.useCallback(() => alert('clicked'), []);
  const doDispatch = React.useCallback(() => dispatch(fetchSample()), [dispatch]);
  return (
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
        <div>{!data ? 'nodata' : data}</div>
        <Button onClick={doDispatch} title="dispatch" />
      </header>
    </div>
  );
}

export default Page;
