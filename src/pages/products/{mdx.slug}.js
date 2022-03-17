import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import "../../components/button.css"
import record from '../../images/release.jpg'

import {
  itemList,
  item,
  itemImage,
  itemDetails,
  itemRight,
  itemTop,
  itemArtist,
  itemTitle,
  itemLabel,
  itemPrice,
  itemBottom,
  itemDescription,
  itemTags,
  itemFeatures,
  itemSelect,
  itemDate
} from './product.module.scss'

import {
  content
} from '../../components/layout.module.scss'

const ProductItem = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.Name}>
      <main className={content}>
        <div className={item}>
          <div className={itemTop}>
            <div className={itemImage}>
              <img src={record} alt="record" />
            </div>
            <div className={itemDetails}>            
              <h3 className={itemArtist}>{data.mdx.frontmatter.Artist_Creator}</h3>
              <h3 className={itemTitle}>{data.mdx.frontmatter.Name}</h3>
              <p className={itemLabel}>{data.mdx.frontmatter.Label_Supplier}</p>
              <p className={itemPrice}>£{data.mdx.frontmatter.GBP_Price}</p>
              <p className={itemDescription}>{data.mdx.frontmatter.Format_Name}</p>
              <button class="snipcart-add-item"
                data-item-file-guid="ee5c2026-9be3-40ee-aaf9-623793debb3b"
                data-item-id="avatar"
                data-item-price="0.50"
                data-item-url="/store/avatar"
                data-item-description="#techno #dub #minimal"
                data-item-image={record}
                data-item-name="Avatar">
                Add to cart
              </button>
            </div>
          </div>
          <div className={itemBottom}>
            <ul className={itemTags}>
              <li>{data.mdx.frontmatter.Tags}</li>
            </ul>
            <ol className={itemFeatures}>
              <li>Extrapolation A <span>12:27</span></li>
              <li>Extrapolation B <span>15:51</span></li>
            </ol>
            <p className={itemDate}>{data.mdx.frontmatter.Release_Date}</p>
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
        Artist_Creator
        Availability_Status
        EUR_Price
        Format_Availability
        Format_ID
        Format_Name
        Format_Type
        GBP_Price
        Label_Supplier
        Name
        Product_ID
        Product_cat__no_
        Published_Status
        Tags
        USD_Price
        title
        Release_Date(formatString: "Do MMMM YYYY")
      }
      body
      slug
    }
  }
`

export default ProductItem