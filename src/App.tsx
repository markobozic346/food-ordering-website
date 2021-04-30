import React from 'react';
import './App.scss';
import Header from './components/userPanel/homePage/Header/Header';
import NavBar from './components/userPanel/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
