import './page1.css'
import { useNavigate } from 'react-router-dom';


function page1() {

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Menu`; 
    navigate(path);
  }

    return (
    <>
        <div id='page1' className='main'>
            <h3>La Lune French Bistro</h3>
            <h1>A Taste of Paris</h1>
            <button onClick={routeChange}>Menu</button>
        </div>
    </>)
}

export default page1;