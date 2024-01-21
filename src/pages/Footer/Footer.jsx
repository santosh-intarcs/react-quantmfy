import React from "react";
import { Fragment } from "react";
import Contact from '../../assets/Contact.svg';
import Typography from "../../constants/textStyle";
import ContactForm from "./ContactForm";
import COLORS from "../../constants/colors";


const Footer = () => {
  return (
    <Fragment>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        // overflow: 'hidden', // Add this line to prevent scrolling
        background: 'linear-gradient(180deg, #F4F9DD 0%, #E7D7DD 100%)',
        paddingLeft: 80,
        paddingRight:80,
        paddingTop:20,
        paddingBottom:20,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          flexDirection: 'row',
        }}>
          <div style={{ maxWidth: '40%', marginRight: 20 }}>
            <p style={{ ...Typography.label }}>Let's connect</p>
            <p style={{ ...Typography.headingS, marginBottom: 16 }}>Contact us today to learn how to put QuantmFy to work for you.</p>
            <div style={{
              backgroundColor: COLORS.white,
              borderRadius: 16,
              padding: 32,
              flex:1,
            }}
            >
              <p style={{ ...Typography.bodySbold, marginBottom: 16 }}>Contact information</p>
              <p style={{ ...Typography.bodyS, marginBottom: 16 }}>All fields required unless marked optional.</p>
              <ContactForm />
            </div>
          </div>
          <div>
            <img src={Contact} width={600}  style={{marginLeft:20}}/>
          </div>
         </div>
      </div>
    </Fragment>

  );
}

export default Footer;