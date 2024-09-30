import React, { Component } from "react";
class Component1 extends Component {
  constructor() {
    super(); // to inherit the data from parent component
    this.state = {
      name: "Panchal",
    };
  }

  changeName() {
    this.setState({
      name: "Aryan",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}>Click</button>
      </div>
    );
  }
}
export default Component1;
