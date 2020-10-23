import React from "react";
import "./HomePage.css";
import "../../../App.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

import mainImage from "../../../Images/IMG_0318.jpg";
import batchImage from "../../../Images/batchexcellent2.jpg";
import awardImage from "../../../Images/hotelCombined2.jpg";
import tripAdvisor from "../../../Images/ta2017.jpg";
import {slideImages} from "../../../Images";


const Slideshow = () => {
  return (
    <div className="slide_div">
      <div className="slide-container">
        <Slide>
          {slideImages.map((slide) => (
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slide})` }}></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="main">
      <div className="border_div">
        <img src={mainImage} alt="MainImage" className="title" />
      </div>

      <div className="center">
        <div className="awards">
          <div>
            <img src={batchImage} alt="Award1" />
          </div>
          <div>
            <img src={awardImage} alt="Award2" />
          </div>
          <div>
            <img src={tripAdvisor} alt="Award3" />
          </div>
        </div>
      </div>
      <div>
        <h4 className="intro">
          Our tropical decorated guest house is located in a typical Amsterdam
          canal (town) house erected in the 18th century. Like our old house in
          Droogbak, built around 1777.
        </h4>
      </div>
      <div className="slideshow_grid">
        <div>
          <p>
            After running our B&B more than 18 years, on June 8 we moved to our
            new Mansion at HERENSTRAAT 26. Just couple of minutes away from the
            old location and around 10 minutes away to Amsterdam Centraal
            Station.
          </p>

          <p>
            Barangay is a Filipino word meaning small village or community. Ask
            any Filipino to satisfy your own curiosity.
          </p>

          <p>
            We greeted our first guests on the 8th of August, 1999. We give each
            guest a warm welcome. A unique home away from home with a twist,
            your very own original tropical room.
          </p>

          <p>
            Through the years, Barangay B&B has been showered with multiple
            Awards & Recognitions. We are humbled by hundreds of excellent guest
            reviews. To our guests, we cannot thank you enough.
          </p>
        </div>
        <div>
          <Slideshow />
        </div>
      </div>
      <div className="awards">
        <div>
          <b className="review">Shan Courtat ⭐⭐⭐⭐⭐</b>
          <p>
            {" "}
            Stayed for 3 nights and it was one of the best trip I've ever had
            thanks to our hosts, were very warm but also professional at the
            same time. Made us feel super comfortable, rooms have beautiful
            furniture and decorations. Breakfasts are tasty, varied and always
            served on time. The place and neighborhood are overall really cozy,
            close to train station (max. 15min) and the center ; also very close
            to the tram so you can visit other places like the Museumplein very
            easily.
          </p>
        </div>
        <div>
          <b className="review">Thiago Nouer ⭐⭐⭐⭐⭐</b>
          <p>
            I actually stayed here a year ago and forgot to write a review when
            I left and generally I don’t write reviews at all, but I remember
            this place exactly, professional host with the best guiding tips,
            made us feel very welcome and cooks the most delicious well served
            breakfast , hands down this BnB will offer the best hospitality you
            can imagine, the rooms are all beautifully theme designed with
            privet bathrooms, lovely kitchen with sitting area and background
            music. I would definitely recommend staying here just for the
            experience
          </p>
        </div>
        <div>
          <b className="review">Gian Domenico Aresu ⭐⭐⭐⭐⭐</b>
          <p>
            {" "}
            B&B delizioso, curato nei minimi particolari e molto pulito. Ottima
            posizione e gestori molto gentili e accoglienti. Colazione in camera
            molto ricca e di qualità. Ci tornerò sicuramente e lo consiglio a
            tuti coloro che sanno esattamente che cosa sia un B&B. Grazie di
            tutto Gianpaolo e Domenico
          </p>
        </div>
      </div>
    </div>
  );
}
