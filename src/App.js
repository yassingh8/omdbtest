import React from 'react';
import MovieList from './components/MovieList';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { MdHome } from "react-icons/md";

function App() {
  return (
    <Provider store={store}>
      <MovieList/>
    </Provider>
  );
}

export default App;
