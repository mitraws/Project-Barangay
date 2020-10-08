import React from "react";
//import { motion } from "framer-motion";
import "./index.css";
//import "../../Styles/style.css";

export default function index() {
  return (
    <div className='main'>
      <div>
        <header>
          <h1>THE “TROPICAL” ROOMS</h1>
          <p>
            There are two spacious double- (or twin) rooms, decorated in a
            quirky, tropical, S/E Asian style. Both Non smoking rooms have large
            en-suite bathrooms with rain showers and bathtubs. Unique among
            B&B's, we have Japanese bidet toilets for complete hygiene. The
            Rooms with climate control are on the second floor. Like most
            monumental houses in Amsterdam, we have steep narrow stairs, the B&B
            is not suitable to those physically challenged.
          </p>
          {/* <div>
            <button className='contact-right'>Make a Reservation </button>
          </div> */}
        </header>
      </div>

      <div className='grid'>
        <div>
          <img
            src='http://barangay.nl/images/thumbnail%20(4).jpg?crc=390300741'
            alt='bedroom'
            // height='50%'
            // width='50%'
          />
        </div>

        <div>
          <img
            src='http://barangay.nl/images/thumbnail%20(1).jpg?crc=238654893'
            alt='bathroom'
            // height='20%'
            // width='20%'
          />
        </div>

        <div>
          <img
            src='http://barangay.nl/images/thumbnail%20(9).jpg?crc=123493431'
            alt='TV'
            // height='10%'
            // width='10%'
          />
        </div>
        <div>
          <img
            src='http://barangay.nl/images/thumbnail%20(7).jpg?crc=3937410535'
            alt='tabel and desk'
            // height='20%'
            // width='20%'
          />
        </div>
      </div>

      <div>
        <h4>Amenites</h4>
        <div>
          <div className='wrap'>
            <p className='inner_p'>Free Hi-Speed WIFI </p>
            <p className='inner_p'>
              Comfortable Queen size bed or 2 single beds
            </p>

            <p className='inner_p'> Cable T.V</p>
          </div>
          <div className='wrap'>
            <p className='inner_p'>
              Modern en-suite Bathroom with bathtub and walk-in Power shower and
              Bath tub
            </p>

            <p className='inner_p'> Shower gel and shampoo </p>
          </div>
          <div className='wrap'>
            <p className='inner_p'>Welcome basket with wine and snacks </p>
            <p className='inner_p'>Complimentary quality coffee and tea </p>
            <p className='inner_p'> Small table and 2 chairs</p>
          </div>
          <div className='wrap'>
            <p className='inner_p'> Breakfast in bed, served in the room</p>

            <p className='inner_p'> No noise / quiet Small fridge</p>
            <p className='inner_p'> Iron and board </p>
          </div>{" "}
          <div className='wrap'>
            <p className='inner_p'>
              Aircon - Climate control with air filters{" "}
            </p>
            <p className='inner_p'> Hair Dryer </p>
            <p className='inner_p'> Daily cleaning service </p>
          </div>
        </div>
      </div>
      <div className='grid2'>
        <div>
          <h4>POLICIES</h4>
          <p>
            Our conditions and cancellation policy. (The applied amounts /
            percentages are to be paid by the guest.) If you cancel you
            reservation: Less than 7 days before date of arrival & NO SHOW: 100%
            of total amount. More than 7 days before arrival date:25 euro
            administration fee. We only accept bookings with valid credit/ debit
            card details. Your card will be charged 1 week before check-in. If
            you prefer to pay cash, we will reverse the card charge. We are a
            non smoking B&B Our house is not suitable for babies and children
            under 8 years old. Give us your arrival time 48 hours before
            check-in.
          </p>
        </div>
        <div>
          <h4>BREAKFAST IN BED</h4>
          <p>
            We serve our “world famous breakfast” in the rooms between 09.00 and
            11.00 hours, If you prefer an early breakfast we serve a full
            continental breakfast the night before. Every morning we serve a
            different breakfast. Especial breakfast options: Continental,
            Vegetarian, Vegan , Gluten free. (inform us)
          </p>
        </div>
      </div>
      {/* <div className='footer_color'>
        <footer>
          <div className='footerGrid'>
            <div>
              <p>Barangay B&B </p>
              <p>Wimmo & Godwin</p>{" "}
              <p>
                Herenstraat 26<p> 1015CB, Amsterdam </p>The Netherlands
              </p>
            </div>
            <div>
              <p className='underline'>Rooms</p>
              <p>Good To Know</p>
              <p>About Us</p>
              <p>Contact</p>
            </div>
            <div>
              <p>Email: rooms@barangay.nl</p>
              <p>Telephone: +31 (0) 62504 5432</p>
            </div>
          </div>
        </footer>
      </div> */}
    </div>
  );
}
