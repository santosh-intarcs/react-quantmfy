import COLORS from "./colors";

const Typography = {
    headingL: {
        fontSize: 60,
        fontWeight: 300,
        lineHeight: 'normal',
        letterSpacing: -3,
        color:COLORS.carbon
    },
    headingM: {
        fontSize: 40,
        fontWeight: 300,
        // lineHeight: 50,
        letterSpacing: -1,
        textAlign:'center',
        color:COLORS.carbon
    },
    headingS: {
        fontSize: 32,
        fontWeight: 300,
        // lineHeight: 'normal',
        letterSpacing: -1,
        color:COLORS.carbon
    },
    headingXs: {
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: 400,
        // lineHeight: 'normal',
        color:COLORS.carbon
    },
    bodyL: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: 400,
        // lineHeight: 29,
        color:COLORS.carbon
    },
    bodyM: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 400,
        // lineHeight: 24,
        color:COLORS.carbon
    },
    bodyS: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 400,
        // lineHeight: 22,
        color:COLORS.carbon
    },
    bodySbold: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 500,
        // lineHeight: 22,
        color:COLORS.carbon
    },
    bodyXs: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 22,
        color:COLORS.carbon
    },
    label: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 600,
        // lineHeight: 'normal',
        letterSpacing:2,
        color:COLORS.carbon,
        textTransform: 'uppercase',
    },
}

export default Typography;