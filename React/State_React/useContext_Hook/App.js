// import React from 'react';
// import CompA from './CompA';
// function App() {
//     return (
//         <div>
//             <CompA/>
//         </div>
//     );
// }
// export default App;

import React, {createContext} from 'react';
import CompA from './CompA';
export const NameContext = createContext()
function App() {
    return (
        <div>
            <NameContext.Provider value={'Rohan'}>
                <CompA/>
            </NameContext.Provider>
        </div>
    );
}
export default App;