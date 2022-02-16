// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import record from './record.jpg'
import recordSleeve from './record-sleeve.jpg'
import {
  contentCenter
} from '../components/layout.module.scss'

import {
  backgroundImage,
  indexFirst,
  indexSecond,
  backgroundInformation
} from './index.module.scss'

const IndexPage = () => {
  return (
    <Layout>      
      <main className={contentCenter}>
      <div className={indexFirst}>
        <div className={backgroundImage}>
          <img src={recordSleeve} alt="record in sleeve" />
        </div>
        <div className={backgroundInformation}>
          <h1>Horizontal, anti-capitalist, anarchist behaviours beginning as an agile electronic music label</h1>
        </div>
      </div>
      <div className={indexSecond}>
        <div className={backgroundImage}>
          <img src={record} alt="record" />
        </div>
        <div className={backgroundInformation}>
          <h1>We reject hierarchal structures, embracing rotatable roles and challenging traditional fixed artist-label relationships. We do not align with the profit-motive nor believe in a society that does so. We cultivate a practice of voluntary, iterative and decentralised creativity around common interests such as repetitive, reductive, rhytmic and objectively good electronic music. Monarchy is inequality.</h1>
        </div>
      </div>      
      </main>
    </Layout>
  )
}

export default IndexPage