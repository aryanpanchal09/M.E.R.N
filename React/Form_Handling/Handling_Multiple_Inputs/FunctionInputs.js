import React, { useState } from 'react'
function FunctionInputs(){
    const[data,setData] = useState({
        name:"",
        email:""
    })
    const changeHandle=(e)=>{ // contain all the below fields as object 
        console.log(e.target.name)
        console.log(e.target.value)
        setData((prev) => {
            return{
                ...prev,[e.target.name]:e.target.value
            }
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(data)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter name: </label>
                <input type="text" name="name" placeholder="enter name" value={data.name} onChange={changeHandle}>
                </input>
                <br/>
                <br/>
                <label>Enter email: </label>
                <input type="email" name="email" placeholder="enter email" value={data.email} onChange={changeHandle}></input>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default FunctionInputs;