// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  content
} from '../components/layout.module.scss'

const MasteringPage = () => {
  return (
    <Layout pageTitle="Mastering">
      <main className={content}>
        <p>This will probably link out to causeandcondition.com although maybe not from the navigation? possibly some basic stuff here with a link out in copy.</p>
      </main>
    </Layout>
  )
}

export default MasteringPage