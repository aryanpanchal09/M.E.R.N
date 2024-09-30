import React,{useState,useEffect} from 'react'
function Component1(){
    const[counter,setCounter]=useState(0)
    useEffect(()=>{
        console.log('state is rendered')
    })
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
        </div>
    )
}
export default Component1