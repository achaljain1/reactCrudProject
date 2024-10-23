import { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [eno, setEno]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleSubmit=()=>{
        let api=`http://localhost:3000/employees/?empno=${eno}`
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
          return(
            <>
              <h1> Employee No. : {key.empno}</h1>
              <h2> Name : {key.name} </h2>
              <h2> Email: {key.email} </h2>
              <h2> Contact No. : {key.contact}</h2>
            </>
          )
    })
    return(
        <>
          <h1 className="searchh1"> Search Employee Records</h1>
          <div className="parentsearch">
          <div className="search">
          <label htmlFor="">Enter Emp  No. : </label> <input className="searchinput" type="text" value={eno} 
            onChange={(e)=>{setEno(e.target.value)}} /> <br />
          <button className="searchbtn" onClick={handleSubmit}>search</button>
          
          { ans }  
          </div>  
          </div>
        </>
    )
}
export default Search;