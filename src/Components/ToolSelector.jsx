import React, { useEffect, useMemo, useState } from 'react';
import ColorSelector from './ColorSelector';

const ToolSelector=props => {
    const [goBack, setGoBack]=useState(true);
    const [tools, setTools]=useState({"P": <ColorSelector colorFunc={props.colorFunc} backButton={setGoBack} />,
 "E": <div></div>})
    const toolMain=useMemo(() => {},
    [tools])
    console.log(toolMain)
    const [toolWindow, setToolWindow]=useState(<div></div>);
    useEffect(() => {
        if(goBack){
        setToolWindow(Object.keys(tools).map((v, i) => 
        (<div key={i} className="btn btn-primary" 
        style={{height: "2.5rem", width: "2.5rem", margin: "0.75rem"}} 
        onClick={() => {setToolWindow(tools[v])}}>{v}</div>)))
        setGoBack(false);}
    }, [goBack, tools])
    return ( <main><div className="card shadow-sm fixed-bottom" style={{zIndex: "5"}}>
    <div style={{display: "flex", height: "4rem", flexDirection: "row", justifyContent: "center"}}>
    <div>{toolWindow}</div>
        </div>
        </div> 
        </main>);
}
export default ToolSelector;