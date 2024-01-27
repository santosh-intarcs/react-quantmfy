import styled from 'styled-components';
import HeroImage from '../../assets/toolkit/Toolkit-Hero-BG.svg'
import { BREAKPOINT } from '../../constants/breakpoints';
import COLORS from '../../constants/colors';
import ServiceBg from '../../assets/webDev/Services-BG.svg';




export const ToolkitWrapper = styled.div`

.nav-style {
  position: fixed;
  right: 4%;
  top: 30%;
  @media (max-width: 768px) {
    display: none;
  }
}
  .section1 {
    
    padding-left: 130px;
    padding-right: 130px;

    @media (max-width: ${BREAKPOINT.sm}) {
        height:auto;
        padding-left: 20px;
        padding-right: 20px;
    }

    .section1-container {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: ${BREAKPOINT.sm}) {
        flex-direction:column;
      }
    }
    .section1-image-container {
        min-width:80vw;
        margin-top:20px;
        background-image: url(${HeroImage});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 150vh;
    }
    .section1-inner-container {
      max-width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media (max-width: ${BREAKPOINT.sm}) {
        flex-direction:column;
        max-width:100%;
      }
    }
    .section1-image {
      width: 420px;
      @media (max-width: ${BREAKPOINT.sm}) {
        width:100%;
      }
    }
  }  

  .mb-16 {
    margin-bottom: 16px;
  }
`;
