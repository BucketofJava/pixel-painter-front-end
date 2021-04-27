import React, { useEffect, useState } from 'react';
const ColorSelector = props => {
    const [colorArr, setColorArr]=useState(["red", "blue", "green", "brown", "black", "yellow"])
    const [divColorArr, setDivColorArr]=useState([])
    useEffect(() => {
    setDivColorArr(colorArr.map((c, i) => {
        return(<div className={(() => {
            const classNameOriginal="border"
            if(c=="black") return classNameOriginal+" border-warning"
            return classNameOriginal+" border-dark"
        })()} style={{backgroundColor: c, height: "2.5rem", width: "2.5rem", margin: "0.75rem"}} onClick={d => {props.colorFunc(d.target.style.backgroundColor)}} key={i}></div>);
    }))
    }, [colorArr])
    return (
        <main><div className="card shadow-sm fixed-bottom" style={{zIndex: "5"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
            {divColorArr}
            </div>
            </div></main>
    );
}
export default ColorSelector;