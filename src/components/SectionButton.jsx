import { useState } from "react";
import OffCanvasMenu from "./OffCanvasMenu";
import MenuIcon from "../assets/Hamburger Menu Icon.svg";
import { SectionButtonWrapper } from "../pages/AppDevelopment/AppDevelopment.styles";


const SectionButton = () => {
    const [isHamburgerOpen, setHamburgerOpenState] = useState(false);
  
    const clickHamburgerMenu = () => {
      setHamburgerOpenState(!isHamburgerOpen);
    };
  
    const closeHamburgerMenu = () => {
      setHamburgerOpenState(false);
    };
    return (
      <SectionButtonWrapper>
        <button
          onClick={clickHamburgerMenu}
          className='menu-button'>Menu <img src={MenuIcon} width={16} className="menu-icon" height={24} /></button>
        <OffCanvasMenu isMenuOpen={isHamburgerOpen} closeHamburgerMenu={closeHamburgerMenu} />
      </SectionButtonWrapper>
    );
  };

  export default SectionButton;