// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  content
} from '../components/layout.module.scss'

// Step 2: Define your component
const NetworkPage = () => {
  return (
    <Layout pageTitle="Network">
      <main className={content}>
        <p>This page explains how to get involved.</p>
      </main>
    </Layout>
  )
}

// Step 3: Export your component
export default NetworkPage