import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import { UsePerson } from '../../Hooks/UsePerson'
import { UsePlanet } from '../../Hooks/UsePlanet'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from "react-bootstrap";
import f2 from '../../assets/images/personaje.png';
import './detalles.css';


const Detalles = () => {
  const { getAllPerson , dataPeople , getDatallePersonaje, DataDetalle, getDataPeli, DataPeli } = UsePerson();
  const { } = UsePlanet();


  const params = useParams();
  const listParams = [params];
  const mapeo = listParams.map((list) => list.nombres);
  const mapeo2 = listParams.map((list) => list.num);

  var nombre = mapeo[0];
  var numero = mapeo2[0];

  useEffect(() => {
    getAllPerson(numero);
  }, []);

  const filtro = dataPeople.filter((filtrar) => filtrar.name === nombre);

  const maping3 = filtro.map((persona) => persona.homeworld);
  var homeWorld = maping3[0];
  // console.log(homeWorld);
  getDatallePersonaje(homeWorld);
    // console.log(DataDetalle.name);

  return (
    <>

    
      <Button variant="primary" href="/personajes">Volver</Button>
      
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

        {filtro.map((persona) => (
              <div key={persona.name}>
              <h3 className="title">DETALLES DEL PERSONAJE </h3>
              <div className='subcolumns' >
                <div >
              <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Nacimiento: </b> <b className="title"> {persona.birth_year}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Editado: </b> <b className="title"> {persona.edited}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Creado: </b> <b className="title"> {persona.created}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Color Ojos: </b> <b className="title"> {persona.eye_color}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Genero: </b> <b className="title"> {persona.gender}</b></ListGroup.Item><br></br>
            </div>
            <div>
            
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Color Cabello: </b> <b className="title"> {persona.hair_color}</b></ListGroup.Item><br></br>
              <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Estatura: </b> <b className="title"> {persona.height}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Peso: </b> <b className="title"> {persona.mass}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Color Piel: </b> <b className="title"> {persona.skin_color}</b></ListGroup.Item><br></br>
            <ListGroup.Item className="tabla" style={{
            background: "black",}}><b className="title2" >Planeta de origen: </b> <b className="title"> {DataDetalle.name}</b></ListGroup.Item><br></br>
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
          width:"18rem",
          border:"solid 3px #FFFF00",
          background:"black",
          borderRadius:"33px",
        }}
        className="m2 text-center">

         {filtro.map((persona) => ( 
          <div key={persona.name}>
          <div>
            <h4 className="title2" >Vehiculos:</h4>
            <h5 className="title">{persona.vehicles}</h5>
          </div>
          </div>
         ))}

</Card>

<Card style={{
          width:"18rem",
          border:"solid 3px #FFFF00",
          background:"black",
          borderRadius:"33px",
        }}
        className="m2 text-center">

         {filtro.map((persona) => ( 
          <div key={persona.name}>
          <div>
            <h4 className="title2" >Naves:</h4>
            <h5 className="title">{persona.starships}</h5>
          </div>
          </div>
         ))}

</Card>
</div> 


    </>
   
  )
}

export default Detalles