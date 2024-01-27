import styled from 'styled-components';
import COLORS from '../../constants/colors';
import { BREAKPOINT } from '../../constants/breakpoints';
import HeroImage from '../../assets/Appdev/Hero-BG.svg';
import SolutionsBg from '../../assets/Appdev/Solutions-BG.svg';


export const AppDevelopmentWrapper = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  .gradient {
    background: linear-gradient(180deg, #9186C9 0%, #DCE3EC 61.46%);
    padding: 0;
    margin: 0;
  }
  .qf-logo {
    heigt:100px;
    @media (max-width: ${BREAKPOINT.sm}) {
      height:80px
    }
  }
  .nav-style {
    position: fixed;
    right: 4%;
    top: 30%;
    @media (max-width: 768px) {
      display: none;
    }
  }



  .section1-image {
    width:420px;
    @media (max-width: ${BREAKPOINT.sm}) {
      width:100%;
    }

  }

  .section1 {
    background-image: url(${HeroImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    padding-left: 130px;
    padding-right: 130px;

    @media (max-width: ${BREAKPOINT.sm}) {
      padding-left: 20px;
      padding-right: 20px;
      height:auto;
    }

  }

  .section1-container {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${BREAKPOINT.sm}) {
      flex-direction:column;
    }
  }

  .section1-content {
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: ${BREAKPOINT.sm}) {
      max-width: 100%;
      margin-top:80px
    }
  }

  .section2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 80%;
    padding-left: 130px;
    margin-top: 100px;

    @media (max-width: ${BREAKPOINT.sm} ) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding:20px;
    margin-top:0;
    }
  }
  .section2-image {
    width:380px;
    @media (max-width: ${BREAKPOINT.sm} ) {
      margin-top:50px;
      margin-bottom:50px;
      width:100%;
    }
  }
  .mb-16 {
    margin-bottom: 16px;
  }

  .section3 {
    background-color: ${COLORS.green};
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 130px;
    padding-right: 130px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width: ${BREAKPOINT.sm}) {
      flex-direction: column;
      max-width: 100%;
      padding:20px
    }
  }
  .section3-inner-container {
    max-width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
  }
  
  .section3-heading {
    text-align: center; 
    @media (max-width: ${BREAKPOINT.sm}) {
      text-align:start;
    } 
  }

  .section3-image-container {
    display: flex;
    justify-content: center;

    @media ( max-width: ${BREAKPOINT.sm}) {
      padding-top: 20px;
      flex-direction: column;
      justify-content: start;
      align-items:center;
      padding-bottom:20px
    }
  }

  .section4 {
    background-image: url(${SolutionsBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    width: 100vw;
    @media ( max-width: ${BREAKPOINT.sm}) {
      height:auto;
      width:auto;
    }

  }
  .section4-image {
    width:600;
    @media ( max-width: ${BREAKPOINT.sm}) {
      width:100%;
    }
  }

  .section4-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 80%;
    padding-left: 130px;

    @media ( max-width: ${BREAKPOINT.sm}) {
      margin-top: 20px;
      flex-direction: column;
      max-width: 100%;
      padding-bottom:20px;
      padding-left:20px;
      padding-right:20px;
    }
  }
  .section4-left-container {
    max-width: 40%, 
    margin-right: 20px;
  }

  .section5 {
    background: linear-gradient(180deg, #9186C9 -28.99%, #DCE3EC 50.29%);
    padding-top: 80px;
    padding-left:120px;

    @media (max-width: ${BREAKPOINT.sm}) {
      flex-direction: column;
      padding:20px;

    }
  }
  .section5-image {
    width:450px;
    @media (max-width: ${BREAKPOINT.sm}) {
      max-width: 100%;
    }
  }

  .section5-container {
    display: flex;
    flex-direction: row;

    @media (max-width: ${BREAKPOINT.sm}) {
      flex-direction: column;
      justify-content: start;
      align-items: start;
    }
  }
  .section5-inner-container {
    max-width: 30%;

     @media (max-width: ${BREAKPOINT.sm}) {
      max-width:auto;
      max-width:100%;


    }
  }
`;

export const SectionButtonWrapper = styled.div`
  .menu-button {
    background-color: ${COLORS.carbon};
    position: fixed;
    right: 4%;
    bottom: 5%;
    padding: 10px;
    color: ${COLORS.white};
    border: none;
    cursor: pointer;
    border-radius: 4px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    align-self: flex-end; // Corrected from 'end' to 'flex-end'

    @media (max-width: ${BREAKPOINT.sm}) {
      display:none;
    }
  }

  .menu-icon {
    margin-left: 10px; 
  }
`;

export const ImageWrapperStyle = styled.div`
  margin-right:24px;

  @media (max-width: ${BREAKPOINT.sm}) {
    margin-bottom: 24px;
    // border: 1px solid red;
    // width:100%
  }
  .image-container {
    margin-bottom:8px;
    @media (max-width: ${BREAKPOINT.sm}) {
      // width:100%;
      margin-bottom: 8px;
    }
  }
`;