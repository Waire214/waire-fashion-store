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
// close subscription to avoid memory leaks
  unsubscribeFromAuth = null

  //one of thing for subscription in firebase. It won't remount...we want to 
  // to know when firebase realise somebody has logged in/out
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth is not null i.e not signed out
      if (userAuth) {
        // saving the state of the app
        const userRef = await createUserProfileDocument(userAuth)

        // check if the snapshot has changed
        // we will check the state of the user, check the first state
        // => snapshot
        userRef.onSnapshot(snapShot => {
          this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
          }, () => console.log(this.state.currentUser))
        })
      }else{
        // this.setState({ currentUser: user });
        console.log(userAuth);
        this.setState({currentUser: userAuth});
      }
    })
  }
// log user out
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
