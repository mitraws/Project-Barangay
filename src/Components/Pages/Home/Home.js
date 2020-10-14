import React from "react";
import "./HomePage.css";
import mainImage from "../../../Images/IMG_0318.jpg";
import batchImage from "../../../Images/batchexcellent2.jpg";
import awardImage from "../../../Images/hotelCombined2.jpg";
import tripAdvisor from "../../../Images/ta2017.jpg";
import slide1 from "../../../Images/2016-01-29-PHOTO-00001238.jpg";
import slide2 from "../../../Images/image0.jpeg";
import slide3 from "../../../Images/image3.jpeg";
import slide4 from "../../../Images/image24.jpeg";
import slide5 from "../../../Images/image43.jpeg";
import slide6 from "../../../Images/image51.jpeg";
import slide7 from "../../../Images/IMG_0141.jpg";
import slide8 from "../../../Images/IMG_0153.jpg";
import slide9 from "../../../Images/IMG_0156.jpg";
import slide10 from "../../../Images/IMG_0295.jpg";
import slide11 from "../../../Images/IMG_0316.jpg";
import slide12 from "../../../Images/IMG_0321.jpg";
import slide13 from "../../../Images/IMG_0323.jpg";
import slide14 from "../../../Images/IMG_0404.jpg";
import slide15 from "../../../Images/IMG_0405.jpg";
import slide16 from "../../../Images/IMG_1205.jpg";
import slide17 from "../../../Images/IMG_1810.jpg";
import slide18 from "../../../Images/IMG_6556.jpg";
import slide19 from "../../../Images/IMG_9333.jpg";
import slide20 from "../../../Images/IMG_9674.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
  slide17,
  slide18,
  slide19,
  slide20,
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[5]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[6]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[7]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[8]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[9]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[10]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[11]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[12]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[13]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[14]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[15]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[16]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[17]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[18]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[19]})` }}></div>
        </div>
      </Slide>
    </div>
  );
};

export default function HomePage() {
  return (
    <div >
   <div className="title">
   <img src={mainImage} alt="MainImage" />
   </div>

   <div className="grid">
        <div >
          <img src={batchImage} alt="Award1" />
        </div>
        <div>
          <img src={awardImage} alt="Award2" />
       </div>
       <div>
          <img src={tripAdvisor} alt="Award3" />
        </div>
        </div>
    
      <h4>
        Our tropical decorated guest house is located in a typical Amsterdam
        canal (town) house erected in the 18th century. Like our old house in
        Droogbak, built around 1777.
      </h4>
      <div className="grid2">
      <div>
      <p >
        After running our B&B more than 18 years, on June 8 we moved to our new
        Mansion at HERENSTRAAT 26. Just couple of minutes away from the old
        location and around 10 minutes away to Amsterdam Centraal Station.
      </p>
      
      <p>
        Barangay is a Filipino word meaning small village or community. Ask any
        Filipino to satisfy your own curiosity.
      </p>
      
      <p>
        We greeted our first guests on the 8th of August, 1999. We give each
        guest a warm welcome. A unique home away from home with a twist, your
        very own original tropical room.
      </p>
      
      <p>
        Through the years, Barangay B&B has been showered with multiple Awards &
        Recognitions. We are humbled by hundreds of excellent guest reviews. To
        our guests, we cannot thank you enough.
      </p>
      </div>
      </div>
      {Slideshow()}

    </div>
  );
}
