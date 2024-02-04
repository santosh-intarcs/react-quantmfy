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
import TechStrategy from '../../assets/TechnoConsulting/Technology-Strategy.svg';
import { BodyM, BodyS, BodySbold, HeadingM, HeadingS, Label } from "../../constants/TypographyStyles";
import { ItStaffingWrapper, PillsWrapper } from "./ItStaffingWrapper";
import SkillImage from '../../assets/ItStaffing/Skill.svg';
import COLORS from "../../constants/colors";
import HeaderPill from "../../components/HeaderPill";
import SplitType from "split-type";


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
    label: 'Contact',
    id: 3,
    sectionId: 'contact-section',
  },
];



const ItemStaffing = () => {
  const [activeItem, setActiveItem] = useState(1);
  const animateRef = useRef(null);
  const section2TextAnimate = useRef(null);
  const section2SubTextAnimate = useRef(null);
  const section2CardTitleTextRef = useRef(null);
  const section3CardTextRef = useRef(null);
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

  useEffect(()=>{
    const target = animateRef.current;
    const target2 = section2TextAnimate.current;
    const target3 = section2SubTextAnimate.current;
    const target4 = section2CardTitleTextRef.current;
    const target5 = section3CardTextRef.current;

    const typeSplit1 = new SplitType(target, {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    const typeSplit2 = new SplitType([target2, target3,target4,target5], {
      types: 'lines, words, chars',
      tagName: 'span'
    });

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

    gsap.from([target2.querySelectorAll('.word'), target3.querySelectorAll('.word'),target4.querySelectorAll('.word'),target5.querySelectorAll('.word')], {
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
        gsap.set([target2.querySelectorAll('.word'), target3.querySelectorAll('.word'),target4.querySelectorAll('.word'),target5.querySelectorAll('.word')],{ opacity: 1 },);
       
      }
    });
  })

  return (
    <ItStaffingWrapper>
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
                  <HeaderPill label='IT Staffing' />
                  <HeadingM ref={animateRef}>Strengthen your technology operations and scale faster</HeadingM>
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
              <div className="section3-title-container" style={{ maxWidth: '60%', alignItems: 'flex-start' }}>
                <HeadingS style={{ textAlign: 'left' }} ref={section2TextAnimate} className="section2-title">QuantmFy is the go-to resource when your business needs additional technical resources to bolster your technology operations.</HeadingS>
                <BodyM ref={section2SubTextAnimate} style={{ textAlign: 'left' }}>Our IT Staffing Services are designed to be extremely flexible and responsive, to give you an efficient and effective way to add specialized staff members to your team on a short-term or long-term basis.</BodyM>
              </div>
              <div className="section2-inner">
                <div className="section2-left-container">
                  <Label ref={section2CardTitleTextRef}>With our flexible IT staffing services, you can:</Label>
                  <img src={SkillImage} />
                  <BodyS ref={section3CardTextRef}>Acquire skilled team members when you need them – for any timeframe.</BodyS>
                </div>
                <div className="section2-right-container">
                  <Label>Add team members with expertise in a range of areas:</Label>
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
      <section id="how-we-help-section" ref={sectionRefs[2]}>
        <div className="section3">
          <div className="section3-inner-container">
            <div className="section3-left-container">
              <Label style={{color:COLORS.white}} className="mb-16">Here’s our approach</Label>
              <HeadingS style={{color:COLORS.white}} className="mb-16">1. Identify your staffing requirements, including skills, knowledge, experience and character.</HeadingS>
            </div>
            <div className="section3-right-container">
              <div className="section3-image">
                <img src={TechStrategy} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------- footer -------------------------------------> */}
      <section id="contact-section" ref={sectionRefs[3]}>
        <Footer />
      </section>
    </ItStaffingWrapper>
  )
}

export default ItemStaffing;