import React, {Component,} from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import routes from './route'
import Header from './components/Header/Header'

function App() {
  return (
    <HashRouter>

      <div className="App">
        <h1>Header</h1>
        {routes}
        <Header/>
      </div>

    </HashRouter>
  );
}

export default App;
