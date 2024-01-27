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
import { BodyS, HeadingM, HeadingS, Label } from "../../constants/TypographyStyles";
import { DataAnalyticsWrapper } from "./DataAnalytics.styles";
import Industryspecific from '../../assets/Appdev/industry-group.svg';
import HeaderPill from "../../components/HeaderPill";



const NavItems = [
  {
    label: 'Value',
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



const DataAnalyticsPage = () => {
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
    <DataAnalyticsWrapper>
      <SectionButton />
      <div className="nav-style">
        <NavbarVertical array={NavItems} activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
      <div style={{
        background: 'linear-gradient(180deg, #F4F9DD 0%, #E7D7DD 61.46%)',
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
                  <HeadingM ref={titleTextRef}>Unlock more value from your business data</HeadingM>
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
              {/* <div className="section2-left-container"> */}
                <HeadingS className="section2-title">Your business has large amounts of data, but your employees may not have easy access to it – or may not be quite sure how to leverage it.</HeadingS>
                <BodyS className="section2-title">QuantmFy helps your organization gain more value from its data though our data analytics solutions and services that empower your teams to collect, process, analyze and mine a large amount of data and transform this data into commercial value.</BodyS>
              {/* </div> */}
              {/* <div className="section2-right-container">
                <div className="section2-bg-image">
                  <img src={ExperiencedConsultant} />
                </div>
                <div className="section2-text-container">
                  <HeadingXs className="mb-16">Experienced consultants</HeadingXs>
                  <BodyS>Our experienced, senior-level technology consultants provide strategic advisory services to help your leadership teams define long-term technology strategies and solutions that propel your business forward.</BodyS>
                </div>
              </div> */}
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
              <HeadingS className="mb-16">Data modeling</HeadingS>
              {/* <BodySbold className="mb-16">Our technology strategists help you identify and implement the most effective technology solutions to meet your business’s unique needs.</BodySbold> */}
              <bodyS className="mb-16">We design and visualize your data in a structured and organized way, ensuring that data is accurately captured, stored, and processed. We ensure that your teams have a clear understanding of data relationships and dependencies, enabling team members to make informed decisions and take actions based on reliable and accurate data.</bodyS>
            </div>
            <div className="section3-right-container">
              <div className="section3-image">
                <img src={Industryspecific} width={400} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <------------------------------------------- footer -------------------------------------> */}
      <section id="contact-section" ref={sectionRefs[3]}>
        <Footer />
      </section>
    </DataAnalyticsWrapper >
  )
}

export default DataAnalyticsPage;