import React, { Fragment } from "react";
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
import ExperiencedConsultant from '../../assets/TechnoConsulting/Experienced-Consultants.svg';
import ExpBg from '../../assets/TechnoConsulting/Exp-BG.svg';



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
  )
}

const ImageWrapper = ({ image, title }) => {
  return (
    <div style={{ marginRight: 24 }}>
      <div style={{ marginBottom: 8 }}>
        <img src={image} width={175} />
      </div>
      <p style={{ ...Typography.label, textAlign: 'center', color: COLORS.white }}>{title}</p>
    </div>
  )
}


const TechnologyConsultantPage = () => {
  return (
    <Fragment>
      <div style={{
        background: 'linear-gradient(360deg, #F4F9DD 53.58%, #669085 119.27%)',
        padding: 0,
        margin: 0,
      }}>
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
                <p style={Typography.headingM}>Strategic technology advice to help you grow your business</p>
                <div style={{ marginTop: 40 }}>
                  <object data={AppDev} width={420} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <------------------------------- section 2 -------------------------> */}
        <div style={{
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          flexDirection: 'row',
          maxWidth: '100%',
          paddingLeft: 130,
          marginTop: 80,
          paddingBottom:60
        }}>
          <div>
            <p style={{ ...Typography.headingS, marginBottom: 16,textAlign:'center' }}>We understand the importance of developing a technology strategy that aligns with your business goals and delivers tangible value to your organization.</p>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              maxWidth: '80%',
              marginTop: 120
            }}>
              <div style={{
                backgroundImage: `url(${SolutionsBg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'center',
                width:'50%',
                // paddingRight: 130,
                display:'flex',
                justifyContent:'end'

              }}>
                <img  src={ExperiencedConsultant}/>
              </div>
              <div style={{marginLeft:40, width:'50%',marginRight:60}}>
                <p style={{ ...Typography.headingXs, marginBottom: 16 }}>Experienced consultants</p>
                <p style={{...Typography.bodyS}}>Our experienced, senior-level technology consultants provide strategic advisory services to help your leadership teams define long-term technology strategies and solutions that propel your business forward.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <------------------------------------------- section 3 -------------------------------------> */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        background: 'linear-gradient(180deg, #9186C9 -28.99%, #DCE3EC 50.29%)',
        padding: 120,
        // paddingBottom: 120
      }}>
        <div style={{borderRadius:18,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{
            borderTopLeftRadius:20,
            borderBottomLeftRadius:20,
            backgroundColor:COLORS.white,
            padding:60,
            width:'40%',
          }}>
            <p style={{...Typography.label,marginBottom:16}}>Here’s how we can help</p>
            <p style={{...Typography.headingS,marginBottom:16}}>Technology strategy</p>
            <p style={{...Typography.bodySbold,marginBottom:16}}>Our technology strategists help you identify and implement the most effective technology solutions to meet your business’s unique needs.</p>
            <p style={{...Typography.bodyS,marginBottom:16}}>Our experienced consultants work closely with your team to create a comprehensive technology strategy that aligns with your business goals and objectives. We provide expert guidance on technology trends and best practices, enabling you to make informed decisions and achieve long-term success.</p>
          </div>
          <div style={{
            width:'40%',
            borderTopRightRadius:20,
            borderBottomRightRadius:20,
            flex:1,
            background: 'linear-gradient(180deg, #9186C9 0%, #0C113A 100%)',
            padding:32,
          }}>
            <div style={{
              width:420,
              height:416,
              background: '#102D97',
              mixBlendMode:'screen',
              padding1:12,
              
            }}>
            </div>

          </div>
        </div>
      </div>      
      {/* <------------------------------------------- footer -------------------------------------> */}
      <Footer />

    </Fragment>
  )
}

export default TechnologyConsultantPage;