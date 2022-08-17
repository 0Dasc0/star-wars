import { useEffect } from "react";
import { usePlanet } from "../../Hooks/userPlanet";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import f1 from '../../assets/images/star_2.jpg'
import fondo from '../../assets/images/fondo.png'
import { ListGroup } from "react-bootstrap";

import Navbarc from "../../components/navbar/index"


export const Planetas = () => {
  const { getAllPlanet, dataPlanet } = usePlanet();

  useEffect(() => {
    getAllPlanet();
    console.log(dataPlanet);
  }, []);
  return (<>
   <Navbarc/>
   <div  style={{ backgroundImage: {fondo}}}>
 
  <h1>Planetas</h1>
  <div className="contenedor">
    <div className="d-flex flex-wrap"  style={{ justifyContent:'center'}}>
  {dataPlanet.map((chars) => (
  <Card style={{ width: '25rem', margin:'1%'}}>
    <Card.Title>{chars.name}</Card.Title>
    
      <Card.Img variant="top" src={f1}  />



      <Card.Body>
        <ListGroup>
      <ListGroup.Item className="lista">
    <strong>Periodo de rotacion:</strong>
        {chars.rotation_period} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Periodo orbital:</strong>
        {chars.orbital_period} Kg
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Diametro:</strong>
        {chars.diameter}
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Clima:</strong>
        {chars.climate} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Gravedad:</strong>
        {chars.gravity} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Tipo de terreno:</strong>
        {chars.terrain} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Superficie acuatica:</strong>
        {chars.surface_water} Cm
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Poblacion:</strong>
        {chars.population} 
    </ListGroup.Item>
     
    </ListGroup>
      </Card.Body>
    </Card>
    
 ) )}

</div>
  </div>
  </div>
  </>);
};
