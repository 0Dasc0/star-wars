import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import {Route, Routes} from "react-router-dom"
import { Personajes } from './pages/personajes/Personajes';
import { Planetas } from './pages/planetas/Planetas';
import  Detalles  from './components/detalles/Detalles';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/personajes' element={<Personajes/>} />
        <Route path='/planetas' element={<Planetas/>} />
        <Route path='/detalles/:id' element={<Detalles/>} />
      </Routes>
    
    </div>
  );
}

export default App;
