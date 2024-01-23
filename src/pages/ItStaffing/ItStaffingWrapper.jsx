import styled from 'styled-components';
import HeroImage from '../../assets/Appdev/Hero-BG.svg'
import SolutionsBg from '../../assets/Appdev/Solutions-BG.svg';
import { BREAKPOINT } from '../../constants/breakpoints';
import COLORS from '../../constants/colors';



export const ItStaffingWrapper = styled.div`
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

    .section2-inner-container {
        margin-top:100px;
    
      @media (max-width: ${BREAKPOINT.sm}) {
        margin-top:0px;
      }
    }
    .section2-inner {
      display:flex;
      justify-content:space-between;
      margin-top:40px;
      @media (max-width: ${BREAKPOINT.sm}) {
        flex-direction: column;
        min-width:100%;
      }
    }
    .section2-title {
      margin-bottom: 16px;
    //   @media (max-width: ${BREAKPOINT.sm}) {
    //     text-align: start;
    //   }
    }
    .section2-left-container {
        background-color: ${COLORS.lightViolet};
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        max-width: 30%;
        padding: 20px;
        @media (max-width: ${BREAKPOINT.sm}) {
          max-width: 100%;
          margin-bottom:30px;
        }
    }
    .section2-right-container {
         max-width: 65%;
         padding:20px;
         border:1px solid ${COLORS.white};
         border-radius:16px;
      
      @media (max-width: ${BREAKPOINT.sm}) {
        max-width: 100%;
        // flex-direction: column;
      }
    }
    .section2-bg-image {
      background-image: url(${SolutionsBg});
      background-size: cover;
      background-repeat: no-repeat;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      @media (max-width: ${BREAKPOINT.sm}) {
        width: 100%;
        flex-direction: column;
      }
    }
    .section2-text-container {
      margin-left: 40px;
      width: 50%;
      margin-right: 60px;
      @media (max-width: ${BREAKPOINT.sm}) {
        width: 100%;
        flex-direction: column;
        margin-right: 0px;
      }
    }
  }

  .section3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: linear-gradient(180deg, #9186C9 -28.99%, #DCE3EC 50.29%);
    max-width: 100%;
    padding-top: 60px;
    padding-bottom: 60px;
    @media (max-width: ${BREAKPOINT.sm}) {
        width: 100%;
        flex-direction: column;
        padding:0;
    }
    .section3-title-container {
      max-width:60%;
      align-items:flex-start;
      @media (max-width: ${BREAKPOINT.sm}) {
        max-width: 100%;
      }
    }
    .section3-inner-container {
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 68%;
      @media (max-width: ${BREAKPOINT.sm}) {
        padding:20px;
        flex-direction: column;
        align-items: start;
        justify-content: flex-start;
        min-width:100%;
      }
    }
    .section3-left-container {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background-color: ${COLORS.carbon};
      padding: 60px;
      width: 45%;
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
      width: 30%;
      height: 80vh;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      flex: 1;
      background: linear-gradient(180deg, #DCE3EC 0%, #9186C9 100%);
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
      // mix-blend-mode: screen;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
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
