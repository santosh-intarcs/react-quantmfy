import styled from 'styled-components';
import HeroImage from '../../assets/Appdev/Hero-BG.svg'
import { BREAKPOINT } from '../../constants/breakpoints';
import COLORS from '../../constants/colors';
import ServiceBg from '../../assets/webDev/Services-BG.svg';




export const CTOasServiceWrapper = styled.div`

.nav-style {
  position: fixed;
  right: 4%;
  top: 30%;
  @media (max-width: 768px) {
    display: none;
  }
}
  .section1 {
    background-image: url(${HeroImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 90vh;
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

  .section2 {
    flex-direction: row;
    max-width: 100%;
    padding-left: 130px;
    padding-right: 130px;
    margin-top: 80px;
    padding-bottom: 60px;
    @media (max-width: ${BREAKPOINT.sm}) {
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 80px;
        padding-bottom: 60px;
    }
    .section2-title-container {
        max-width:60%;
        align-items:flex-start;
        @media (max-width: ${BREAKPOINT.sm}) {
          max-width: 100%;
        }
      }
    .section2-inner-container {
        margin-top:100px;
    
      @media (max-width: ${BREAKPOINT.sm}) {
        margin-top:0px;
      }
    }
    .section2-title {
      margin-bottom: 16px;
    }
    .section2-content-container {
         max-width: 85%;
         padding:20px;
         border:1px solid ${COLORS.white};
         border-radius:16px;
         margin-top:30px;
      
      @media (max-width: ${BREAKPOINT.sm}) {
        max-width: 100%;
        margin-top:20px;

      }
    }
  }

  .section3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${COLORS.green};
    max-width: 100%;
    padding-top: 60px;
    padding-bottom: 60px;
    @media (max-width: ${BREAKPOINT.sm}) {
        width: 100%;
        flex-direction: column;
        padding:0;
    }
    .section3-inner-container {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 80%;
      @media (max-width: ${BREAKPOINT.sm}) {
        padding:20px;
        flex-direction: column;
        align-items: start;
        justify-content: flex-start;
        min-width:100%;
      }
    }
    .section3-left-container {
      height: 80vh;

      @media (max-width: ${BREAKPOINT.sm}) {
        padding:20px;
        flex-direction: column;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 0px;
        align-items: start;
        justify-content: flex-start;
        height:auto;
        width:100%;
      }
    }
    .section3-right-container {
      height: 80vh;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      flex: 1;
      padding: 32px;

      @media (max-width: ${BREAKPOINT.sm}) {
        padding:20px;
        flex-direction: column;
        align-items: start;
        justify-content: flex-start;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border-top-right-radius: 0px;
        height:auto;
        width:100%;
      }
    }
    .section3-image {
      width: 420px;
      height: 416px;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url(${ServiceBg});
      background-size: cover; 
      background-position: center;
      background-repeat: no-repeat;
      img {
        width: 420px
      }
      @media (max-width: ${BREAKPOINT.sm}) {
        width:100%;
        background: none;
        height:auto;
        padding:0; 
        img {
          width: 220px
        }
      }
    }
  }
  .section4 {
    min-height:80vh;
    display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width: ${BREAKPOINT.sm}) {
        min-height:auto;
        padding-top:40px;
        padding-bottom:40px;
      }
  }
  .section4-inner-container {
    max-width:50%;

  }
  .section4-link {
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  }

  .mb-16 {
    margin-bottom: 16px;
  }
`;

export const PillsWrapper = styled.div`
    border:1px solid ${COLORS.carbon};
    border-radius:50px;
    display: flex;
    padding: 10px 15px;
    justify-content: center;
    align-items: center;
    margin-top:16px;
    margin-right:16px;
`;
