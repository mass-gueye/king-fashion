import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {



  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      if (user) {
        const users = user.toJSON();
        console.log('====================================');
        console.log(`User Signed  in by the name of ${users.displayName}`);
        console.log(users);
        console.log('====================================');
      } else {
        console.log('====================================');
        console.log('No user Sign in');
        console.log('====================================');
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {

    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SingInAndSignUpPage} />
        </Switch>
      </div>
    )
  }

}

export default App;
