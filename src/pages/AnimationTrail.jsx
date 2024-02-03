import React from "react";
import QFLogo from '../assets/QuantmFy-logo.svg';
import AppDev from "../assets/appdev.svg"
import Checkicon from "../assets/Appdev/Success-check.svg";
import COLORS from "../constants/colors";
import ChallengeSvg from '../assets/Appdev/challenge.svg';
import Strategy from '../assets/Appdev/Strategy.svg';
import Idea from '../assets/Appdev/Idea validation.svg';
import CustomAppDev from '../assets/Appdev/Custom -application-development.svg';
import CustomCloud from '../assets/Appdev/Custom-software-solutions-for-cloud.svg';
import DesktopWeb from '../assets/Appdev/Desktop-web-mobile.svg';
import Industryspecific from '../assets/Appdev/industry-group.svg';
import SysIntegration from '../assets/Appdev/sys-integration.svg';
import Footer from "./Footer/Footer";
import { useRef } from "react";
import { BodyS,  HeadingM, HeadingS, Label } from "../constants/TypographyStyles";
import HeaderPill from '../components/HeaderPill'
import gsap from "gsap";
import SplitType from 'split-type';
import { useLayoutEffect } from "react";
import { AppDevelopmentWrapper, ImageWrapperStyle } from "./AppDevelopment/AppDevelopment.styles";


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
    <div style={{
      backgroundColor: COLORS.yellow,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      paddingBottom: 10,
      marginBottom: 16,
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

const AnimationTrailPage = () => {
  const animateRef = useRef(null);
  const section2TextAnimate = useRef(null);
  const section2SubTextAnimate =useRef(null);
  const section3TitleTextRef = useRef(null);
  const section3SubTitleTextRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const sectionRefs = NavItems.reduce((acc, item) => {
    acc[item.id] = useRef(null);
    return acc;
  }, {});


  useLayoutEffect(() => {
    const target = animateRef.current;
    const target2 = section2TextAnimate.current;
    const target3 = section2SubTextAnimate.current;
    const target4 = section3TitleTextRef.current;
    const target5 = section3SubTitleTextRef.current;
    if (!target) {
      console.error("Unable to find the target element.");
      return;
    }
    // Initialize SplitType
    const typeSplit = new SplitType([target,target2,target3,target4,target5], {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    // GSAP animation using ScrollTrigger
    gsap.from('.word', {
      y: '200%',
      opacity: 0,
      rotationZ: '10',
      duration: 0.5,
      ease: 'power1.in',
      stagger: 0.1,
      scrollTrigger: {
        trigger: [target,target2,target3],
        start: 'top center',
      },
      onComplete: () => {
        // Set opacity to 1 after animation is complete
        gsap.set('.word', { opacity: 1 });
      }
    });
  }, []);

  useLayoutEffect(() => {
  
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;
    // Reference to other div elements
  
    if (!div1 || !div2) {
      console.error("Unable to find the target element(s).");
      return;
    }
  
    // GSAP animation using ScrollTrigger for divs
    gsap.from([div1, div2], {
      opacity: 0,
      y: '50%',
      duration: 0.5,
      ease: 'power1.in',
      stagger: 0.2, // Adjust stagger as needed
      scrollTrigger: {
        trigger: [div1, div2], // Add more triggers as needed
        start: 'top center',
      },
      onComplete: () => {
        // Set opacity to 1 after animation is complete
        gsap.set([div1, div2], { opacity: 1 });
      }
    });
  
    // Additional animations for other divs or elements can be added similarly
  
  }, []);
  
  

  return (
    <AppDevelopmentWrapper>
      <div>
        <div className="gradient">
          <section>
            <div className="section1">
              <div>
                <img src={QFLogo} className="qf-logo" />
              </div>
              <div>
                <div className="section1-container">
                  <div ref={div1Ref} className="section1-content">
                    <HeaderPill label='Custom Application Development' />
                    <HeadingM  ref={animateRef}>Overcome your business challenges with reliable, custom software applications</HeadingM>
                    <div style={{ marginTop: 40 }}>
                      <object data={AppDev} className="section1-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="challenges-section" ref={sectionRefs[1]}>
            <div className="section2">
              <div>
                <HeadingS className="mb-16" ref={section2TextAnimate} >If you're facing a technology challenge and don't have the in-house resources to solve it, QuantmFy is here to help.</HeadingS>
                <BodyS className="mb-16" ref={section2SubTextAnimate}>Our custom software development services help companies of every size realize a range of impactful business outcomes like</BodyS>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <LabelText label={'Drive more revenue'} />
                  <LabelText label={'Reduce operational costs'} />
                  <LabelText label={'Increase productivity'} />
                  <LabelText label={'Improve information flows'} />
                  <LabelText label={'Streamline business operations'} />
                  <LabelText label={'Make data more accessible'} />
                </div>
              </div>
              <div>
                <img src={ChallengeSvg} className="section2-image" />
              </div>
            </div>
          </section>
        </div>
        <section id="team-section" ref={sectionRefs[2]}>
          <div className="section3">
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
          <div className="section4" style={{paddingTop:100}}>
            <div className="section4-container">
              <div className="section4-left-container">
                <Label style={{ marginBottom: 16 }}>Our Solutions</Label>
                <HeadingS style={{ marginBottom: 16 }}>Industry-specific platforms and portals to modernize delivery of services to customers and open new markets.</HeadingS>
              </div>
              <div style={{marginLeft:40}}>
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
                <Label style={{  marginBottom: 16 }}>Deep dive</Label>
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

export default AnimationTrailPage;
