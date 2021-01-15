import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop.jsx';

const Hats = () => {
  return (
      <div>
          <h1>Hats Page</h1>
      </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
        </Switch>
        
      </div>
    );
  }
}

export default App;