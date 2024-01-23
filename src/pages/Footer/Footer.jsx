import React from "react";
import { Fragment } from "react";
import Contact from '../../assets/Contact.svg';
import Typography from "../../constants/textStyle";
import ContactForm from "./ContactForm";
import COLORS from "../../constants/colors";
import { FooterWrapper } from "./Footer.styles";
import { BodyS, BodySbold, HeadingS, Label } from "../../constants/TypographyStyles";


const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <div className="inner-container">
          <div className="left-container">
            <Label>Let's connect</Label>
            <HeadingS className="mb-16">Contact us today to learn how to put QuantmFy to work for you.</HeadingS>
            <div className="form-container">
              <BodySbold className="mb-16">Contact information</BodySbold>
              <BodyS className="mb-16">All fields required unless marked optional.</BodyS>
              <ContactForm />
            </div>
          </div>
          <div>
            <img src={Contact} className="footer-image"  style={{marginLeft:20}}/>
          </div>
         </div>
      </div>
    </FooterWrapper>

  );
}

export default Footer;