import './App.css';
import Navbar from './components/Navbar';
import itemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <itemListContainer 
      greeting='Bienvenido a mi tienda!' />
    </div>
  );
}

export default App;
