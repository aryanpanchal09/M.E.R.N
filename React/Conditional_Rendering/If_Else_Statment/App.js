import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
function App() {
    const name = "Aryan";
    
    if (name === "Aryan") {
        return <Component1 />;
    } else {
        return <Component2 />;
    }
}
export default App