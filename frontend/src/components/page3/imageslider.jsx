import { useState } from "react"

export default function ImageSlider({images}){

    const [currentIndex,setCurrentIndex] = useState(0);

    const goprev = () => {
        const isfirst = currentIndex===0;
        const newIndex = isfirst?images.length - 1 :currentIndex-1;
        setCurrentIndex(newIndex);
    }
    const gonext = () => {
        const islast = currentIndex===images.length - 1 ;
        const newIndex = islast?0 :currentIndex+1;
        setCurrentIndex(newIndex);
    }

    return<>
       <div className="imageslider">
        <img src={images[currentIndex].image} alt="" height={"100%"} width={"70%"}/>
        <p>{images[currentIndex].title}</p>
        <button className="slidebutton" id="left" onClick={goprev}><i class='bx bxs-chevron-left'></i></button>
        <button className="slidebutton" id="right" onClick={gonext} ><i class='bx bxs-chevron-right'></i></button>
       </div>

    </>
}