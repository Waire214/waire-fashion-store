import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePageComponent from './pages/hompage/HomePageComponent';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePageComponent/>} />
          <Route path="/hats" element={<HatsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
