import React, { Fragment, useEffect, useState } from "react";
import QFLogo from '../../assets/QuantmFy-logo.svg';
import AppDev from "../../assets/appdev.svg"
import Checkicon from "../../assets/Appdev/Success-check.svg";
import COLORS from "../../constants/colors";
import ChallengeSvg from '../../assets/Appdev/challenge.svg';
import Strategy from '../../assets/Appdev/Strategy.svg';
import Idea from '../../assets/Appdev/Idea validation.svg';
import CustomAppDev from '../../assets/Appdev/Custom -application-development.svg';
import CustomCloud from '../../assets/Appdev/Custom-software-solutions-for-cloud.svg';
import DesktopWeb from '../../assets/Appdev/Desktop-web-mobile.svg';
import Industryspecific from '../../assets/Appdev/industry-group.svg';
import SysIntegration from '../../assets/Appdev/sys-integration.svg';
import Footer from "../Footer/Footer";
import NavbarVertical from "../../components/Navigation/NavbarVertical";
import { useRef } from "react";
import SectionButton from "../../components/SectionButton";
import { AppDevelopmentWrapper, ImageWrapperStyle } from "./AppDevelopment.styles";
import { BodyS,  HeadingM, HeadingS, Label } from "../../constants/TypographyStyles";
import HeaderPill from '../../components/HeaderPill'
import { Box, Container } from "@mantine/core";
import classes from './AppDevelopment.module.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const NavItems = [
  {
    label: 'Chanllenges',
    id: 1,
    sectionId: 'challenges-section',
  },
  {
    label: 'Team',
    id: 2,
    sectionId: 'team-section',
  },
  {
    label: 'Solutions',
    id: 3,
    sectionId: 'solution-section',
  },
  {
    label: 'Deep dive',
    id: 4,
    sectionId: 'deep-dive-section',
  },
  {
    label: 'Contact',
    id: 5,
    sectionId: 'contact-section',
  },
];

const LabelText = ({ label }) => {
  return (
    <div style={{
      backgroundColor: COLORS.yellow,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
      // marginBottom: 16,
      borderRadius: 50,
      display: 'inline-flex',
      width: 'fit-content',
      alignItems:'center',
    }}>
      <img src={Checkicon} width={18} />
      <Label style={{ marginLeft: 10, textAlign: 'center' }}>{label}</Label>
    </div>
  );
};

const ImageWrapper = ({ image, title }) => {
  return (
    <ImageWrapperStyle>
      <div className="image-container">
        <img src={image} width={175} alt={title} />
      </div>
      <Label style={{  textAlign: 'center', color: COLORS.white }}>{title}</Label>
    </ImageWrapperStyle>
  );
};



