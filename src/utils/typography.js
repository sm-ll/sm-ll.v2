import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
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
	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    "h1,h2,h3,h4,h5,h6,p": {
    	fontWeight: "400"
    },
  }),  
})
export default typography