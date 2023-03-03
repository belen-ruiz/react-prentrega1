import "./home.css";
import fotoSlider1 from "../../../../src/img/banner-plantas-de-interior.jpg";
import fotoSlider2 from "../../../../src/img/banner-plantas.png";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export const Slider2 = () => {

  const handleClick = (direction) =>{

    // className= {(direction==left) && leftArrow}
    // className={({ direction==left })=> isActive  ? 'img2' : } 

  } 

  return (
    <div className="sliderBox" >

      <div className="arrows">
        <KeyboardArrowLeftIcon className="leftArrow"  />
        <KeyboardArrowRightIcon className="rightArrow" />
      </div>

      <div className="wrapper">
        <img src={fotoSlider1} alt="foto 1" className="img1"/>
        <img src={fotoSlider2} alt="foto 2" className="img2"/>
      </div>
    </div>
  )
}