const AppDevelopmentPage = () => {
  const landingDescriptionRef = useRef(null);
  const [activeItem, setActiveItem] = useState(1);
  const sectionRefs = NavItems.reduce((acc, item) => {
    acc[item.id] = useRef(null);
    return acc;
  }, {});

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(landingDescriptionRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power4.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: landingDescriptionRef.current,
        start: "top 90%",
      },
    })

  }, []);

  return (
    // <AppDevelopmentWrapper>
    //   <SectionButton />
    //   <div className="nav-style">
    //     <NavbarVertical array={NavItems} activeItem={activeItem} handleItemClick={handleItemClick} />
    //   </div>
    //   <div>
    //     <div className="gradient">
    //       <section>
    //         <div className="section1">
    //           <div>
    //             <img src={QFLogo} className="qf-logo" />
    //           </div>
    //           <div>
    //             <div className="section1-container">
    //               <div className="section1-content">
    //                 <HeaderPill label='Custom Application Development' />
    //                 <HeadingM>Overcome your business challenges with reliable, custom software applications</HeadingM>
    //                 <div style={{ marginTop: 40 }}>
    //                   <object data={AppDev} className="section1-image" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //       <section id="challenges-section" ref={sectionRefs[1]}>
    //         <div className="section2">
    //           <div>
    //             <HeadingS className="mb-16">If you're facing a technology challenge and don't have the in-house resources to solve it, QuantmFy is here to help.</HeadingS>
    //             <BodyS className="mb-16">Our custom software development services help companies of every size realize a range of impactful business outcomes like</BodyS>
    //             <div style={{ display: 'flex', flexDirection: 'column' }}>
    //               <LabelText label={'Drive more revenue'} />
    //               <LabelText label={'Reduce operational costs'} />
    //               <LabelText label={'Increase productivity'} />
    //               <LabelText label={'Improve information flows'} />
    //               <LabelText label={'Streamline business operations'} />
    //               <LabelText label={'Make data more accessible'} />
    //             </div>
    //           </div>
    //           <div>
    //             <img src={ChallengeSvg} className="section2-image" />
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //     <section id="team-section" ref={sectionRefs[2]}>
    //       <div className="section3">
    //         <div className="section3-inner-container">
    //         <HeadingS className="section3-heading" style={{ marginBottom: 16, color: COLORS.white }}>Experienced Application Strategists and Developers</HeadingS>
    //         <BodyS className="section3-heading" style={{ marginBottom: 16, color: COLORS.white }}>Our experienced application development teams and strategists are committed to helping you overcome your unique business challenges in an efficient and cost-effective manner.</BodyS>
    //         <div className="section3-image-container">
    //           <ImageWrapper image={Strategy} title='Strategy' />
    //           <ImageWrapper image={Idea} title='Idea validation' />
    //           <ImageWrapper image={CustomAppDev} title='custom application' />
    //           <ImageWrapper image={CustomCloud} title='Custom software ' />
    //           <ImageWrapper image={DesktopWeb} title='Web and mobile' />
    //         </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="solution-section" ref={sectionRefs[3]}>
    //       <div className="section4">
    //         <div className="section4-container">
    //           <div className="section4-left-container">
    //             <Label style={{ marginBottom: 16 }}>Our Solutions</Label>
    //             <HeadingS style={{ marginBottom: 16 }}>Industry-specific platforms and portals to modernize delivery of services to customers and open new markets.</HeadingS>
    //           </div>
    //           <div>
    //             <img src={Industryspecific} className="section4-image" />
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="deep-dive-section" ref={sectionRefs[4]}>
    //       <div className="section5">
    //         <div className="section5-container">
    //           <div>
    //             <img src={SysIntegration} className="section5-image" objectFit={'cover'} />
    //           </div>
    //           <div className="section5-inner-container">
    //             <Label style={{  marginBottom: 16 }}>Deep dive</Label>
    //             <HeadingS style={{ marginBottom: 16 }}>System Integration Services</HeadingS>
    //             <BodyS style={{ marginBottom: 16 }}>Our team of experienced developers help you seamlessly connect your systems and applications with one another and with third-party platforms and applications.<br /><br />
    //               We can help you achieve a smooth and effective integration that will improve your overall business efficiency and take your business to the next level.</BodyS>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //     <section id="contact-section" ref={sectionRefs[5]}>
    //       <Footer />
    //     </section>
    //   </div>
    // </AppDevelopmentWrapper>
    <Box style={{background: 'linear-gradient(180deg, #9186C9 0%, #DCE3EC 61.46%)'}}>
      <Container size={1400} style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="section1-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
          <HeaderPill label='Custom Application Development' />
          <HeadingM ref={landingDescriptionRef}>Overcome your business challenges with reliable, custom software applications</HeadingM>
        </div>
        <div style={{ marginTop: 40 }}>
          <object data={AppDev} height={600} width={600} className="section1-image" />
        </div>
      </Container>
      <Container size={1400} style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="section2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{maxWidth: '50%'}}>
            <HeadingS>If you're facing a technology challenge and don't have the in-house resources to solve it, QuantmFy is here to help.</HeadingS>
            <BodyS style={{marginTop: 16}}>Our custom software development services help companies of every size realize a range of impactful business outcomes like</BodyS>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, gap: 16 }}>
              <LabelText label={'Drive more revenue'} />
              <LabelText label={'Reduce operational costs'} />
              <LabelText label={'Increase productivity'} />
              <LabelText label={'Improve information flows'} />
              <LabelText label={'Streamline business operations'} />
              <LabelText label={'Make data more accessible'} />
            </div>
          </div>
          <div style={{maxWidth: '50%'}}>
            <img src={ChallengeSvg} className="section2-image" width={600} />
          </div>
        </div>
      </Container>
      <Box style={{background: '#669085'}}>
        <Container size={1400} style={{height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {/* <div className="section3"> */}
            <div className="section3-inner-container">
              <div style={{maxWidth: '60%', margin: 'auto'}}>
                <HeadingS className="section3-heading" style={{ color: COLORS.white, textAlign: 'center' }}>Experienced Application Strategists and Developers</HeadingS>
                <BodyS className="section3-heading" style={{ marginTop: 16, color: COLORS.white, textAlign: 'center' }}>Our experienced application development teams and strategists are committed to helping you overcome your unique business challenges in an efficient and cost-effective manner.</BodyS>
              </div>
              <div className="section3-image-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
                <ImageWrapper image={Strategy} title='Strategy' />
                <ImageWrapper image={Idea} title='Idea validation' />
                <ImageWrapper image={CustomAppDev} title='custom application' />
                <ImageWrapper image={CustomCloud} title='Custom software ' />
                <ImageWrapper image={DesktopWeb} title='Web and mobile' />
              </div>
            </div>
          {/* </div> */}
        </Container>
      </Box>
      <Box>
        <Container size={1400} style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <section id="solution-section" ref={sectionRefs[3]}>
            <div className="section4">
              <div className="section4-container">
                <div className="section4-left-container">
                  <Label style={{ marginBottom: 16 }}>Our Solutions</Label>
                  <HeadingS style={{ marginBottom: 16 }}>Industry-specific platforms and portals to modernize delivery of services to customers and open new markets.</HeadingS>
                </div>
                <div>
                  <img src={Industryspecific} className="section4-image" />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Box>
    </Box>
  );
};

export default AppDevelopmentPage;
