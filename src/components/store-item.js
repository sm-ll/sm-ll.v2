import * as React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import "./button.css"
import record from '../images/release.jpg'

import {
  itemList,
  item,
  itemTop,
  itemTitle,
  itemDescription,
  itemQuickView
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
		          Name
		          Release_Date
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
							<p className={itemQuickView}><a href="">Quick view</a></p>
			    	</div>
			    </div>
	    	))}   	    	    	    	    
	    </div>
    </>
  )
}