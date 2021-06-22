import React from 'react';
import { useResources } from '../bucketrouter/routing';
const TestPage=props => {
    return (<h1>{props.resources.id}</h1>)
}
export default TestPage;
