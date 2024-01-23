import styled from 'styled-components';
import HeroImage from '../../assets/Appdev/Hero-BG.svg'
import SolutionsBg from '../../assets/Appdev/Solutions-BG.svg';
import { BREAKPOINT } from '../../constants/breakpoints';



export const TechnoConsultingWrapper = styled.div`
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
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media (max-width: ${BREAKPOINT.sm}) {
        flex-direction: column;
      }
    }
    .section2-title {
      margin-bottom: 16px;
      text-align: center;
      @media (max-width: ${BREAKPOINT.sm}) {
        text-align: start;
      }
    }
    .section2-left-container {
      max-width: 65%;
      @media (max-width: ${BREAKPOINT.sm}) {
        min-width: 100%;
      }
    }
    .section2-right-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      max-width: 65%;
      margin-top: 20px;
      @media (max-width: ${BREAKPOINT.sm}) {
        max-width: 100%;
        flex-direction: column;
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
      background-color: #ffffff;
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
      background: linear-gradient(180deg, #9186C9 0%, #0C113A 100%);
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
      background: #102D97;
      mix-blend-mode: screen;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: ${BREAKPOINT.sm}) {
        background: none;
        height:300px;
        padding:0; 
      }
    }
  }

  .mb-16 {
    margin-bottom: 16px;
  }
`;
