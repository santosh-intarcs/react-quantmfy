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

gsap.registerPlugin(ScrollTrigger);

export default function HomePageTrail() {
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

  return (
    <div className="App" ref={component}>
      <div className="gradient" ref={slider}>
        <div className="description panel">
          <div style={{ position: "relative" }}>
            <img src={RoadImage} alt="road" height={window.innerHeight} style={{ objectFit: "cover" }} />
          </div>
          <div style={{ paddingLeft: 90,position:'absolute',top:0}}>
              <img height={116} width={91} src={Logo} />
            <div style={{maxWidth:'48%'}}>
              <p style={{ fontSize: 60, fontWeight: 300, margin: 0, letterSpacing: -3,lineHeight:1}}>The go-to technology partner for spirited startups to corporate heavyweights.</p>
              <p style={{ marginTop: 24, marginBottom: 24, fontSize: 22, fontWeight: 400 }}>We offer white-glove service driving high-quality, custom technology solutions that solve your unique challenges.</p>
              <button style={{ backgroundColor: COLORS.carbon, padding: 10, color: COLORS.white, borderRadius: 4, border: "none", textTransform: 'uppercase', fontSize: 14, fontWeight: 600, minHeight: 44 }}>EXPLORE QUANTMFY CITY</button>
              <Navbar />
            </div>
          </div>
          <div style={{ position: "absolute", top: '-6%', left: '66%', zIndex: 1 }}>
            <object width={400} height={534} type="image/svg+xml" data={HeroImage1} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", bottom: 0, left: '85%', zIndex: 1 }}>
            <img height={120} type="image/svg+xml" src={BuildingImage1} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", bottom: '16%', left: '100%', zIndex: 1 }}>
            <img width={205} type="image/svg+xml" src={BuildingImage2} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", top: '-12%', left: '103%', zIndex: 1 }}>
            <img width={250} height={204} type="image/svg+xml" src={BuildingImage3} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", top: '-4%', left: '120%', zIndex: 1 }}>
            <img width={300} height={174} type="image/svg+xml" src={BuildingImage4} aria-hidden alt="animi-1" />
          </div>
          <div style={{ position: "absolute", bottom: '16%', left: '128%', zIndex: 1 }}>
            <object width={500} height={350} type="image/svg+xml" data={AppDev} aria-hidden alt="animi-1" />
          </div>
        </div>
        
        <div className="panel">
        </div>
        <div className="panel"></div>
        <div className="panel"></div>
      </div>
    </div>
  );
}
