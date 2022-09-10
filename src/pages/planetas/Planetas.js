import React from 'react';
import './Planetas.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

import { ListGroup } from "react-bootstrap";




export const TarjetaP = ({
  nombre,
  clima,
  terreno,
  creado,
  rotacionp,
  f3, 
  diametro,
  aguasup,
  gravedad,
  keyName,
  num, 
}) => {




  return (<>



  <div className="contenedor">
  
    <div className="d-flex flex-wrap"  style={{ justifyContent:'center'}}>
  
  <Card style={{ width: '25rem', margin:'1%'}}>
    <Card.Title>{nombre}</Card.Title>
    
      <Card.Img variant="top" src={f3}  />



      <Card.Body>
       
  <ListGroup>

    <ListGroup.Item className="lista">
    <strong>Tipo clima:</strong>
        {clima}
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Creacion:</strong>
        {creado}
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Terreno:</strong>
        {terreno} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Periodo rotacion:</strong>
        {rotacionp} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Diametro:</strong>
        {diametro} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Superficie acuatica:</strong>
        {aguasup} 
    </ListGroup.Item>

    <ListGroup.Item className="lista">
    <strong>Gravedad:</strong>
        {gravedad} 
    </ListGroup.Item>

    </ListGroup>

    <Link to={`/detallesp/${nombre}/${num}`} key={keyName}>
    <Button variant="primary"><p>Ver mas</p>{nombre}</Button>
    </Link>
      </Card.Body>
    </Card>
 

</div>

  </div>



<br></br>

  </>);
};
export default TarjetaP;

