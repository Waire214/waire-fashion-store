import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePageComponent from './pages/home/HomePage';
import ShopPageComponent from './pages/shop/ShopPage';
import HeaderComponent from './components/header/HeaderComponent';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent />

        <Routes>
          <Route path="/" element={<HomePageComponent/>} />
          <Route path="/shop" element={<ShopPageComponent />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
