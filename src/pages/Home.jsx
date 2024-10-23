import '../style.css'
import img1 from '../images/3145463.jpg'

const Home=()=>{
    return(
        <>
         <h1 className='homeh1'> Welcome To Dashboard </h1>
         <img src={img1} alt="error while feching the image" className='dashboardimg'/>
        </>
    )
}


export default Home;