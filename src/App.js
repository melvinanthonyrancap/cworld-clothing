import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop.jsx';
import Header from './components/header/header.jsx';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
          </Switch>
      </div>
    );
  }
}

export default App;