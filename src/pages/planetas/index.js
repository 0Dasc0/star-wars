import { useEffect } from "react";
import { UsePlanet } from "../../Hooks/UsePlanet";
import {TarjetaP} from "./Planetas";
import f3 from '../../assets/images/planet.jpg';
import next from '../../assets/images/next.png';
import back from '../../assets/images/previous.png';


const CardApp = () =>{
  const { getAllPlanet, dataPlanet, Contador, aumentar, reducir } = UsePlanet();
  useEffect(()=> {
    getAllPlanet(Contador);

    console.log(getAllPlanet);
  }, [dataPlanet]);
  return(
    
    <div>

      
      <h1 style={{textAlign:"center", textShadow:"0 0 4px #FFE919", fontWeight:"bolder", fontSize:"xxx-large"}}>Listado de Personajes</h1>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
      {dataPlanet.map((planets) =>(
          <TarjetaP
          nombre={planets.name}
          clima={planets.climate}
          terreno={planets.terrain}
          creado={planets.created}
          f3={f3}
          keyName={planets.name}
          num={Contador}
          />
      ))}
      </div>
      <div className="container text-center" >
    <div>
    <a onClick={reducir}>
    <img src={back} className="img"/>
  </a>
  <strong> Pagina {Contador} </strong>
  <a onClick={aumentar}>
    <img src={next} className="img" />
  </a>
    </div>
    
</div>
    </div>
  );
};

export default CardApp;