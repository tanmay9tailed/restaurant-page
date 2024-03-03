import './page2.css' 
import s from '../../assets/s.jpg'
import s1 from '../../assets/s (1).jpg'
import { useNavigate } from 'react-router-dom';
 
 function Page2() {

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Menu`; 
    navigate(path);
  }

    return(
    <>
        <div id='page2' className="page2">
            <div className='left-p'>
                <div><img src={s} alt="" /></div>
               <div> <img src={s1} alt="" className='img2'/></div>
            </div>
            <div className='right-p'>
                <div className='text'>
                    <h2>A French Fling</h2>
                    <p>La Lune French Bistro was born from a love of all things Paris. Our founder and chef Ingrid Correa spent three amazing years in the City of Love, training under the industry's best. She brought home everything she learned - the flavors, the feelings, the family-style cafe - so that you can get a taste of Paris, too.</p>
                </div>
                <button onClick={routeChange}>Menu</button>
            </div>

        </div>
    </>)
}

export default Page2;