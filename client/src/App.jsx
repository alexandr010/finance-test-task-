import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from './store/tickersSlice';
import { socket } from './api/api';

import TickersTable from './Components/TickersTable/TickersTable';
import Navigation from './Components/Navigation/Navigation';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('ticker', (tickers) => {
      dispatch(setData(tickers));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <TickersTable />
    </div>
  );
}

export default App;
