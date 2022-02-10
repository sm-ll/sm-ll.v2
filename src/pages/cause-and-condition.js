// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  content
} from '../components/layout.module.scss'

// Step 2: Define your component
const CauseandconditionPage = () => {
  return (
    <Layout pageTitle="Cause and condition">
      <main className={content}>
        <p>This will probably link out to causeandcondition.com although maybe not from the navigation? possibly some basic stuff here with a link out in copy.</p>
      </main>
    </Layout>
  )
}

// Step 3: Export your component
export default CauseandconditionPage