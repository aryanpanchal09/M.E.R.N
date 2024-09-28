import React from "react";
import Hello from './Hello';
import info from "./info";
import emoji from "./emoji";

function createHello(emoji){
    return(
        <div>
            <Hello name={emoji.name} desc={emoji.desc}/>
        </div>
    )
}

function App() {
    return <div>
        {emoji.map(createHello)}
    </div>;
}
export default App;