import React from "react";
import styled from "styled-components";
import COLORS from "../constants/colors";
import { Label } from "../constants/TypographyStyles";

const Wrapper = styled.div`
display: inline-flex;
height: 28px;
padding: 10px 15px;
justify-content: center;
align-items: center;
border-radius:50px;
gap: 10px;
margin-bottom:16px;
flex-shrink: 0;
`

const HeaderPill = ({
  label,
  color = COLORS.white
}) => {
  return (
    <Wrapper style={{ backgroundColor: color }}>
      <Label style={{color:COLORS.carbon}}>{label}</Label>
    </Wrapper>
  );
}
export default HeaderPill;