import React,{useContext} from 'react';
import { NameContext } from './App';
function CompC() {
    const myName = useContext(NameContext)
    return (
        <div>
            <h1>I AM COMPONENT C</h1>
            <h1>{myName}</h1>
        </div>
    );
}
export default CompC;

// import React from 'react';
// function CompC() {
//     return (
//         <div>
//             <h1>I AM COMPONENT C</h1>
//         </div>
//     );
// }
// export default CompC;