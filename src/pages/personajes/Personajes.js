import React from 'react';
import './Personajes.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";




export const Tarjeta = ({
  nombre,
  cabello,
  ojos,
  piel,
  genero,
  altura,
  peso,
  cumpleaños,
  f1,
  keyName,
  num,
}) => {




  return (<>



  <div className="contenedor">
  
    <div className="d-flex flex-wrap"  style={{ justifyContent:'center'}}>
  
  <Card style={{ width: '25rem', margin:'1%', textAlign:"center"}}>
    <Card.Title>{nombre}</Card.Title>
    
      <Card.Img variant="top" src={f1}  />



      <Card.Body>
        <ListGroup>
      <ListGroup.Item className="lista">
    <strong>Altura:</strong>
        {altura} Cm
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Peso:</strong>
        {peso} Kg
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Cabello color:</strong>
        {cabello}
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Piel color:</strong>
        {  piel} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Ojos color:</strong>
        {ojos} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Cumpleaños:</strong>
        {cumpleaños} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Genero:</strong>
        {genero} 
    </ListGroup.Item>
     
    </ListGroup>
    <br></br>

    <Link to={`/detalles/${nombre}/${num}`} key={keyName}>
    <Button variant="primary" style={{
          width: "-webkit-fill-available",
          textAlign:"center"
    }}><p>Ver mas de {nombre}</p></Button>
    </Link>
      </Card.Body>
    </Card>
 

</div>

  </div>



<br></br>

  </>);
};
export default Tarjeta;
