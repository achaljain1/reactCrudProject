import { Link, Outlet } from "react-router-dom";
import './style.css'
const Layout=()=>{
    return(
        <>
        <div className="nav">
        <h4 className="logo">Employee Management</h4>
        <ul typeof="none" className="navul">
         <Link className="li" to="home">Home</Link> 
         <Link className="li" to="insert">Insert Data</Link> 
         <Link className="li" to="display">Display Data</Link> 
         <Link className="li" to="search">Search Data</Link> 
         <Link className="li" to="searchbyname" > Search By name</Link> 
         <Link className="li" to="update" > Update</Link> 
        </ul>
        </div>
         
         <Outlet/>
        </>
    )
}
export default Layout;