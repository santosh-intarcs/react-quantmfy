import React from "react";
import { BodyS, HeadingM, Label } from "../constants/TypographyStyles";
import COLORS from "../constants/colors";


const PlaceHolder = ({ label }) => {
  return (
    <div style={{ marginBottom: 16, paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 20, backgroundColor: COLORS.white, borderRadius: 50 }}>
      <Label>{label}</Label>
    </div>
  )
}

const LayoutPage = () => {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #F4F9DD 53.58%, #669085 119.27%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <PlaceHolder label={'CTO-as-a-Service'} />
      <HeadingM style={{marginBottom:16}}>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</HeadingM>
      <BodyS style={{marginBottom:16}}>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</BodyS>

    </div>
  )
}

export default LayoutPage;