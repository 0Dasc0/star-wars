import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import {Route, Routes} from "react-router-dom"
import  Personajes  from './pages/personajes/index';
import  Planetas  from './pages/planetas/index';
import  Detalles  from './components/detalles/Detalles';
import  DetallesP  from './components/detalles/DetallesP';
import Navbarc from './components/navbar/index'
import Footer from './components/footer/index'

function App() {
  return (
    
    <div className="App">

      <Navbarc/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/personajes' element={<Personajes/>} />
        <Route path='/planetas' element={<Planetas/>} />
        <Route path='/detalles/:nombres/:num' element={<Detalles/>} />
        <Route path='/detallesp/:nombres/:num' element={<DetallesP/>} />
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
