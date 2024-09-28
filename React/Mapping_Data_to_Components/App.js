import React from "react";
import Hello from './Hello';
import info from "./info";

function createHello(info){
    return(
        <div><Hello name={info.name} number={info.number} /></div>
    )
}

function App() {
    return <div>
        {info.map(createHello)}
    </div>;
}
export default App;