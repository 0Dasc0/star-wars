import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import { UsePlanet } from '../../Hooks/UsePlanet'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import f2 from '../../assets/images/personaje.png';
import './detalles.css';


const Detalles = () => {
  const { getAllPlanet , dataPlanet } = UsePlanet();


  const params = useParams();
  const listParams = [params];
  const mapeo = listParams.map((list) => list.nombres);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {
    getAllPlanet(numero);
  }, []);

  const filtro = dataPlanet.filter((filtrar) => filtrar.name === nombre);

  // const mapeo3 = filtro.map((per) => per.homeworld);
  // var homeworld = mapeo3 [0];
  // useEffect(() => {
  //   get
  // })

  return (
    <>

    
      <Button variant="primary" href="/planetas">Volver</Button>
      <div className='todo'>
      <div className='to'>
      
      
      <div className='Card'>
        <Card style={{
          width:"18rem",
          border:"solid 3px #FFFF00",
          background:"black",
          borderRadius:"33px",
        }}
        className="m2 text-center">
          
          <Card.Body className="Body-c">
          <Card.Img src={f2} style={{
         width:"250px"
        }}></Card.Img>
    
          <h2 className="title">{nombre}</h2>
          </Card.Body>
        


        </Card>
        </div>
        <div style={{
          width:"80%",
        }}> 
        <Card style={{
          width:"100%",
          border:"solid 3px #FFFF00",
          background:"black",
          borderRadius:"33px",
          padding:"1%",
        }}
        className="m2 text-center">

        {filtro.map((planets) => (
              <div key={planets.name}>
              <h3 className="title">DETALLES DEL PLANETA </h3>
              <div className='subcolumns' >
                <div >
              <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Clima: </b> <b className="title"> {planets.climate}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Terreno: </b> <b className="title">{planets.terrain}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Creado: </b> <b className="title">{planets.created}</b></ListGroup.Item><br></br>
                      <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Periodo de rotacion: </b> <b className="title">{planets.rotation_period}</b></ListGroup.Item><br></br>
            </div>
            <div>
  
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Diametro: </b> <b className="title"> {planets.diameter}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Superficie acuatica: </b> <b className="title">{planets.surface_water}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Gravedad: </b> <b className="title">{planets.gravity}</b></ListGroup.Item><br></br>
            </div>
            </div>
            </div>        
))}
</Card>

</div>
      </div>
    
    
     

     
      </div>
      <div style={{
        display:"flex",
        justifyContent:"space-evenly"

      }}>
      <Card style={{
          width:"18rem",
          border:"solid 3px #FFFF00",
          background:"black",
          borderRadius:"33px",
          paddingLeft:"2%",
          paddingRight:"2%"
        }}
        className="m2 text-center">

         {filtro.map((persona) => ( 
          <div key={persona.name}>
          <div>
            <h4 className="title2" >Peliculas:</h4>
            <h5 className="title">{persona.films}</h5>
          </div>
          </div>
         ))}

</Card> 

<Card style={{
          width:"40rem",
          border:"solid 3px #FFFF00",
          background:"black",
          borderRadius:"33px",
          paddingLeft:"2%",
          paddingRight:"2%"
        }}
        className="m2 text-center">

         {filtro.map((persona) => ( 
          <div key={persona.name}>
          <div>
            <h4 className="title2" >Residentes:</h4>
            <h5 className="title">{persona.residents}</h5>
          </div>
          </div>
         ))}

</Card>


</div> 
    </>
   
  )
}

export default Detalles