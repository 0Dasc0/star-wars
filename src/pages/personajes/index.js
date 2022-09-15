import { useEffect } from "react";
import { UsePerson } from "../../Hooks/UsePerson";
import {Tarjeta} from "./Personajes";
import f1 from '../../assets/images/star_1.jpg';
import next from '../../assets/images/next.png';
import back from '../../assets/images/previous.png';
import './Personajes.css';


const CardApp = () =>{
  const { getAllPerson, dataPeople, Contador, aumentar, reducir } = UsePerson();
  useEffect(()=> {
    getAllPerson(Contador);

    console.log(getAllPerson);
  }, [dataPeople]);
  return(
    
    <div>
      
      
      <h1 style={{
        textAlign:"center", textShadow:"0 0 4px #FFE919", fontWeight:"bolder", fontSize:"xxx-large"
        }}
        >Listado de Personajes</h1>
      <div className="d-flex justify-content-center flex-wrap container-fluid">
      {dataPeople.map((person) =>(
          <Tarjeta
          key={person.name}
          nombre={person.name}
          cabello={person.hair_color}
          ojos={person.eye_color}
          piel={person.skin_color}
          genero={person.gender}
          altura={person.height}
          peso={person.mass}
          cumpleaños={person.birth_year}
          estiloBoton={person.eye_color}
          f1={f1}
          keyName={person.name}
          nombres={person.name}
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