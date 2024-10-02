import React, {Component} from 'react';

class CompA extends Component{
    // HelloFunction(){
    //     alert('Hello World')
    // }
    render(){
        const HelloFunction=(name)=>{
            alert('Hello '+name);
        }
        return(
            <div>
                <button onClick={()=> HelloFunction('Amit')}>Click</button>
                {/* <button onClick={this.HelloFunction}>Click</button> */}
            </div>
        )
    }
}

// function CompA() {
//     function HelloFunction(){
//         alert('Hello World')
//     }
//     return (
//         <div>
//             <button onClick={HelloFunction}>Click</button>
//         </div>
//     );
// }
export default CompA;