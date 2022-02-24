require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
      title: `sm-ll`,
    siteUrl: `https://www.sm-l.com`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/home/`,
      },
    },  
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },   
    "gatsby-plugin-netlify-cms", "gatsby-plugin-sass", {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UA-65182874-2"
      },
    }, 
    "gatsby-plugin-react-helmet", "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
    __key: "pages"
  }]
};