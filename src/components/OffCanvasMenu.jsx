import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import Logo from "../assets/QuantmFy-logo.svg";
import Typography from '../constants/textStyle';
import LinkArrow from '../assets/Link-arrow-white.svg'
import LinkArrowBlack from '../assets/Link-arrow.svg'
import COLORS from '../constants/colors';
import Contact from '../assets/Contact.svg';
import Close from "../assets/Close.svg";
import { Link } from 'react-router-dom';


const ServiceListing = ({ title, path }) => {
  return (
    <Link to={path ? path : '/'} style={{textDecoration:'none'}}>
      <div style={{ marginBottom: 32, display: 'flex' }}>
        <p style={{ ...Typography.headingS, color: COLORS.white }}>{title}</p>
        <img src={LinkArrow} style={{ marginLeft: 10 }} width={36} />
      </div>
    </Link>
  )
}

const OffCanvasMenuWrapper = styled.aside`
    position: fixed;
    width: 100vw;
    height: 100vh; 
    right: -150%;
    top: 0;
    z-index: 10;
    background-color: #FFFFFF;
    transition: all 0.3s ease-out 0s;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${props => props.open && css`
        right: 0; /* Update left to right to slide in from the right */
    `}
`;


const scrollTop = () => {
  window.scroll(0, 0);
};

const OffCanvasMenu = ({
  isMenuOpen = false,
  closeHamburgerMenu
}) => {
  const closeMenu = () => {
    scrollTop();
    closeHamburgerMenu();
  }
  return (
    <Fragment>
      <OffCanvasMenuWrapper open={isMenuOpen}>
        <div style={{ display: 'flex' }}>
          <div style={{
            backgroundColor: COLORS.carbon,
            width: '50%',
            minHeight: '100vh',
            paddingLeft: 112,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <img src={Logo} width={64} height={102} />
            <div style={{ width: '100%' }}>
              <p style={{ ...Typography.label, marginBottom: 32 }}>discover our services</p>
              <ServiceListing title='Application development' path="/app-development" />
              <ServiceListing title='IT Consultant' path='/techno-consultant' />
              <ServiceListing title='IT Staffing' path='' />
              <ServiceListing title='Data Analytics'  path='' />
              <ServiceListing title='Web development' path='' />
              <ServiceListing title='Technology Toolkit' path='' />
              <ServiceListing title='CTO-as-a-Service' path='' />
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(180deg, #F4F9DD 0%, #E7D7DD 100%)',
            minWidth: '50%',
            minHeight: '100vh',
            paddingLeft: 112,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}> {/* Set width to 100% */}
              <button style={{
                backgroundColor: 'transparent',
                padding: 16,
                color: COLORS.carbon,
                borderRadius: 4,
                border: "2px solid",
                borderColor: COLORS.carbon,
                marginBottom: 45,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'

              }}>
                <p style={Typography.headingS}>Let's Connect</p>
                <img src={LinkArrowBlack} style={{ marginLeft: 10 }} width={28} />
              </button>
            </div>
            <div>
              <img src={Contact} width={350} height={274} />
            </div>
            <div style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              marginRight: 60,
            }}>
              <button style={{
                backgroundColor: COLORS.white,
                padding: 10,
                color: COLORS.carbon,
                borderRadius: 4,
                border: "2px solid",
                borderColor: COLORS.carbon,
                textTransform: 'uppercase',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',

              }}
                onClick={closeMenu}
              >
                <p style={Typography.label}>Close</p>
                <img src={Close} style={{ marginLeft: 10 }} width={16} />
              </button>
            </div>
          </div>
        </div>
      </OffCanvasMenuWrapper>

    </Fragment>
  );
};

export default OffCanvasMenu;