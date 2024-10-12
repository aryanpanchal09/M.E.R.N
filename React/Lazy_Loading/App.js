import React, { Component, Suspense, lazy } from "react"; 

const Comp1 = lazy(() => import("./Comp1")); 
const Comp2 = lazy(() => import("./Comp2")); 

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <h1>Lazy Loading Demo</h1>
          <Comp1 />
          <Suspense fallback={<div>Loading Comp2...</div>}>
            <Comp2 />
          </Suspense>
        </div>
      </Suspense>
    );
  }
}

export default App;
