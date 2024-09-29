import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
function App() {
    const name = "Aryan";
    const age = "23"
    return(
        <div>
            {age>=18 ? <h1>You are eligible</h1>: <h1>You are not eligible</h1>}
            {name == "Rohan" && <h1>Hi Rohan</h1>}
        </div>
    )
}
export default App