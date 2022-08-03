import React from "react";
import Navbarc from "../../components/navbar/index"
import Slider from "../../components/slider/index"
import Cards from "../../components/navegar/index"
import Footer from '../../components/footer/index'

import f1 from '../../assets/images/1.png'
import f2 from '../../assets/images/2.png'

const Home = ({Home}) => {
    return (
<>
    
    <Navbarc/>

    <Slider/>

    <div className='cards' style={{display:'flex'}}>
    <Cards 
  img={f1} 
  
  buttom='Ver mas' 
   />

   <Cards 
  img={f2} 
 
  buttom='Ver mas' 
   />
   </div>

   <Footer/>

    </>
    )
    
}
export default Home;