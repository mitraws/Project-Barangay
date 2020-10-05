import React from "react";
import "./index.css";

export default function index() {
  return (
    <div className='main'>
      <div>
        <h1>THE “TROPICAL” ROOMS</h1>
        <p>
          Our non smoking double or twin rooms are decorated in a quirky,
          tropical, S/E Asian style. Both rooms have large en-suite bathrooms
          with showers and bathtubs. Unique among B&B's, we have Japanese bidet
          toilets for complete hygiene. Rooms are on the first and second floor.
          Like monumental houses in Amsterdam, we have steep narrow stairs, the
          B&B is not suitable to those physicaly challenged. We serve our “world
          famous breakfast” in the rooms between 09.00 and 11.00 hours, If you
          prefer an early breakfast we serve a full continental breakfast the
          night before. Especial breakfast options: Continental, Vegetarian,
          Vegan , Gluten free. Don't forget to inform us when checking in.
        </p>
        <div>
          <button>Make Reservation </button>
        </div>
      </div>
      <div className='grid'>
        <div>
          <img
            src='http://barangay.nl/images/img_6733.jpg?crc=3846406442'
            alt='bedroom'
            height='50%'
            width='50%'
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
            src='http://barangay.nl/images/thumbnail%20(7).jpg?crc=3937410535'
            alt='tabel and desk'
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

        {/* <div>
          <img
            src='http://barangay.nl/images/img_6859.jpg?crc=60136289'
            alt='fridge'
            height='20%'
            width='20%'
          />
        </div> */}
      </div>

      <div>
        <h4>Amenites</h4>
        <ul>
          <li>- Free Hi-Speed WIFI</li>
          <li>
            {" "}
            - Modern en-suite Bathroom with bathtub and separate walk-in Power
            shower and Bath tub
          </li>
          <li>- Comfortable Luxe Queen bed or 2 single beds</li>- Small table
          and 2 chairs - Complimentary quality coffee and tea{" "}
          <li>- Welcome basket with rose wine and snacks</li>{" "}
          <li>- No noise / quiet Small fridge </li>
          <li>- Cable T.V </li>
          <li>- Alarm clock</li>
          <li> - Hair Dryer</li>
          <li> - Silky Bathrobe</li> <li>- Non-gas Heating elements</li>
          <li>- Aircon</li>
          <li>- Climate control with air filters - Daily cleaing service </li>
          <li> -Our "World famous" Breakfast in bed.</li>
        </ul>
      </div>
      <div>
        <h4>Cancellation Policy</h4>
        The applied amounts / percentages are to be paid by the guest. If you
        cancel you reservation Less than 7 days before date of arrival & NO
        SHOW: 100% of total amount. More than 7 days before arrival date: 25
        euro administration fee. Always read your confirmation email !! We
        strongly recommend to get a personal travel insurance that will provide
        adequate cover during your stay and will also compensate you if you need
        to cancel or cannot meet your obligations regarding your booked
        accommodations.
      </div>
    </div>
  );
}
