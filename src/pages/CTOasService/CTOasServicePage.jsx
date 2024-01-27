import React from "react";
import QFLogo from '../../assets/QuantmFy-logo.svg';
import AppDev from "../../assets/appdev.svg"
import Footer from "../Footer/Footer";
import NavbarVertical from "../../components/Navigation/NavbarVertical";
import SectionButton from "../../components/SectionButton";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BodyM, BodyS, BodySbold, HeadingM, HeadingS, HeadingXs, Label } from "../../constants/TypographyStyles";
import LinkArrowBlack from '../../assets/Link-arrow.svg'
import SkillImage from '../../assets/ItStaffing/Skill.svg';
import { CTOasServiceWrapper, PillsWrapper } from "./CTOasServiceWrapper.styles";
import COLORS from "../../constants/colors";


const Pills = ({ label }) => {
  return (
    <div style={{
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 8,
      paddingBottom: 8,
      marginBottom: 16,
      marginRight: 16,
      borderRadius: 50,
      border: '1px solid',
      borderColor: COLORS.carbon,
      display: 'inline-flex',
      width: 'fit-content',
    }}>
      <Label style={{ marginLeft: 10, textAlign: 'center' }}>{label}</Label>
    </div>
  );
}


const NavItems = [
  {
    label: 'Staffing',
    id: 1,
    sectionId: 'strategy-section',
  },
  {
    label: 'Our Approach',
    id: 2,
    sectionId: 'how-we-help-section',
  },
  {
    label: 'Partner',
    id: 3,
    sectionId: 'partner-with-qf'
  },
  {
    label: 'Contact',
    id: 4,
    sectionId: 'contact-section',
  },
];



const CTOasServicePage = () => {
  const [activeItem, setActiveItem] = useState(1);
  const titleTextRef = useRef(null);
  const sectionRefs = NavItems.reduce((acc, item) => {
    acc[item.id] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(titleTextRef.current.children, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.2
    })
  }, [])

  const handleItemClick = (itemId, sectionId) => {
    setActiveItem(itemId);

    // Scroll to the corresponding section using the ref
    const sectionRef = sectionRefs[itemId];
    if (sectionRef && sectionRef.current) {
      const offsetTop = sectionRef.current.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }

  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = NavItems.reduce((acc, item) => {
        const section = document.getElementById(item.sectionId);
        if (section) {
          acc[item.id] = section.offsetTop;
        }
        return acc;
      }, {});

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let activeItemId = 1;
      for (const [itemId, offset] of Object.entries(sectionOffsets)) {
        if (scrollPosition >= offset) {
          activeItemId = parseInt(itemId, 10);
        }
      }
      setActiveItem(activeItemId);
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CTOasServiceWrapper>
      <SectionButton />
      <div className="nav-style">
        <NavbarVertical array={NavItems} activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
      <div style={{
        background: 'linear-gradient(180deg, #9186C9 0%, #DCE3EC 70.31%, #E7D7DD 100%)',
        padding: 0,
        margin: 0,
      }}>
        <section>
          <div className="section1">
            <div>
              <img src={QFLogo} height={100} />
            </div>
            <div>
              <div className="section1-container">
                <div className="section1-inner-container">
                  <HeadingM ref={titleTextRef}>Fractional CTOs empowering small businesses for growth </HeadingM>
                  <div style={{ marginTop: 40 }}>
                    <object data={AppDev} className="section1-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <------------------------------- section 2 -------------------------> */}
        <section id="strategy-section" ref={sectionRefs[1]}>
          <div className="section2">
            <div className="section2-inner-container">
              <div className="section2-title-container" style={{ maxWidth: '60%', alignItems: 'flex-start' }}>
                <HeadingS style={{ textAlign: 'left' }} className="section2-title">Looking for affordable technology guidance for your business?</HeadingS>
                <BodyS style={{ textAlign: 'left' }}>If your CTO role is vacant or if you need project-based executive expertise, Arealtek’s CTO-as-a-Service gives you the experience and knowledge of a CTO without the high cost.</BodyS>
              </div>
              <div className="section2-inner">
                <div style={{ display: 'flex', justifyContent: 'center', }}>
                  <div style={{ backgroundColor: COLORS.pink, paddingLeft: 60, paddingRight: 60, borderTopLeftRadius: 18, borderBottomLeftRadius: 18, minHeight: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                      <HeadingS>Experienced CTOs, ready-to-go</HeadingS>
                      <BodyS>Our seasoned CTOs are ready to step in and assume leadership responsibilities at a moment's notice, to help your team address technology challenges and drive key initiatives. All of our CTOs are experts who ramp-up quickly and are ready from day one to contribute as key members of your leadership team.</BodyS>
                    </div>
                  </div>
                  <div style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20, backgroundColor: COLORS.yellow, padding: 50, paddingRight: 0 }}>
                    <Label style={{ marginBottom: 24 }}>Our CTO’s can help your business in a range of ways:</Label>
                    <Pills label='Technology planning' />
                    <Pills label='Project roadmaps' />
                    <Pills label='Hiring technology teams' />
                    <Pills label='Governance' />
                    <Pills label='Managing technology teams' />
                    <Pills label='Security audits' />
                    <Pills label='Infrastructure planning' />
                    <Pills label='Cost optimization' />
                    <Pills label='Cybersecurity' />
                    <Pills label='Risk management' />
                    <Pills label='Overseeing IT budgets' />
                    <Pills label='Product planning' />
                    <Pills label='Board participation' />
                    <Pills label='Digital transformation' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* <------------------------------------------- section 3 -------------------------------------> */}
        <section id="how-we-help-section" ref={sectionRefs[2]}>
        <div className="section3">
          {/* <div className="section3-inner-container"> */}
            <div className="section3-left-container">
              <Label className="mb-16">Flexible engagements</Label>
              <HeadingS className="mb-16">We offer flexible engagements to help you manage your costs while still receiving the technical leadership your business needs.</HeadingS>
              <BodyS>Bringing in the expertise of a CTO can provide tremendous advantages to startups and small-to-medium businesses.</BodyS>
            </div>
            <div className="section3-right-container">
              <Label style={{color:COLORS.white}}>With our flexible IT staffing services, you can:</Label>
              <img src={SkillImage} />
              <BodyS style={{color:COLORS.white}}>Acquire skilled team members when you need them – for any timeframe.</BodyS>
            </div>
          {/* </div> */}
        </div>
      </section>
      </div>
      
      {/* <------------------------------------------- footer -------------------------------------> */}
      <section id="contact-section" ref={sectionRefs[4]}>
        <Footer />
      </section>
    </CTOasServiceWrapper>
  )
}

export default CTOasServicePage;