import { useEffect } from "react";
import { usePerson } from "../../Hooks/userPerson";
import './Personajes.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import f1 from '../../assets/images/star_1.jpg';
import next from '../../assets/images/next.png';
import back from '../../assets/images/previous.png';
import { ListGroup } from "react-bootstrap";

import Navbarc from "../../components/navbar/index"


export const Personajes = () => {
  const { getAllPerson, dataPeople, Contador, reducir, aumentar } = usePerson();

  useEffect(() => {
    getAllPerson(Contador);
    console.log(dataPeople);
  }, [dataPeople]);
  return (<>
   <Navbarc/>
 
  <h1>Personajes</h1>
  <div className="contenedor">
    <div className="d-flex flex-wrap"  style={{ justifyContent:'center'}}>
  {dataPeople.map((chars) => (
  <Card style={{ width: '25rem', margin:'1%'}}>
    <Card.Title>{chars.name}</Card.Title>
    
      <Card.Img variant="top" src={f1}  />



      <Card.Body>
        <ListGroup>
      <ListGroup.Item className="lista">
    <strong>Altura:</strong>
        {chars.height} Cm
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Peso:</strong>
        {chars.mass} Kg
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Cabello color:</strong>
        {chars.hair_color}
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Piel color:</strong>
        {chars.skin_color} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Ojos color:</strong>
        {chars.eye_color} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Cumpleaños:</strong>
        {chars.birth_year} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Altura:</strong>
        {chars.height} Cm
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Genero:</strong>
        {chars.gender} 
    </ListGroup.Item>
     
    </ListGroup>
      </Card.Body>
    </Card>
    
 ) )}

</div>

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

<br></br>

  </>);
};
