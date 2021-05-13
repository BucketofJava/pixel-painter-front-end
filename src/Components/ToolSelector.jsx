import React, { useState } from 'react';
import ColorSelector from './ColorSelector';

const ToolSelector=() => {
    const [tools, setTools]=useState({"P": <ColorSelector />,
 "E": <div></div>})
    const [toolWindow, setToolWindow]=useState(Object.keys(tools).map((v) => (<div className="btn btn-primary" style={{height: "2.5rem", width: "2.5rem", margin: "0.75rem"}} onClick={() => {setToolWindow(tools[v])}}>{v}</div>)));
    return ( <main><div className="card shadow-sm fixed-bottom" style={{zIndex: "5"}}>
    <div style={{display: "flex", height: "4rem", flexDirection: "row", justifyContent: "center"}}>
    <div>{toolWindow}</div>
        </div>
        </div>
        </main>);
}
export default ToolSelector;