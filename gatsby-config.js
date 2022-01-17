module.exports = {
  siteMetadata: {
      title: `sm-ll.v2`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": ""
    }
  }, "gatsby-plugin-react-helmet", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};