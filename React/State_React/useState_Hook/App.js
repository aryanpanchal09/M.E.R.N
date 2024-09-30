import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./Component1"; // Adjust the path if necessary

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to the App!</h2>
        <Component1 />
      </div>
    );
  }
}

export default App;
