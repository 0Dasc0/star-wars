import React from "react";
import './footer.css';
import icoface from "./face.png";
import icoinsta from "./insta.png";
import icowsp from "./wsp.png";




const Footer = ({Footer}) => {
    return (
       
        <footer className="footer">
            
            <div className="contenedorf">
                
                <h6>Proyecto React Ejecicion III: Guespud</h6>
                <h7>Desarrollado por: David Alejandro Santa Ceballos</h7>
           
        <br></br>
         
                <a href="" className="social"><img src={icoface} width="30px" class="imagenfoo" /></a>
                <a href="" className="social"><img src={icoinsta} width="30px" class="imagenfoo" /></a>
                <a href="" className="social"><img src={icowsp} width="30px" class="imagenfoo" /></a>
        
                </div>
             
        </footer>
    )
  }
  
  export default Footer
  