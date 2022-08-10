import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import {Route, Routes} from "react-router-dom"
import { Personajes } from './pages/personajes/Personajes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/personajes' element={<Personajes/>} />
      </Routes>
    
    </div>
  );
}

export default App;
