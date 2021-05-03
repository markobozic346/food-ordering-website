import React from 'react';
import './App.scss';
import FoodMenu from './components/userPanel/homePage/FoodMenu/FoodMenu';
import Header from './components/userPanel/homePage/Header/Header';
import NavBar from './components/userPanel/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <FoodMenu />
    </div>
  );
}

export default App;
