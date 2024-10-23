import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style.css'
const Insert=()=>{
    const [input, setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
   const handleSubmit=()=>{
    let api="http://localhost:3000/employees";
    axios.post(api, input).then((res)=>{
        console.log(res);
        toast.success("Data Successfully Save!!!")
    })
   }
    return(
        <>
         
         <h1 className="inserth1"> Insert Record</h1>
         <div className="parentinsert" >
         <div className="insertform">
         <label htmlFor="">Enter Employee No :</label> <input type="text" name="empno"  
         onChange={handleInput} />
         <br/>
         <label htmlFor="">Enter name :</label> <input className="inputtwo" type="text" name="name"
          onChange={handleInput} />
         <br/>

        <label htmlFor=""> Enter email :</label> <input className="inputthree" type="text" name="email"
         onChange={handleInput} />
         <br/>
         <label htmlFor="">Enter contact No. :</label> <input className="inputfour" type="text" name="contact"  
         onChange={handleInput} />
         <br/>

         <button onClick={handleSubmit}>Save!!!</button>
         </div>
         </div>
         <ToastContainer />
         
        </>
    )
}
export default Insert;