import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Mangas from './pages/Mangas';
import Figuras from './pages/Figuras';
import Merchandising from './pages/Merchandising';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ItemListContainer 
        greeting='Bienvenido a mi tienda!' />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/mangas' element={<Mangas/>} />
          <Route path='/figuras' element={<Figuras/>} />
          <Route path='/merchandising' element={<Merchandising/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
