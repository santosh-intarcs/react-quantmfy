import React, { Fragment, useEffect, useState } from "react";
import HeroImage from '../../assets/Appdev/Hero-BG.svg'
import QFLogo from '../../assets/QuantmFy-logo.svg';
import Typography from "../../constants/textStyle";
import AppDev from "../../assets/appdev.svg"
import Checkicon from "../../assets/Appdev/Success-check.svg";
import COLORS from "../../constants/colors";
import ChallengeSvg from '../../assets/Appdev/challenge.svg';
import Strategy from '../../assets/Appdev/Strategy.svg';
import Idea from '../../assets/Appdev/Idea validation.svg';
import CustomAppDev from '../../assets/Appdev/Custom -application-development.svg';
import CustomCloud from '../../assets/Appdev/Custom-software-solutions-for-cloud.svg';
import DesktopWeb from '../../assets/Appdev/Desktop-web-mobile.svg';
import SolutionsBg from '../../assets/Appdev/Solutions-BG.svg';
import Industryspecific from '../../assets/Appdev/industry-group.svg';
import SysIntegration from '../../assets/Appdev/sys-integration.svg';
import Footer from "../Footer/Footer";
import NavbarVertical from "../../components/Navigation/NavbarVertical";
import { useRef } from "react";
import SectionButton from "../../components/SectionButton";


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
      marginBottom: 16,
      borderRadius: 50,
      display: 'inline-flex',
      width: 'fit-content',
    }}>
      <img src={Checkicon} width={18} />
      <p style={{ ...Typography.label, marginLeft: 10, textAlign: 'center' }}>{label}</p>
    </div>
  );
};

const ImageWrapper = ({ image, title }) => {
  return (
    <div style={{ marginRight: 24 }}>
      <div style={{ marginBottom: 8 }}>
        <img src={image} width={175} alt={title} />
      </div>
      <p style={{ ...Typography.label, textAlign: 'center', color: COLORS.white }}>{title}</p>
    </div>
  );
};



const AppDevelopmentPage = () => {
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
        background: 'linear-gradient(180deg, #9186C9 0%, #DCE3EC 61.46%)',
        padding: 0,
        margin: 0,
      }}>
        <section>
          <div style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            paddingLeft: 130,
            paddingRight: 130,
          }}>
            <div>
              <img src={QFLogo} height={100} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="para" style={{ maxWidth: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <p style={Typography.headingM}>Overcome your business challenges with reliable, custom software applications</p>
                  <div style={{ marginTop: 40 }}>
                    <object data={AppDev} width={420} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="challenges-section" ref={sectionRefs[1]}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            maxWidth: '80%',
            paddingLeft: 130,
            marginTop: 120
          }}>
            <div>
              <p style={{ ...Typography.headingS, marginBottom: 16 }}>If you're facing a technology challenge and don't have the in-house resources to solve it, QuantmFy is here to help.</p>
              <p style={{ ...Typography.bodyS, marginBottom: 16 }}>Our custom software development services help companies of every size realize a range of impactful business outcomes like</p>
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
              <img src={ChallengeSvg} width={380} />
            </div>
            {/* <SectionButton /> */}
          </div>

        </section>
      </div>

      <section id="team-section" ref={sectionRefs[2]}>
        {/* ... rest of your code */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          // maxWidth: '80%',
          backgroundColor: COLORS.green,
          paddingTop: 120,
          paddingBottom: 120
        }}>
          <div style={{ maxWidth: '50%' }}>
            <p style={{ ...Typography.headingS, marginBottom: 16, textAlign: 'center', color: COLORS.white }}>Experienced Application Strategists and Developers</p>
            <p style={{ ...Typography.bodyS, marginBottom: 16, textAlign: 'center', color: COLORS.white }}>Our experienced application development teams and strategists are committed to helping you overcome your unique business challenges in an efficient and cost-effective manner.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ImageWrapper image={Strategy} title='Strategy' />
              <ImageWrapper image={Idea} title='Idea validation' />
              <ImageWrapper image={CustomAppDev} title='custom application development' />
              <ImageWrapper image={CustomCloud} title='Custom software solution for cloud' />
              <ImageWrapper image={DesktopWeb} title='Desktop, web and Mobile' />

            </div>
          </div>
        </div>
      </section>
      <section id="solution-section" ref={sectionRefs[3]}>
        <div style={{
          backgroundImage: `url(${SolutionsBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            maxWidth: '80%',
            paddingLeft: 130,
            marginTop: 120
          }}>
            <div style={{ maxWidth: '40%', marginRight: 20 }}>
              <p style={{ ...Typography.label, marginBottom: 16 }}>Our Solutions</p>
              <p style={{ ...Typography.headingS, marginBottom: 16 }}>Industry-specific platforms and portals to modernize delivery of services to customers and open new markets.</p>
            </div>
            <div>
              <img src={Industryspecific} width={600} />
            </div>
          </div>
        </div>
      </section>
      <section id="deep-dive-section" ref={sectionRefs[4]}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          background: 'linear-gradient(180deg, #9186C9 -28.99%, #DCE3EC 50.29%)',
          paddingTop: 80,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            <div>
              <img src={SysIntegration} width={450} objectFit={'cover'} />
            </div>
            <div style={{ maxWidth: '30%', marginLeft: 20 }}>
              <p style={{ ...Typography.label, marginBottom: 16 }}>Deep dive</p>
              <p style={{ ...Typography.headingS, marginBottom: 16 }}>System Integration Services</p>
              <p style={{ ...Typography.bodyS, marginBottom: 16 }}>Our team of experienced developers help you seamlessly connect your systems and applications with one another and with third-party platforms and applications.<br /><br />
                We can help you achieve a smooth and effective integration that will improve your overall business efficiency and take your business to the next level.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-section" ref={sectionRefs[5]}>
        <Footer />
      </section>
    </Fragment>
  );
};

export default AppDevelopmentPage;
