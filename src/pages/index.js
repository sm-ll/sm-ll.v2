// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import record from "./record.jpg"
import recordSleeve from "./record-sleeve.jpg"
import {
  contentCenter
} from '../components/layout.module.scss'

import {
  backgroundImage,
  heading,
  information,
  button,
  indexFirst,
  indexSecond,
  backgroundInformation
} from './index.module.scss'


// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
{/*      <div className={backgroundImage}>
        <img src={recordSleeve} alt="record in sleeve" />
        <img src={record} alt="record" />
      </div>     */}         
      <main className={contentCenter}>
      <div className={indexFirst}>
        <div className={backgroundImage}>
          <img src={recordSleeve} alt="record in sleeve" />
        </div>
        <div className={backgroundInformation}>
          <h1 className={heading}>Horizontal, anti-capitalist, anarchist behaviours beginning as an agile electronic music label</h1>
          <p className={information}>What information would go here and what would it look like?</p>
        </div>
      </div>
      <div className={indexSecond}>
        <div className={backgroundImage}>
          <img src={record} alt="record" />      
        </div>
        <div className={backgroundInformation}>
          <h1 className={heading}>Horizontal, anti-capitalist, anarchist behaviours beginning as an agile electronic music label</h1>
          <p className={information}>What information would go here and what would it look like?</p>
        </div>
      </div>      
      </main>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage