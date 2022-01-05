import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePageComponent from './pages/hompage/HomePageComponent';
import ShopPageComponent from './pages/shop/ShopPageComponent';

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageComponent/>} />
          <Route path="/shop" element={<ShopPageComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
