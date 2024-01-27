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
import WebArchitecture from '../../assets/webDev/Web-Architecture.svg';
import { PillsWrapper, WebDevelomentWrapper } from "./WebDevelopment.styles";
import LinkArrowBlack from '../../assets/Link-arrow.svg'
import HeaderPill from "../../components/HeaderPill";


const Pills = ({ label }) => {
  return (
    <PillsWrapper>
      <Label>{label}</Label>
    </PillsWrapper>
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
    label:'Partner',
    id:3,
    sectionId:'partner-with-qf'
  },
  {
    label: 'Contact',
    id: 4,
    sectionId: 'contact-section',
  },
];



const WebDevelopmentPage = () => {
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
    <WebDevelomentWrapper>
      <SectionButton />
      <div className="nav-style">
        <NavbarVertical array={NavItems} activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
      <div style={{
        background: 'linear-gradient(180deg, rgba(145, 134, 201, 0.17) 0%, #5376A3 100%)',
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
                  <HeaderPill label='Data Analytics' />
                  <HeadingM ref={titleTextRef}>Strengthen your technology operations and scale faster</HeadingM>
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
                <HeadingS style={{ textAlign: 'left' }} className="section2-title">Arealtek specializes in crafting immersive, user-centric websites that captivate your audience and drive meaningful engagement and conversions.</HeadingS>
                <BodyM style={{ textAlign: 'left' }}>Our experienced website strategists, developers and designers create and maintain websites of any size to align with your business goals and technology requirements and make your web content the successful core of your marketing strategy.</BodyM>
              </div>
              <div className="section2-inner">
                <div className="section2-content-container">
                  <Label className="section2-title">Our Web Development Services</Label>
                  <div style={{ display: 'flex', justifyContent: "start", flexWrap: 'wrap' }}>
                    <Pills label='DevOps' />
                    <Pills label='Architecture' />
                    <Pills label='Artificial intelligence' />
                    <Pills label='Data science' />
                    <Pills label='IT operations' />
                    <Pills label='Application modernization' />
                    <Pills label='Internet of things' />
                    <Pills label='Identity & access management' />
                    <Pills label='Software engineering' />
                    <Pills label='Mobile applications' />
                    <Pills label='Cloud computing' />
                    <Pills label='Artificial intelligence' />
                    <Pills label='Content management systems' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <------------------------------------------- section 3 -------------------------------------> */}
      <section id="partner-with-qf" ref={sectionRefs[2]}>
        <div className="section3">
          <div className="section3-inner-container">
            <div className="section3-left-container">
            <div className="section3-image">
                <img src={WebArchitecture} />
              </div>
            </div>
            <div className="section3-right-container">
            <Label className="mb-16">Our services</Label>
              <HeadingXs className="mb-16">Website Development Services</HeadingXs>
              <BodyM className="mb-16">Our team of experienced website developers combines creativity and technical expertise to deliver bespoke web solutions tailored to your unique business needs.</BodyM>
              <BodyS className="mb-16">From intuitive navigation and responsive design to seamless integration of cutting-edge functionalities, we ensure your website employs exceptional usability, stands out from the crowd and leaves a lasting impression. Whether you require a sleek corporate site or a dynamic e-commerce site, our website development services will elevate your online presence and empower your business to thrive.</BodyS>
            </div>
          </div>
        </div>
      </section>
      <section id="how-we-help-section" ref={sectionRefs[3]}>
        <div className="section4">
          <div className='section4-inner-container'>
          <HeadingS className="mb-16" style={{textAlign:'center'}}>Partner with QuantmFy</HeadingS>
          <BodyS className="mb-16" style={{textAlign:'center'}}>Elevate your online presence, differentiate yourself from the competition, and leave a lasting impression on your target audience with QuantmFy’s web development services.</BodyS>
          <div className="section4-link">
            <BodyM>Tell us about your project</BodyM>
            <img src={LinkArrowBlack} style={{ marginLeft: 10 }} width={28} />
          </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------- footer -------------------------------------> */}
      <section id="contact-section" ref={sectionRefs[4]}>
        <Footer />
      </section>
    </WebDevelomentWrapper>
  )
}

export default WebDevelopmentPage;