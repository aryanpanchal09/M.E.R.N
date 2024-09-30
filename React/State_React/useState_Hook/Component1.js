import React,{useState} from 'react'
function Component1(){
    const [name, setName] = useState("Rohan")
    let changeState=()=>{
        setName("Aryan")
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={changeState}>Update</button>
        </div>
    )
}
export default Component1