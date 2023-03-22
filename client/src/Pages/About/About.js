import "./About.css";
import React from "react";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Ellabuk</title>
        <meta name="description" content="This is the main About page for the ellabuk react site." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <div className="about-main-container">
          <div className="about-content">
            <img src=""></img>
            <h2> About Us</h2>
            <p>
              Ellabuk is a solution designed to meet the needs of lovers of African clothes and hair extensions who
              loves to wear and/or promote the African heritage at anytime irrespective of their location.
              <p>
                {" "}
                WHY ELLABUK? Ellabuk offer the best prices and a large range of designs ranging from Tops, Dresses, Maxi
                dress, Dashiki, Kaftan, casual, formal and different fabrics from Tie Dye, African Print and Lace. Our
                designs are exclusive and flawless for casual occasions. Our African Print Wax are original,
                long-lasting and are designed to make our customers stand out from the crowd. Our hair products are top
                notch, giving you impressive beautiful look, ranging from hair braiding extensions, hair crochet
                extensions, straight hair extensions, wavy hair extensions, curly hair extensions, Fauxlocs hair
                extensions, Kinky, and so on.
              </p>
              <br></br>
              <p>
                Our website is secured with trusted payment gateways. This means your payment information is safe and
                secure. The website also offer seamless experience to the customers as it is easy to order and track
                your orders. We have 24 hours virtual support that help our customers navigate the website without
                getting lost or confused.
              </p>
              <br></br>
              <h2> What We Offer</h2>
              <p>
                We offer pre-order services which allow our customers to pre order the design of their choice and we
                deliver on time to make them happy and keep them satisfied. The solution we offer is not new, but it is
                unique in the sense that our Adire, popularly known as “Tie dye clothes” was traditionally made with
                high quality dye and cotton fabric and are uniquely made by professionals from the homeland of Adire in
                Abeokuta , Ogun State, Nigeria. Adire fabric was originated from the Southwestern part of Nigeria in
                West Africa. Our dresses are designed with quality cotton fabric and with a fusion of
                indigenous/traditional African textile designs known as ÀDÌRẸ ẸLẸ́KỌ dyed fabrics with synthetic-dyed
                fabrics to create a body of ART piece. Thank you for shopping with Us!
              </p>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
