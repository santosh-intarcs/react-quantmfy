import { useState } from "react";
import OffCanvasMenu from "./OffCanvasMenu";
import COLORS from "../constants/colors";
import MenuIcon from "../assets/Hamburger Menu Icon.svg";


const SectionButton = () => {
    const [isHamburgerOpen, setHamburgerOpenState] = useState(false);
  
    const clickHamburgerMenu = () => {
      setHamburgerOpenState(!isHamburgerOpen);
    };
  
    const closeHamburgerMenu = () => {
      setHamburgerOpenState(false);
    };
    return (
      <>
        <button
          onClick={clickHamburgerMenu}
          style={{
            backgroundColor: COLORS.carbon,
            position: 'fixed',
            right: '4%',
            bottom: '5%',
            padding: 10,
            color: COLORS.white,
            border: "none",
            cursor: 'pointer',
            borderRadius: 4,
            textTransform: 'uppercase',
            fontSize: 14,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'end'
          }}>Menu <img src={MenuIcon} width={16} style={{ marginLeft: 10 }} height={24} /></button>
        <OffCanvasMenu isMenuOpen={isHamburgerOpen} closeHamburgerMenu={closeHamburgerMenu} />
      </>
    );
  };

  export default SectionButton;