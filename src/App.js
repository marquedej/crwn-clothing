import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        {/*
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/jackets' component={HatsPage} />
        <Route exact path='/shop/sneakers' component={HatsPage} />
        <Route exact path='/shop/womens' component={HatsPage} />
        <Route exact path='/shop/mens' component={HatsPage} />
        */}
      </Switch>
    </div> )
}

export default App;
