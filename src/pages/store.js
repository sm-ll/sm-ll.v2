// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Item from '../components/item'
import {
  content
} from '../components/layout.module.scss'

import {
  banner
} from './store.module.scss'


const StorePage = () => {
  return (
    <Layout pageTitle="Store">
      <main className={content}>
        <p className={banner}>All our vinyl is <a href="https://www.onecutvinyl.com" target="_blank" rel="noreferrer">handcut to order</a> and comes with a free digital download. Our costs are your costs.</p>
        <Item></Item>
      </main>
    </Layout>
  )
}

export default StorePage