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
import { BodyS, HeadingM, HeadingS, Label } from "../../constants/TypographyStyles";
import HeaderPill from '../../components/HeaderPill'
import gsap from "gsap";
import SplitType from 'split-type';


const NavItems = [
  {
    label: 'Challenges',
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
    <div  style={{
      backgroundColor: COLORS.yellow,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
      marginBottom: 16,
      borderRadius: 50,
      display: 'inline-flex',
      width: 'fit-content',
      alignItems: 'center',
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
      <Label style={{ textAlign: 'center', color: COLORS.white }}>{title}</Label>
    </ImageWrapperStyle>
  );
};

const AppDevelopmentPage = () => {
  const animateRef = useRef(null);
  const section2TextAnimate = useRef(null);
  const section2SubTextAnimate = useRef(null);
  const section3TitleTextRef = useRef(null);
  const section3SubTitleTextRef = useRef(null);
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
    const target = animateRef.current;
    const target2 = section2TextAnimate.current;
    const target3 = section2SubTextAnimate.current;
    const target4 = section3TitleTextRef.current;
    const target5 = section3SubTitleTextRef.current;   

    // Initialize SplitType for each target element
    const typeSplit1 = new SplitType(target, {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    const typeSplit2 = new SplitType([target2, target3], {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    const typeSplit4 = new SplitType([target4, target5], {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    // GSAP animation using ScrollTrigger for each target element
    gsap.from(target.querySelectorAll('.word'), {
      y: '500%',
      opacity: 0,
      rotationZ: '10',
      duration: 0.5,
      ease: 'power1.in',
      stagger: 0.1,
      scrollTrigger: {
        trigger: target,
        start: 'top center',
        markers: true,
        once: true,
      },
      onComplete: () => {
        // Set opacity to 1 after animation is complete
        gsap.set(target.querySelectorAll('.word'), { opacity: 1 });
      }
    });

    gsap.from([target2.querySelectorAll('.word'), target3.querySelectorAll('.word')], {
      y: '100%',
      opacity: 0,
      rotationZ: '10',
      duration: 0.5,
      ease: 'power1.in',
      stagger: 0.1,
      scrollTrigger: {
        trigger: [target2, target3],
        start: 'top center',
        markers: true,
        once: true,
      },
      onComplete: () => {
        gsap.set([target2.querySelectorAll('.word'), target3.querySelectorAll('.word')], { opacity: 1 });
       
      }
    });

    gsap.from([target4.querySelectorAll('.word'), target5.querySelectorAll('.word')], {
      y: '100%',
      opacity: 0,
      rotationZ: '10',
      duration: 0.5,
      ease: 'power1.in',
      stagger: 0.1,
      scrollTrigger: {
        trigger: [target4, target5],
        start: 'top center',
        markers: true,
        once: true,
      },
      onComplete: () => {
        gsap.set([target4.querySelectorAll('.word'), target5.querySelectorAll('.word')], { opacity: 1 });
      }
    });
    
  }, []);

  return (
    <AppDevelopmentWrapper>
      <SectionButton />
      <div className="nav-style">
        <NavbarVertical array={NavItems} activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
      <div>
        <div className="gradient">
          <div className="sec1-bg-image">
            <section>
              <div className="section1">
                <div>
                  <img src={QFLogo} className="qf-logo" />
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <div className="section1-container">
                    <HeaderPill label='Custom Application Development' />
                    <HeadingM ref={animateRef}>Overcome your business challenges with reliable, custom software applications</HeadingM>
                    <div style={{ marginTop: 40 }}>
                      <object data={AppDev} className="section1-image" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="challenges-section" ref={sectionRefs[1]}>
              <div className="section2" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ maxWidth: '50%' }}>
                  <HeadingS className="mb-16" ref={section2TextAnimate} >If you're facing a technology challenge and don't have the in-house resources to solve it, QuantmFy is here to help.</HeadingS>
                  <BodyS className="mb-16" ref={section2SubTextAnimate}>Our custom software development services help companies of every size realize a range of impactful business outcomes like</BodyS>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <LabelText  label={'Drive more revenue'} />
                    <LabelText  label={'Reduce operational costs'} />
                    <LabelText  label={'Increase productivity'} />
                    <LabelText  label={'Improve information flows'} />
                    <LabelText  label={'Streamline business operations'} />
                    <LabelText  label={'Make data more accessible'} />
                  </div>
                </div>
                <div>
                  <img src={ChallengeSvg} className="section2-image" />
                </div>
              </div>
            </section>

          </div>
        </div>
        <section id="team-section" ref={sectionRefs[2]}>
          <div className="section3" style={{ paddingTop: 70, paddingBottom: 70 }}>
            <div className="section3-inner-container">
              <HeadingS className="section3-heading" style={{ marginBottom: 16, color: COLORS.white }} ref={section3TitleTextRef}>Experienced Application Strategists and Developers</HeadingS>
              <BodyS className="section3-heading" style={{ marginBottom: 16, color: COLORS.white }} ref={section3SubTitleTextRef}>Our experienced application development teams and strategists are committed to helping you overcome your unique business challenges in an efficient and cost-effective manner.</BodyS>
              <div className="section3-image-container">
                <ImageWrapper image={Strategy} title='Strategy' />
                <ImageWrapper image={Idea} title='Idea validation' />
                <ImageWrapper image={CustomAppDev} title='custom application' />
                <ImageWrapper image={CustomCloud} title='Custom software ' />
                <ImageWrapper image={DesktopWeb} title='Web and mobile' />
              </div>
            </div>
          </div>
        </section>
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
        <section id="deep-dive-section" ref={sectionRefs[4]}>
          <div className="section5">
            <div className="section5-container">
              <div>
                <img src={SysIntegration} className="section5-image" objectFit={'cover'} />
              </div>
              <div className="section5-inner-container">
                <Label style={{ marginBottom: 16 }}>Deep dive</Label>
                <HeadingS style={{ marginBottom: 16 }}>System Integration Services</HeadingS>
                <BodyS style={{ marginBottom: 16 }}>Our team of experienced developers help you seamlessly connect your systems and applications with one another and with third-party platforms and applications.<br /><br />
                  We can help you achieve a smooth and effective integration that will improve your overall business efficiency and take your business to the next level.</BodyS>
              </div>
            </div>
          </div>
        </section>
        <section id="contact-section" ref={sectionRefs[5]}>
          <Footer />
        </section>
      </div>
    </AppDevelopmentWrapper>
  );
};

export default AppDevelopmentPage;
