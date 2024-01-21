import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RoadImage from "../../assets/Road.svg";
import HeroImage1 from "../../assets/QF-Hero.svg";
import BuildingImage1 from "../../assets/Building-1.svg"
import BuildingImage2 from "../../assets/Building-2.svg"
import BuildingImage3 from "../../assets/Building-3.svg"
import BuildingImage4 from "../../assets/Building-4.svg"
import AppDev from "../../assets/appdev.svg"
import Logo from "../../assets/QuantmFy-logo.svg";
import COLORS from "../../constants/colors";
import "./HomePage.css";
import Navbar from "../../components/Navigation/Navbar";
import Typography from "../../constants/textStyle";
import Footer from '../Footer/Footer'
import { useState } from "react";
import OffCanvasMenu from "../../components/OffCanvasMenu";
import MenuIcon from "../../assets/Hamburger Menu Icon.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HomePageTrail() {
  const [isHamburgerOpen, setHamburgerOpenState] = useState(false);

  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          // Ensure that the end point considers the total width of the slider
          end: () => "+=" + slider.current.offsetWidth - window.innerWidth,
          markers: true, // Enable markers for debugging
  
        },
      });
    }, component);
    return () => ctx.revert();
  });

  const clickHamburgerMenu = () => {
    setHamburgerOpenState(!isHamburgerOpen);
  };

  const closeHamburgerMenu = () => {
    setHamburgerOpenState(false);
  };

  return (
    <div className="App" ref={component}>
      <div className="gradient" ref={slider}>
        <div className="panel">
          <div style={{
            backgroundImage: `url(${RoadImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: 'auto',
          }}>
            <div style={{ paddingLeft: 90, top: 0 }}
            >
              <img height={116} width={91} src={Logo} />
              <div style={{ maxWidth: '48%' }}>
                <p style={{ fontSize: 48, fontWeight: 300, margin: 0, marginTop: 24, letterSpacing: -3, lineHeight: 'normal' }}>The go-to technology partner for spirited startups to corporate heavyweights.</p>
                <p style={{ marginTop: 24, marginBottom: 24, fontSize: 16, fontWeight: 400 }}>We offer white-glove service driving high-quality, custom technology solutions that solve your unique challenges.</p>
                <button style={{ backgroundColor: COLORS.carbon, padding: 10, color: COLORS.white, borderRadius: 4, border: "none", textTransform: 'uppercase', fontSize: 14, fontWeight: 600, minHeight: 44, marginBottom: 30 }}>EXPLORE QUANTMFY CITY</button>
              </div>
            </div>
          </div>
        </div>
        <div className="panel">
          <Footer />
        </div>
      </div>
      <OffCanvasMenu isMenuOpen={isHamburgerOpen} closeHamburgerMenu={closeHamburgerMenu} />
    </div>
  );
}
