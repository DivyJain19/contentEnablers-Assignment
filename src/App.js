import React from 'react';
import classes from './App.module.css';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
function App() {
  return (
    <div className={classes.main}>
      <Header />
      <NavigationMenu />
    </div>
  );
}

export default App;
