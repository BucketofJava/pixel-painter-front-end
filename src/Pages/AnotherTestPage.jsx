import React from 'react';
const AnotherTestPage=props => {
    console.log(props.resources)
    return (<main><h1>{props.resources.test}</h1><h2>{props.resources.hi}</h2></main>);
}
export default AnotherTestPage;