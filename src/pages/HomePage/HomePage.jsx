import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RoadImage from "../../assets/Road.svg";
import HeroImage1 from "../../assets/QF-Hero.svg";
import BuildingImage1 from "../../assets/Building-1.svg"
import BuildingImage2 from "../../assets/Building-2.svg"
import BuildingImage3 from "../../assets/Building-3.svg"
import BuildingImage4 from "../../assets/Building-4.svg"
import BuildingImage5 from "../../assets/Building-5.svg"
import AppDev from "../../assets/appdev.svg"
import Logo from "../../assets/QuantmFy-logo.svg";
import COLORS from "../../constants/colors";
import "./HomePage.css";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../Footer/Footer";
import Typography from "../../constants/textStyle";
import TreeSet from "../../assets/Tree-set.svg";
import DeepKnowledge from '../../assets/Deep Knowledge.svg';
import SuperiorValue from '../../assets/Superior-value.svg';
import Stack from '../../assets/Stack.svg';
import MenuIcon from "../../assets/Hamburger Menu Icon.svg";
import OffCanvasMenu from "../../components/OffCanvasMenu";
import { useState } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
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
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth - window.innerWidth,
          markers: false,
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
        <div className="description panel">
          <div style={{ position: "relative" }}>
            <img src={RoadImage} alt="road" height={window.innerHeight} style={{ objectFit: "cover" }} />
          </div>
          <div style={{ paddingLeft: 90, position: 'absolute', top: 0 }}>
            <img height={116} width={91} src={Logo} />
            <div style={{ maxWidth: '48%' }}>
              <p style={{ fontSize: 48, fontWeight: 300, margin: 0, marginTop: 24, letterSpacing: -3, lineHeight: 'normal' }}>The go-to technology partner for spirited startups to corporate heavyweights.</p>
              <p style={{ marginTop: 24, marginBottom: 24, fontSize: 16, fontWeight: 400 }}>We offer white-glove service driving high-quality, custom technology solutions that solve your unique challenges.</p>
              <button style={{ backgroundColor: COLORS.carbon, padding: 10, color: COLORS.white, borderRadius: 4, border: "none", textTransform: 'uppercase', fontSize: 14, fontWeight: 600, minHeight: 44, marginBottom: 30 }}>EXPLORE QUANTMFY CITY</button>
              <div style={{ minWidth: '100%'}}>
                <div style={{ display: 'flex',alignItems:'start', justifyContent: 'space-between',marginTop:70 }}>
                  <Navbar />
                  <button
                    onClick={clickHamburgerMenu}
                    style={{
                      marginLeft:120,
                      backgroundColor: COLORS.carbon,
                      padding: 10,
                      color: COLORS.white,
                      border: "none",
                      cursor: 'pointer',
                      borderRadius: 4,
                      textTransform: 'uppercase',
                      fontSize: 14,
                      fontWeight: 600,
                      // minHeight: 28,
                      marginBottom: 30,
                      display: 'flex',
                      alignItems: 'center',
                      
                    }}>Menu <img src={MenuIcon} width={16} style={{ marginLeft: 10 }} height={24} /></button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", top: '0%', left: '70%', zIndex: 1 }}>
            <object width={400} height={534} type="image/svg+xml" data={HeroImage1} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", bottom: '2%', left: '89%', zIndex: 1 }}>
            <img height={120} type="image/svg+xml" src={BuildingImage1} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", bottom: '18%', left: '102%', zIndex: 1 }}>
            <img width={205} type="image/svg+xml" src={BuildingImage2} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", top: '-10%', left: '106%', zIndex: 1 }}>
            <img width={250} height={204} type="image/svg+xml" src={BuildingImage3} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", top: '-4%', left: '125%', zIndex: 1 }}>
            <img width={300} height={174} type="image/svg+xml" src={BuildingImage4} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", top: '28%', left: '110%', zIndex: 2 }}>
            <p style={{ ...Typography.label, marginBottom: 16 }}>Discover our services</p>
            <p style={{ ...Typography.headingL, marginBottom: 16 }}>Application Development</p>
            <p style={{ ...Typography.bodyL }}>Grow your business with reliable, secure custom software applications</p>
          </div>
          <div style={{ position: "absolute", bottom: '16%', left: '130%', zIndex: 1 }}>
            <object width={500} height={350} type="image/svg+xml" data={AppDev} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", top: '48%', left: '180%', zIndex: 2, width: 450 }}>
            <p style={{ ...Typography.label, marginBottom: 16 }}>technical expertise you need</p>
            <p style={{ ...Typography.headingL, marginBottom: 16 }}>Deep Knowledge</p>
            <p style={{ ...Typography.bodyL }}>Our team of highly skilled developers, IT professionals, and solution strategists brings a wealth of knowledge to your business</p>
          </div>
          <div style={{ position: "absolute", bottom: '5%', left: '162%', zIndex: 1 }}>
            <img width={230} src={TreeSet} alt="animi-1" />
          </div>
          <div style={{ position: "absolute", top: '-4%', left: '145%', zIndex: 1 }}>
            <img height={230} src={BuildingImage5} alt="animi-1" />
          </div>
          <div style={{ position: "absolute", bottom: '16%', left: '208%', zIndex: 1 }}>
            <object width={500} height={350} type="image/svg+xml" data={DeepKnowledge} aria-hidden alt="animi-1" />
          </div>
          <div style={{
            position: "absolute",
            top: '5%',
            left: '244%',
            height: '100%',

            zIndex: 1
          }}>
            <div style={{
              background: 'linear-gradient(180deg, #F4F9DD 0%, #669085 100%)',
              borderRadius: 16,
              minWidth: '50vw',
              height: '80%',
              padding: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}>
              <div style={{ marginBottom: 50 }}>
                <img src={SuperiorValue}></img>
              </div>
              <div style={{ maxWidth: 400 }}>
                <p style={{ ...Typography.label, marginBottom: 16, textAlign: 'center' }}>Here's what you can expect</p>
                <p style={{ ...Typography.headingL, marginBottom: 16, textAlign: 'center' }}>Superior value</p>
                <p style={{ ...Typography.bodyL, textAlign: 'center' }}>We deliver cost-efficient technology solutions without compromising on quality.</p>
              </div>
            </div>
          </div>
          <div style={{
            position: "absolute",
            top: '10%',
            left: '298%',
            height: '100%',
            width: '32vw',
            zIndex: 2
          }}>
            <p style={{ ...Typography.label, marginBottom: 16, }}>Industry expertise</p>
            <p style={{ ...Typography.headingS, marginBottom: 16 }}>Our track record delivering custom applications and IT services for numerous industries gives you peace-of-mind that you’re in the best hands.</p>
            <p style={{ ...Typography.bodyS }}>We understand the unique requirements across a range of industries—enabling us to deliver highly flexible, secure, and interoperable applications that accelerate workflows, boost revenues, and optimize business operations, efficiently and cost effectively.</p>
          </div>
          <div style={{ position: "absolute", top: '0%', left: '330%', zIndex: 1 }}>
            <img height={600} src={Stack} alt="animi-1" />
          </div>
          <div style={{
            position: "absolute",
            top: '10%',
            left: '348%',
            height: '100%',
            width: '32vw',
            zIndex: 2
          }}>
            <p style={{ ...Typography.label, marginBottom: 16, }}>how we stack up</p>
            <p style={{ ...Typography.headingS, marginBottom: 16 }}>“As a tech novice, Arealtek was able to help me define the scope of my project and bring it to life in a difficult corporate environment. They were always pleasant, patient, on time and on budget.”</p>
            <p style={{ ...Typography.bodyS }}>Senior Vice President, Leading wholesale distributor of specialty insurance</p>
          </div>
          <div style={{ position: "absolute", top: '0%', left: '390%', zIndex: 1 }}>
            <Footer />
          </div>
        </div>
        <div className="panel">
        </div>
        <div className="panel"></div>
        <div className="panel"></div>
        <div className="panel"></div>
      </div>
      <OffCanvasMenu isMenuOpen={isHamburgerOpen} closeHamburgerMenu={closeHamburgerMenu} />

    </div>
  );
}