import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  scaleRatio: 2,
  headerWeight: 700,
  bodyWeight: 400,
	googleFonts: [
		  {
		    name: 'IBM Plex Mono',
		    styles: [
		      '400',
		      '400i',
		      '700',
		      '700i',
		    ],
		  },
		],  
  headerFontFamily: ["IBM Plex Mono", "sans-serif"],
  bodyFontFamily: ["IBM Plex Mono", "serif"],
  bodyColor: "white",
	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    "h1, h2, h3, h4, h5, h6": {
    	lineHeight: 1.15,
    },
    h1: {
    	fontWeight: 400,
    	textAlign: "center",
    },
    "a, a:hover, a:active": {
      fontWeight: 400,
    },
  }),  
})

// typography.toString()

export default typography