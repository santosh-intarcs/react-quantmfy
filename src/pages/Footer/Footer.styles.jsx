import styled from "styled-components";
import COLORS from "../../constants/colors";
import { BREAKPOINT } from "../../constants/breakpoints";

export const FooterWrapper = styled.div`
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(180deg, #F4F9DD 0%, #E7D7DD 100%);
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (max-width: ${BREAKPOINT.sm}) {
        flex-direction: column;
        height:auto;
        width:100%;
        padding:20px;
    }

    .inner-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      @media (max-width: ${BREAKPOINT.sm}) {
        flex-direction: column;
      }
    }

    .left-container {
      max-width: 40%;
      margin-right: 20px;
      @media (max-width: ${BREAKPOINT.sm}) {
        max-width:100%;
        margin: 0px;

      }
    }
    .footer-image {
        width:600px;
        margin-left:20px;
        padding:0;
        @media (max-width: ${BREAKPOINT.sm}) {
            margin-top:40px;
            margin-left:0px;
            width:100%;
        }
    }
    .form-container {
      background-color: ${COLORS.white}
      border-radius: 16px;
      // padding: 24px;
      @media (max-width: ${BREAKPOINT.sm}) {
        background-color: ${COLORS.white};
        border-radius: 16px;
        padding: 20px;
      }
    }
  }
`;



export const ContactFormWrapper = styled.div`
  @media (max-width: ${BREAKPOINT.sm}) {
    max-width: 100%;
  }

   .input-style {
    border: '2px solid';
    border-color: ${COLORS.carbon};
    border-radius: 4px;
    padding: 10px;
  }
   .container-style {
      margin-bottom: 12px;
      display: flex;
      width:100%;
      flex-direction: column;
    }

  .contact-form-container {
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.white};
    border-radius: 16px;
    padding:32px;
    @media (max-width: ${BREAKPOINT.sm}) {
      width:100%;
      padding:0px;
    }
  }

  .name-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${BREAKPOINT.sm}) {
        flex-direction: column;
        width:100%;
    }
  }

  .button {
    align-self: flex-end;
    width: 25%;
    background-color: ${COLORS.carbon};
    padding: 10px;
    color: ${COLORS.white};
    border-radius: 4px;
    border: none;
    text-transform: uppercase;
    font-size: 14px; 
    font-weight: 600;
    min-height: 44px;
    margin-bottom: 30px;
    @media (max-width: ${BREAKPOINT.sm}) {
      margin:0px;
      width:100%;
  }
  }
`;
