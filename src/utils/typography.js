import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";

//const typography = new Typography(fairyGateTheme)

const typography = new Typography({
    baseFontSize: "18px",
    baseLineHeight: 1.666,
    headerFontFamily: [
      "Avenir Next",
      "Helvetica Neue",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
    bodyFontFamily: ["Cabin Sketch" , "cursive"],
  }, fairyGateTheme)
  

export const { scale, rhythm, options } = typography
export default typography;