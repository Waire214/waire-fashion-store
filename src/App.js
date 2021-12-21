import HomePageComponent from './pages/hompage/HomePageComponent';
import { Routes, Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePageComponent />} />
        <Route path='/hats' element={ <HatsPage /> } />
        <HomePageComponent />
      </Routes>
    </div>
  );
}

export default App;
