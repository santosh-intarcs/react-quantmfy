import React, { Fragment } from "react";
import QFLogo from '../../assets/QuantmFy-logo.svg';
import AppDev from "../../assets/appdev.svg"
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
import { BodyS, BodySbold, HeadingM, HeadingS, HeadingXs, Label } from "../../constants/TypographyStyles";
import { TechnoConsultingWrapper } from "./Technoconsulting.styles";
import HeaderPill from "../../components/HeaderPill";
import SplitType from 'split-type';



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
  const section2TextAnimate = useRef(null);
  const section2SubHeadingAnimate = useRef(null);
  const section2SubTextAnimate =useRef(null);
  const section3TitleTextRef = useRef(null);
  const section3SubTitleTextRef = useRef(null);
  const sectionRefs = NavItems.reduce((acc, item) => {
    acc[item.id] = useRef(null);
    return acc;
  }, {});

  useEffect(() => {
    const target = titleTextRef.current;
    const target2 = section2TextAnimate.current;
    const target3 = section2SubHeadingAnimate.current;
    const target4 = section2SubTextAnimate.current;
    
    const typeSplit9 = new SplitType(target, {
      types: 'lines, words, chars',
      tagName: 'span'
    });
    const typeSplit11 = new SplitType([target2, target3,target4], {
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
    gsap.from([target2.querySelectorAll('.word'), target3.querySelectorAll('.word'), target4.querySelectorAll('.word')], {
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
    <TechnoConsultingWrapper>
      <SectionButton />
      <div className="nav-style">
        <NavbarVertical array={NavItems} activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
      <div style={{
        background: 'linear-gradient(360deg, #F4F9DD 53.58%, #669085 119.27%)',
        padding: 0,
        margin: 0,
      }}>
        <section>
          <div className="section1">
            <div>
              <img src={QFLogo} className="qf-logo" />
            </div>
            <div className="section2-cont">
              <div className="section1-container">
                <div className="section1-inner-container">
                  <HeaderPill label={'Technology Consulting Services'} />
                  <HeadingM ref={titleTextRef}>Strategic technology advice to help you grow your business</HeadingM>
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
              <div className="section2-left-container">
                <HeadingS ref={section2TextAnimate} className="section2-title">We understand the importance of developing a technology strategy that aligns with your business goals and delivers tangible value to your organization.</HeadingS>
              </div>
              <div className="section2-right-container">
                <div className="section2-bg-image">
                  <img src={ExperiencedConsultant} />
                </div>
                <div className="section2-text-container">
                  <HeadingXs ref={section2SubHeadingAnimate} className="mb-16">Experienced consultants</HeadingXs>
                  <BodyS ref={section2SubTextAnimate}>Our experienced, senior-level technology consultants providestrategic advisory services to help your leadership teams define long-term technology strategies& solutions that propel your business forward.</BodyS>
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
              <Label className="mb-16">Here’s how we can help</Label>
              <HeadingS className="mb-16">Technology strategy</HeadingS>
              <BodySbold className="mb-16">Our technology strategists help you identify and implement the most effective technology solutions to meet your business’s unique needs.</BodySbold>
              <bodyS className="mb-16">Our experienced consultants work closely with your team to create a comprehensive technology strategy that aligns with your business goals and objectives. We provide expert guidance on technology trends and best practices, enabling you to make informed decisions and achieve long-term success.</bodyS>
            </div>
            <div className="section3-right-container">
              <div className="section3-image">
                <img src={TechStrategy} width={400} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------- footer -------------------------------------> */}
      <section id="contact-section" ref={sectionRefs[3]}>
        <Footer />
      </section>
    </TechnoConsultingWrapper >
  )
}

export default TechnologyConsultantPage;