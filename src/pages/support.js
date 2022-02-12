// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Item from '../components/item'
import {
  content
} from '../components/layout.module.scss'

import {
  supportList
} from './support.module.scss'

const SupportPage = () => {
  return (
    <Layout pageTitle="Support">
      <main className={content}>
        <ul className={supportList}>
          <li><a href="#">OneCutVinyl</a></li>
          <li><a href="#">GeorgieMcVicar</a></li>
          <li><a href="#">LuciaHChung</a></li>
          <li><a href="#">StephenMcVoy</a></li>
          <li><a href="#">HarryMudoch</a></li>
          <li><a href="#">FinnAlbertsson</a></li>
          <li><a href="#">HenrikRouland</a></li>
          <li><a href="#">TomMudd</a></li>
          <li><a href="#">Matt-LishLapidus</a></li>
        </ul>
      </main>
    </Layout>
  )
}

export default SupportPage