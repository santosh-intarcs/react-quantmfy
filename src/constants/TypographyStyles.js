import styled from "styled-components";
import COLORS from "./colors";
import { BREAKPOINT } from "./breakpoints";

export const HeadingL = styled.p`
    font-size: 60px;
    font-weight: 300;
    letter-spacing: -3px;
    color: ${COLORS.carbon};
    text-align:center;


    @media (max-width: ${BREAKPOINT.sm}) {
        font-size: 32px;
    }
`;

export const HeadingM = styled.p`
    font-size: 40px;
    font-weight: 300;
    letter-spacing: -1px;
    text-align: center;
    color: ${COLORS.carbon};
    @media (max-width: ${BREAKPOINT.sm}) {
        font-size: 32px;
    }
`;

export const HeadingS = styled.p`
    font-size: 32px;
    font-weight: 300;
    letter-spacing: -1px;
    color: ${COLORS.carbon};
    @media (max-width: ${BREAKPOINT.sm}) {
        font-size: 32px;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
    }
`;

export const HeadingXs = styled.p`
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    color: ${COLORS.carbon};
    @media (max-width: ${BREAKPOINT.sm}) {
        font-size: 32px;
    }
`;

export const BodyL = styled.p`
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    color: ${COLORS.carbon};
    @media (max-width: ${BREAKPOINT.xs}) {
        font-size: 32px;
    }
`;

export const BodyM = styled.p`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    color: ${COLORS.carbon};
    @media (max-width: ${BREAKPOINT.xs}) {
        font-size: 18px;
    }
`;

export const BodyS = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: ${COLORS.carbon};
    @media (max-width: ${BREAKPOINT.xs}) {
        font-size: 16px;
    }
`;

export const BodySbold = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    color: ${COLORS.carbon};
    @media (max-width: ${BREAKPOINT.xs}) {
        font-size: 16px;
    }
`;

export const BodyXs = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    color: ${COLORS.carbon};
    @media (max-width: ${BREAKPOINT.xs}) {
        font-size: 14px;
    }
`;

export const Label = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 2px;
    color: ${COLORS.carbon};
    text-transform: uppercase;
    @media (max-width: ${BREAKPOINT.xs}) {
        font-size: 10px;
        font-weight: 700;

    }
`;