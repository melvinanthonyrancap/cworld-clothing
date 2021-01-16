import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop.jsx';
import Header from './components/header/header.jsx';
import SignUp from './pages/sign-in-and-sign-up/signinsignup';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={Shop} />
            <Route path='/signin' component={SignUp} />
          </Switch>
      </div>
    );
  }
}

export default App;