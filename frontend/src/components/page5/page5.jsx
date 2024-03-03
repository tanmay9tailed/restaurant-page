import img from '../../assets/s2 (1).jpg'
import './page5.css'
export default function page5() {
    return(<>
        <div id='page5' className="page5">
            <div className="page-l"><img src={img} alt="" /></div>
            <div className="page-r">
                <div className="content">
                    <h1>SEE YOU SOON</h1>
                    <h6>PHONE NUMBER</h6>
                    <p>+91 864658278</p>
                    <h6>EMAIL ADDRESS</h6>
                    <p>abc@gmail.com</p>
                    <h6>RESTAURANT</h6>
                    <p>123 Anywhere St. Any City, ST 12345</p>
                </div>
            </div>
        </div>
    </>)
}