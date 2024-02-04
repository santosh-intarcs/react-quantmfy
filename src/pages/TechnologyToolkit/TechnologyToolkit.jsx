import React,{useRef} from "react";
import QFLogo from '../../assets/toolkit/QF-Logo-Dark.svg';
import Footer from "../Footer/Footer";
import NavbarVertical from "../../components/Navigation/NavbarVertical";
import SectionButton from "../../components/SectionButton";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap"
import { BodyM, BodyS, HeadingM, HeadingS, HeadingXs, Label } from "../../constants/TypographyStyles";
import COLORS from "../../constants/colors";
import { ToolkitWrapper } from "./TechnolologyToolkit.styles";
import HeaderPill from "../../components/HeaderPill";
import SplitType from "split-type";


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
    label: 'Toolkit',
    id: 1,
    sectionId: 'strategy-section',
  },
  // {
  //   label: 'Our Approach',
  //   id: 2,
  //   sectionId: 'how-we-help-section',
  // },
  // {
  //   label: 'Partner',
  //   id: 3,
  //   sectionId: 'partner-with-qf'
  // },
  {
    label: 'Contact',
    id: 4,
    sectionId: 'contact-section',
  },
];



const TechnologyToolkitPage = () => {
  const section2TextAnimate = useRef(null);
  const section2SubTextAnimate = useRef(null);
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

  useEffect(()=>{
    const target2 = section2TextAnimate.current;
    const target3 = section2SubTextAnimate.current;

    const typeSplit2 = new SplitType([target2, target3], {
      types: 'lines, words, chars',
      tagName: 'span'
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
  },[])

  return (
    <ToolkitWrapper>
      <SectionButton />
      <div className="nav-style">
        <NavbarVertical array={NavItems} activeItem={activeItem} handleItemClick={handleItemClick} />
      </div>
      <div style={{
        background: 'linear-gradient(180deg, #F4F9DD 0%, #E7D7DD 100%)',
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
                  <HeaderPill label='a glimpse into our technology toolkit' color={COLORS.gray} />
                  <HeadingM style={{textAlign:'center'}} className="mb-16" ref={section2TextAnimate}>Rest assured that our extensive technology arsenal empowers us to deliver the best technology solutions for your project.</HeadingM>
                  <BodyS style={{textAlign:'center'}} ref={section2SubTextAnimate}>The technology landscape is fast-paced and constantly evolving, with new frameworks, tools, and programming languages constantly emerging. This is why it’s crucial to collaborate with an application development firm that stays at the forefront of cutting-edge technologies, including AI and Blockchain.</BodyS>
                </div>
              </div>
            </div>
            <div className="section1-image-container">

            </div>
          </div>
        </section>
      </div>
      {/* <------------------------------------------- footer -------------------------------------> */}
      <section id="contact-section" ref={sectionRefs[4]}>
        <Footer />
      </section>
    </ToolkitWrapper>
  )
}

export default TechnologyToolkitPage;