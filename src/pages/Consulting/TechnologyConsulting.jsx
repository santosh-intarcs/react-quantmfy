import React, { Fragment } from "react";
import HeroImage from '../../assets/Appdev/Hero-BG.svg'
import QFLogo from '../../assets/QuantmFy-logo.svg';
import Typography from "../../constants/textStyle";
import AppDev from "../../assets/appdev.svg"
import COLORS from "../../constants/colors";
import SolutionsBg from '../../assets/Appdev/Solutions-BG.svg';
import Footer from "../Footer/Footer";
import ExperiencedConsultant from '../../assets/TechnoConsulting/Experienced-Consultants.svg';
import NavbarVertical from "../../components/Navigation/NavbarVertical";
import SectionButton from "../../components/SectionButton";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TechStrategy from '../../assets/TechnoConsulting/Technology-Strategy.svg';


const NavItems = [
  {
    label: 'Strategy',
    id: 1,
    sectionId: 'strategy-section',
  },
  {
    label: 'how we help',
    id: 2,
    sectionId: 'how-we-help-section',
  },
  {
    label: 'Contact',
    id: 3,
    sectionId: 'contact-section',
  },
];



const TechnologyConsultantPage = () => {
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
    <Fragment>
      <SectionButton />
      <div style={{
        position: 'fixed',
        right: '4%',
        top: '30%',

      }}>
        <NavbarVertical array={NavItems} activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
      <div style={{
        background: 'linear-gradient(360deg, #F4F9DD 53.58%, #669085 119.27%)',
        padding: 0,
        margin: 0,
      }}>
        <section>
          <div style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '90vh',
            paddingLeft: 130,
            paddingRight: 130,
          }}>
            <div>
              <img src={QFLogo} height={100} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="para" style={{ maxWidth: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <p style={Typography.headingM} ref={titleTextRef}>Strategic technology advice to help you grow your business</p>
                  <div style={{ marginTop: 40 }}>
                    <object data={AppDev} width={420} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <------------------------------- section 2 -------------------------> */}
        <section id="strategy-section" ref={sectionRefs[1]}>
          <div style={{
            flexDirection: 'row',
            maxWidth: '100%',
            paddingLeft: 130,
            marginTop: 80,
            paddingBottom: 60
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div style={{ maxWidth: '65%' }}>

                <p style={{ ...Typography.headingS, marginBottom: 16, textAlign: 'center' }}>We understand the importance of developing a technology strategy that aligns with your business goals and delivers tangible value to your organization.</p>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                maxWidth: '65%',
                marginTop: 20
              }}>
                <div style={{
                  backgroundImage: `url(${SolutionsBg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  // backgroundPosition: 'center',
                  width: '50%',
                  // paddingRight: 130,
                  display: 'flex',
                  justifyContent: 'end'

                }}>
                  <img src={ExperiencedConsultant} />
                </div>
                <div style={{ marginLeft: 40, width: '50%', marginRight: 60 }}>
                  <p style={{ ...Typography.headingXs, marginBottom: 16 }}>Experienced consultants</p>
                  <p style={{ ...Typography.bodyS }}>Our experienced, senior-level technology consultants provide strategic advisory services to help your leadership teams define long-term technology strategies and solutions that propel your business forward.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <------------------------------------------- section 3 -------------------------------------> */}
      <section id="how-we-help-section" ref={sectionRefs[2]}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          background: 'linear-gradient(180deg, #9186C9 -28.99%, #DCE3EC 50.29%)',
          // padding: 120,
          maxWidth: '100%',
          paddingTop: 60,
          paddingBottom: 60,
        }}>
          <div style={{ borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '68%', }}>
            <div style={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              backgroundColor: COLORS.white,
              padding: 60,
              width: '45%',
              height: '80vh',
            }}>
              <p style={{ ...Typography.label, marginBottom: 16 }}>Here’s how we can help</p>
              <p style={{ ...Typography.headingS, marginBottom: 16 }}>Technology strategy</p>
              <p style={{ ...Typography.bodySbold, marginBottom: 16 }}>Our technology strategists help you identify and implement the most effective technology solutions to meet your business’s unique needs.</p>
              <p style={{ ...Typography.bodyS, marginBottom: 16 }}>Our experienced consultants work closely with your team to create a comprehensive technology strategy that aligns with your business goals and objectives. We provide expert guidance on technology trends and best practices, enabling you to make informed decisions and achieve long-term success.</p>
            </div>
            <div style={{
              width: '30%',
              height: '80vh',
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              flex: 1,
              background: 'linear-gradient(180deg, #9186C9 0%, #0C113A 100%)',
              padding: 32,
            }}>
              <div style={{
                width: 420,
                height: 416,
                background: '#102D97',
                mixBlendMode: 'screen',
                padding1: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

              }}>
                <img src={TechStrategy} width={420} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------- footer -------------------------------------> */}
      <section id="contact-section" ref={sectionRefs[3]}>
        <Footer />
      </section>

    </Fragment >
  )
}

export default TechnologyConsultantPage;