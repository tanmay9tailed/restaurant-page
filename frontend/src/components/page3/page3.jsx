import './page3.css'
import s0 from '../../assets/s.jpg'
import s1 from '../../assets/s (1).jpg'
import s2 from '../../assets/s2.jpg';
import ImageSlider from './imageslider'
export default function page3() {

    const images = [
        {image:s0,title:"Mouthwatering appetizers"},
        {image:s1,title:"Wholesome Mains"},
        {image:s2,title:"Sweet endings"},
    ]


    return(
    <>
        <div id='page3' className="page3">
            <div className="left-c"><h1>Flavors</h1><h1> of France</h1><p className='card-p'>Paris is a melting pot, as our food can attest. Take a bite and savor la vie délicieuse!</p></div>
            <ImageSlider images={images}/>
        </div>
    </>)
}