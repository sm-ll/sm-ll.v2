import * as React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import "./button.css"
import record from '../images/release.jpg'

import {
  item,
  itemImage,
  itemDetails,
  itemTop,
  itemArtist,
  itemTitle,
  itemLabel,
  itemPrice,
  itemBottom,
  itemDescription,
  itemTags,
  itemFeatures,
  itemDate,
  itemList,
  quickViewToggler,
  quickView,
  quickViewOpen,
  inputViewToggler,
  quickViewClose
} from './store-item.module.scss'

export default () => {
	const data = useStaticQuery(graphql`
		query StoreItem {
		  allMdx(
		  	filter: {frontmatter: {title: {eq: ""}}}
		  	sort: { fields: [frontmatter___Release_Date], order: DESC }
		  	) {
		    edges {
		      node {
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
		        slug
		      }
		    }
		  }
		}
	`)
  return (
  	<>
	    <div className={itemList}>
	    	{data.allMdx.edges.map(({ node }) => (
			    <div className={item}>
			    	<div className={itemTop}>
				    	<h3 className={itemTitle}><Link to={`/products/${node.slug}`}>{node.frontmatter.Name}</Link></h3>
				    	<p className={itemDescription}>{node.frontmatter.Format_Name}</p>
							<img src={record} alt="record" />
							<input type="checkbox" id="quickViewToggler" className={inputViewToggler}/>
							<label htmlFor="quickViewToggler" className={quickViewToggler}><span className={quickViewOpen}>Quick view</span><span className={quickViewClose}>Close</span></label>
							<div className={quickView}>
								<div className={item}>
				          <div className={itemTop}>
				            <div className={itemImage}>
				              <img src={record} alt="record" />
				            </div>
				            <div className={itemDetails}>            
				              <h3 className={itemArtist}>{node.frontmatter.Artist_Creator}</h3>
				              <h3 className={itemTitle}>{node.frontmatter.Name}</h3>
				              <p className={itemLabel}>{node.frontmatter.Label_Supplier}</p>
				              <p className={itemPrice}>£{node.frontmatter.GBP_Price}</p>
				              <p className={itemDescription}>{node.frontmatter.Format_Name}</p>
					            <p className={itemDate}>{node.frontmatter.Release_Date}</p>				              
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
				        </div> 								
							</div>
			    	</div>
			    </div>
	    	))}   	    	    	    	    
	    </div>
    </>
  )
}