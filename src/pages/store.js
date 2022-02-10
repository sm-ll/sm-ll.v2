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



// Step 2: Define your component
const StorePage = () => {
  return (
    <Layout pageTitle="Store">
      <main className={content}>
        <p className={banner}>Banner for store with some <a href="#">linked text</a></p>
        <Item></Item>
      </main>
    </Layout>
  )
}

// Step 3: Export your component
export default StorePage