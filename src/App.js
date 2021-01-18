import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Shop from './pages/shop/Shop.jsx';
import Header from './components/header/header.jsx';
import SignUp from './pages/sign-in-and-sign-up/signinsignup';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser}/>
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