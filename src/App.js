import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePageComponent from './pages/home/HomePage';
import ShopPageComponent from './pages/shop/ShopPage';
import HeaderComponent from './components/header/HeaderComponent';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

import { auth, createUserProfileDocument } from './firebase/FirebaseUtil'

import './App.css'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null 
    }
  }

  unsubscribeFromAuth = null

  //one of thing for subscription in firebase. It won't remount...we want to 
  // when firebase realise somebody has logged in
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)
      // this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <HeaderComponent currentUser={this.state.currentUser} />

          <Routes>
            <Route path="/" element={<HomePageComponent/>} />
            <Route path="/shop" element={<ShopPageComponent />} />
            <Route path="/signin" element={<SignInAndSignUpPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
