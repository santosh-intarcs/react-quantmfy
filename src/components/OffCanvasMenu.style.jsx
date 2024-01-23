import styled from "styled-components";
import { BREAKPOINT } from "../constants/breakpoints";
import COLORS from "../constants/colors";

export const OffCanvasMenuStyleWrapper = styled.div`
    display:flex;
  .logo-container {
    background-color: ${COLORS.carbon};
    width: 50%;
    min-height: 100vh;
    padding-left: 112px;
    display: flex;
    flex-direction: column;
    
    @media (max-width: ${BREAKPOINT.sm}) {
      flex-direction: column;
      min-height: auto;
      width: 100%;
      padding: 20px;
    }
  }

  .logo {
    width: 64px;
    height: 102px;
    
    @media (max-width: ${BREAKPOINT.sm}) {
      width: 64px;
      height: 103px;
    }
  }

  .menu-container {
    // display: flex;
    
    @media (max-width: ${BREAKPOINT.sm}) {
      flex-direction: column;
    }
  }

  .content-container {
    background: linear-gradient(180deg, #F4F9DD 0%, #E7D7DD 100%);
    min-width: 50%;
    min-height: 100vh;
    padding-left: 112px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    @media (max-width: ${BREAKPOINT.sm}) {
      min-width: auto;
      padding: 20px;
    }
  }

  .menu-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .button-style {
    background-color: transparent;
    padding: 16px;
    color: ${COLORS.carbon};
    border-radius: 4px;
    border: 2px solid;
    border-color: ${COLORS.carbon};
    margin-bottom: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 60px;
  }

  .close-button {
    background-color: ${COLORS.white};
    padding: 10px;
    color: ${COLORS.carbon};
    border-radius: 4px;
    border: 2px solid;
    border-color: ${COLORS.carbon};
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`;

export const ListingWrapper = styled.div`
`;