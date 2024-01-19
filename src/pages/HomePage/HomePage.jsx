import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Logo from "../../assets/QuantmFy-logo.svg";
import HeroImage1 from "../../assets/QF-Hero.svg";
import COLORS from "../../constants/colors";
import "./HomePage.css";
import Navbar from "../../components/Navigation/Navbar";
import RoadImage from "../../assets/Road.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
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
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: false
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div ref={slider}>
      <img src={RoadImage}  alt="road" />
        <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start' }} className="description panel blue">
          <div style={{ paddingLeft: 90}}>
            <div style={{ padding: 12, maxWidth: 91, paddingTop: 0, backgroundColor: COLORS.logoViolet }}>
              <img height={116} width={91} src={Logo} />
            </div>
            <div style={{maxWidth:'80%'}}>
              <p style={{ fontSize: 60, fontWeight: 300, margin: 0, letterSpacing: -3}}>The go-to technology partner for spirited startups to corporate heavyweights.</p>
              <p style={{ marginTop: 24, marginBottom: 24, fontSize: 22, fontWeight: 400 }}>We offer white-glove service driving high-quality, custom technology solutions that solve your unique challenges.</p>
              <button style={{ backgroundColor: COLORS.carbon, padding: 10, color: COLORS.white, borderRadius: 4, border: "none", textTransform: 'uppercase', fontSize: 14, fontWeight: 600, minHeight: 44 }}>EXPLORE QUANTMFY CITY</button>
            </div>
          </div>
          <div>
              <object width={590} height={534} type="image/svg+xml" data={HeroImage1} alt='animi-1' />
          </div>          
        </div>
        <div style={{backgroundColor:'red'}} className="panel red">ONE</div>
        <div style={{backgroundColor:'pink'}} className="panel orange">TWO</div>
        <div style={{backgroundColor:'skyblue'}} className="panel purple">THREE</div>
      </div>
      {/* <div className="lastContainer">Last Container</div> */}
    </div>
  );
}
