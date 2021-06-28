import React, {useEffect, useState} from 'react';

const EraserSelector = props => {
    useEffect(() => {
        props.eraser("transparent");
    }, [])
   return (  <div style={{display: "flex", height: "4rem", flexDirection: "row", justifyContent: "space-between"}}>
   <div className="border border-dark btn" style={{backgroundColor: "blue", color:"white", height: "2.5rem", width: "2.5rem", margin: "0.75rem"}} onClick={d => {props.backButton(true)}}>{"<-"}</div>
 </div>)
}
export default EraserSelector;