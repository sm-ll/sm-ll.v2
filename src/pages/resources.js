// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  content
} from '../components/layout.module.scss'

// Step 2: Define your component
const ResourcesPage = () => {
  return (
    <Layout pageTitle="Resources">
      <main className={content}>
        <p>This lists various means to incorporate qualities found in label. Software, patches, codes, samples , stems etc</p>
      </main>
    </Layout>
  )
}

// Step 3: Export your component
export default ResourcesPage