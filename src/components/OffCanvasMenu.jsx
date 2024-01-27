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
import { ListingWrapper, OffCanvasMenuStyleWrapper } from './OffCanvasMenu.style';
import { HeadingS, Label } from '../constants/TypographyStyles';
import { BREAKPOINT } from '../constants/breakpoints';


const ServiceListing = ({ title, path }) => {
  return (
    <ListingWrapper>
    <Link to={path ? path : '/'} style={{textDecoration:'none'}}>
      <div style={{ marginBottom: 32, display: 'flex' }}>
        <p style={{ ...Typography.headingS, color: COLORS.white }}>{title}</p>
        <img src={LinkArrow} style={{ marginLeft: 10 }} width={36} />
      </div>
    </Link>
    </ListingWrapper>
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
    @media (max-width: ${BREAKPOINT.sm}) {
      /* Apply overflow-y: auto; only for mobile views */
      overflow-y: auto;
  }
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
    <OffCanvasMenuStyleWrapper>
      <OffCanvasMenuWrapper open={isMenuOpen}>
        <div className='menu-container'>
          <div className='logo-container'>
            <img src={Logo} className='logo' />
            <div style={{ width: '100%' }}>
              <p style={{ ...Typography.label, marginBottom: 32 }}>discover our services</p>
              <ServiceListing title='Application development' path="/app-development" />
              <ServiceListing title='IT Consultant' path='/techno-consultant' />
              <ServiceListing title='IT Staffing' path='/it-staffing' />
              <ServiceListing title='Data Analytics'  path='/data-analytics' />
              <ServiceListing title='Web development' path='/web-development' />
              <ServiceListing title='Technology Toolkit' path='/technology-toolkit' />
              <ServiceListing title='CTO-as-a-Service' path='/cto-as-a-service' />
            </div>
          </div>
          <div className='content-container'>
            <div className='menu-container'>
              <button className='button-style'>
                <HeadingS>Let's Connect</HeadingS>
                <img src={LinkArrowBlack} style={{ marginLeft: 10 }} width={28} />
              </button>
            </div>
            <div>
              <img src={Contact} width={350} height={274} />
            </div>
            <div className='close-container'>
              <button className='close-button'
                onClick={closeMenu}
              >
                <Label>Close</Label>
                <img src={Close} style={{ marginLeft: 10 }} width={16} />
              </button>
            </div>
          </div>
        </div>
      </OffCanvasMenuWrapper>
    </OffCanvasMenuStyleWrapper>
  );
};

export default OffCanvasMenu;