import { themeBreakPoints } from './breakPoints';

const fontFamilies = {
  Montserrat:"'Montserrat', sans-serif",
};

function responsiveFontSizes(xs, sm, md, lg) {
  return {
    [`@media only screen and (min-width: ${themeBreakPoints.values.xs}px)`]: {
      fontSize: `${xs}px`
    },
    [`@media only screen and (min-width: ${themeBreakPoints.values.sm}px)`]: {
      fontSize: `${sm}px`
    },
    [`@media only screen and (min-width: ${themeBreakPoints.values.md}px)`]: {
      fontSize: `${md}px`
    },
    [`@media only screen and (min-width: ${themeBreakPoints.values.lg}px)`]: {
      fontSize: `${lg}px`
    }
  };
}

const typography = () => {
  return {
    // fontFamily: fontFamilies.JosefinSans,
    // lineHeight: '140%',
    // fontWeight: '400',


    customFonts: {
      Montserrat: fontFamilies.Montserrat,
    },

    h1: {
      ...responsiveFontSizes(25, 30, 40, 50),
    },
    h2: {
      ...responsiveFontSizes(20, 25, 33, 40)
    },
    h3: {
      ...responsiveFontSizes(18, 20, 22, 24)
    },
    h4: {
      ...responsiveFontSizes(18, 18, 18, 20)
    },
    h5: {
      ...responsiveFontSizes(14, 14, 16, 18)
    },
    h6: {
      ...responsiveFontSizes(8, 10, 12, 14)
    },

    body1: {
      fontFamily: fontFamilies.Montserrat,
      ...responsiveFontSizes(14, 14, 16, 18)
    },
    body2: {
      fontFamily: fontFamilies.Montserrat,
      ...responsiveFontSizes(10, 12, 14, 16)
    },
    subtitle1: {
      fontFamily: fontFamilies.Montserrat,
      ...responsiveFontSizes(12, 12, 14, 16)
    },
    subtitle2: {
      fontFamily: fontFamilies.Montserrat,
      ...responsiveFontSizes(12, 12, 12, 12)
    },
    caption: {
      fontFamily: fontFamilies.Montserrat,
      fontSize: '14px',
      lineHeight: "19px",
      textAlign: "left"
    },
    price: {
      fontSize: "10px",
      fontWeight: 'bold'
    }
  };
};

export { typography, fontFamilies };
