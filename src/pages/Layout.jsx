import React from "react";
import { Fragment } from "react";
import { BodyS, HeadingM, HeadingS, } from "../constants/TypographyStyles";
import HeaderPill from "../components/HeaderPill";
import styled from "styled-components";


export const CenteredWrapper = styled.div`
text-align:center;
`

export const LeftAlignedWrapper = styled.div`
text-align:start;
`

const Layout = () => {
    return (
        <Fragment>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: '50%' }}>
                    <CenteredWrapper>
                        <HeaderPill label={'placeholder'} />
                        <HeadingM style={{ marginBottom: 16 }}>
                            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
                        </HeadingM>
                        <BodyS style={{textAlign:'center'}}>
                        Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
                        </BodyS>
                    </CenteredWrapper>
                    <LeftAlignedWrapper>
                        <HeadingS>Heading S Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</HeadingS>
                        <BodyS>Body S Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</BodyS>

                    </LeftAlignedWrapper>

                </div>

            </div>
        </Fragment>
    );
};

export default Layout;
