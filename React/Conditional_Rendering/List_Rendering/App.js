import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
function App() {
    const names=['Anil','Rohan','Aryan']
    const number=[1,2,7,9]
    return(
        <div>
            {names.map(nam => <h1>{nam}</h1>)}
            {number.map(num => <h1>{num}</h1>)}
            {number.map(num => <h1>{num=num*2}</h1>)}
        </div>
    )
}
export default App