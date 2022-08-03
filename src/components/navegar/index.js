import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './navegar.css'


function Cards({img,buttom}) {
  return (
    <div class="contenedor">
    <Card style={{ width: '82rem' }}>
      <Button variant="light" ><Card.Img variant="top" src={img} style={{width:'80rem', height:'8rem'}} /></Button>
 
    </Card>  
  
    </div>  
    
  );
}

export default Cards;