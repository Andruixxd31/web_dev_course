import React from 'react';

const Scroll = (props) => {
  return ( 
    //css to have something scrollable
    <div style={{overflowY: "scroll", border:"2px solid black", height:"700px"}}>  
      {props.children} 
    </div> //every props object has children. With this everthing between the scroll compomente will be rendered
  );
}
  
export default Scroll;