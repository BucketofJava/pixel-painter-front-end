import React, { useEffect, useState } from 'react';
import getLoc from '../Util/routing.jsx'
import { useRoute } from '../bucketrouter/routing';
import ToolSelector from './ToolSelector';


function useWindowSize() {

    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
const PixelPaintGrid= props => {
  const routeObject=useRoute(window.location.href);

const windowSize=useWindowSize();
const originalWindowSize=window.innerWidth;
const [grid, setGrid]=useState([]);
const [mainDivStyle, setMainDivStyle]=useState({});
const [smallDivStyle, setSmallDivStyle]=useState({});
const [maxSizey, setMaxSize]=useState(props.maxSize);
const [squareColor, setSquareColor]=useState("red");
const [mouseDown, setMouseDown]=useState(false);

useEffect(() => {
    getLoc()
    setMaxSize(maxSizey*windowSize.width/originalWindowSize)
    const pixelSize=(maxSizey/props.gridSizeX);
    const scaleFactor=1/Math.max((props.gridSizeY*pixelSize)/maxSizey, 1)
    //const scaleFactor=1
    const pixelSizeY=(maxSizey/props.gridSizeY)-2;
    setMainDivStyle({
        display: "flex",
        width: `${(maxSizey*scaleFactor)/16}rem`,
        // height: `${maxSizey}px`,
        flexDirection: "row", 
        flexWrap: "wrap",
        justifyContent:"flex-start",
        alignItems: "flex-start",
        marginBottom: "5rem"
    })
    setSmallDivStyle({
        width: `${((pixelSize*scaleFactor))/16}rem`,
        height: `${(pixelSize*scaleFactor)/16}rem`,
        backgroundColor: null
    })

}, [props, windowSize, originalWindowSize, maxSizey])
useEffect(() => {




const psx=parseInt(props.gridSizeX);
const psy=parseInt(props.gridSizeY);
//new Array(parseInt(psx)*parseInt(psy)



const ab=Array.from({length: psx*psy}, (m, i) => (<div className="border border-dark" style={smallDivStyle} onMouseDown={(d) => {
    d.target.style.backgroundColor=squareColor
    setMouseDown(true) }} 
onMouseOver={(d) => {console.log(mouseDown); if(mouseDown) d.target.style.backgroundColor=squareColor}} key={i}></div>))

setGrid(ab);

}, [props, smallDivStyle, windowSize, squareColor, mouseDown])


    return (
<main onMouseUp={() => {setMouseDown(false)}}>
<h1>Pixel Painter</h1>
<h2>{routeObject.getParams().a}</h2>
<div style={{
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-start"
}}>
<div style={mainDivStyle}>
{grid}
</div>
</div>
<ToolSelector />
</main>
    );
}
export default PixelPaintGrid;