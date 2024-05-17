import React, { useEffect } from "react";
import SmallBanner from "../Components/SmallBanner";
import "../Styles/ContactPageStyles/ContactPage.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Input } from "@mui/material";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contactPage">
      <SmallBanner title="Contact" />
      <div className="contactPageContent">
        <div className="leftSection">
          <h2 style={{ fontSize: "1.6em" }}>
            We are here to help you shape your body!
          </h2>
          <p>
            At GymLab, we're committed to helping you achieve your ideal body.
            Our team of expert trainers and nutritionists will collaborate with
            you to develop a personalized fitness and nutrition plan tailored to
            your unique goals.
          </p>
          <div className="details">
            <div>
              <div className="detailsSubDiv">
                <h3 className="detailsHeading">Kielce, Pl</h3> St.
              </div>

              <div className="detailsSubDiv">
                <h3 className="detailsHeading">Information</h3>
                +48-999-999-999
              </div>
              <div className="detailsSubDiv">
                <h3 className="detailsHeading">Follow us on</h3>
                <div className="socials">
                  {" "}
                  <FacebookIcon />
                  <XIcon />
                  <InstagramIcon />
                </div>
              </div>
            </div>
            <div className="detailsSubDiv">
              <h3 className="detailsHeading">Opening hours</h3>
              <h4>Monday - Friday:</h4>
              <p>5:00am - 10:00pm</p>
              <h4>Saturday:</h4>
              <p>6:00am - 9:00pm</p>
              <h4>Sunday:</h4>
              <p>Closed</p>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <h2 style={{ fontSize: "1.6em" }}>Give us Your feedback</h2>
          <form>
            <Input type="text" placeholder="First name" required/>
            <Input type="text" placeholder="Last name" />
            <Input type="text" placeholder="Email address" required/>
            <Input type="text" placeholder="Message" required/>
            <Input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
