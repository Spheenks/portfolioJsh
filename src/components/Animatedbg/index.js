import React from "react";
import './../../assets/css/animatedbg.scss';

const Animatedbg = ({ images }) => {
   

    return (
        <div classNameName="bubbles">
    {
        images.map((data) =>{
            return(
                <div className="bubble"><img alt={data.name} src={data.img} style={{height: 100, width:100 , opacity:.5}}/></div>
            )
        })
    
    
    }
    </div>
    //     <div classNameName="bubbles">
       
    //     <div className="bubble"></div>
    //      <div className="bubble"></div>
    //      <div className="bubble"></div>
    //      <div className="bubble"></div>
    //      <div className="bubble"></div> 
  
    
        
    // </div>
    )

}

export default Animatedbg;