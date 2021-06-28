import React, { useEffect, useState } from 'react';
const ColorSelector = props => {
    const [colorArr, setColorArr]=useState(["red", "blue", "green", "brown", "black", "yellow"])
    const [divColorArr, setDivColorArr]=useState([])
    useEffect(() => {
    setDivColorArr(colorArr.map((c, i) => {
        return(<div className={(() => {
            const classNameOriginal="border btn rounded-0"
            if(c==="black") return classNameOriginal+" border-warning"
            return classNameOriginal+" border-dark"
        })()} style={{backgroundColor: c, height: "2.5rem", width: "2.5rem", margin: "0.75rem"}} onClick={d => {props.colorFunc(d.target.style.backgroundColor)}} key={i}></div>);
    }))
    }, [colorArr, props])
    return (

        <div style={{display: "flex", height: "4rem", flexDirection: "row", justifyContent: "space-between"}}>
            <div className="border border-dark btn" style={{backgroundColor: "blue", color:"white", height: "2.5rem", width: "2.5rem", margin: "0.75rem"}} onClick={d => {props.backButton(true)}}>{"<-"}</div>
            {divColorArr}
          </div>
            
    );
}
export default ColorSelector;