import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import  {usePerson } from '../../Hooks/userPerson'
import Button from 'react-bootstrap/Button';


const Detalles = () => {
  const { getOnePerson , dataPeople } = usePerson();

  const params = useParams()
  useEffect(()=> {
    getOnePerson (params.id)
  },[dataPeople])

//   const filtrado = dataPeople.filter(name=> name.name === params.id)
 
// console.log(filtrado);


  
  return (
    <>

    
    
    Hola {params.id} <br></br>
     <Button variant="primary" href="/personajes">Volver</Button>

     
    
    </>
   
  )
}

export default Detalles