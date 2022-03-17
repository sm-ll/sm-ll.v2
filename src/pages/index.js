// Step 1: Import React
import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/index'
import record from '../images/record.jpg'
import recordSleeve from '../images/record-sleeve.jpg'
import {
  contentCenter
} from '../components/layout.module.scss'

import {
  backgroundImage,
  indexFirst,
  indexSecond,
  backgroundInformation
} from './index.module.scss'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main className={contentCenter}>
        <div className={indexFirst}>
          <div className={backgroundImage}>
            <img src={recordSleeve} alt="record in sleeve" />
          </div>
          <div className={backgroundInformation}>
            <h1>{data.mdx.frontmatter.title}</h1>
          </div>
        </div>
        <div className={indexSecond}>
          <div className={backgroundImage}>
            <img src={record} alt="record" />
          </div>
          <div className={backgroundInformation}>
            <h1>
              <MDXRenderer>
                { data.mdx.body }
              </MDXRenderer>
            </h1>
          </div>
        </div>      
      </main>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default IndexPage