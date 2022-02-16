// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
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
          <li><a href="https://www.onecutvinyl.com/" target="_blank" rel="noreferrer">OneCutVinyl</a></li>
          <li><a href="https://georgiemcvicar.bandcamp.com/" target="_blank" rel="noreferrer">GeorgieMcVicar</a></li>
          <li><a href="https://luciahchung.com/" target="_blank" rel="noreferrer">LuciaHChung</a></li>
          <li><a href="https://flufrecs.bandcamp.com/" target="_blank" rel="noreferrer">FLUF</a></li>
          <li><a href="http://hmurd.net/" target="_blank" rel="noreferrer">HarryMurdoch</a></li>
          <li><a href="https://soundcloud.com/sonuos" target="_blank" rel="noreferrer">FinnAlbertsson</a></li>
          <li><a href="https://www.discogs.com/artist/5055403-Vialan" target="_blank" rel="noreferrer">HenrikRoulund</a></li>
          <li><a href="http://tommudd.co.uk/" target="_blank" rel="noreferrer">TomMudd</a></li>
          <li><a href="https://emenel.ca/" target="_blank" rel="noreferrer">MattNish-Lapidus</a></li>
          <li><a href="https://calumgunn.bandcamp.com/" target="_blank" rel="noreferrer">CalumGunn</a></li>
          <li><a href="https://www.attnmagazine.co.uk/" target="_blank" rel="noreferrer">JackChuter</a></li>
          <li><a href="https://wfmu.org/playlists/DN" target="_blank" rel="noreferrer">DanielBlumin</a></li>
          <li><a href="https://www.discogs.com/artist/88813-Remote_" target="_blank" rel="noreferrer">Mikeoliver</a></li>
          <li><a href="https://aestheticcomplexity.wordpress.com/" target="_blank" rel="noreferrer">GuyBirkin</a></li>
          <li><a href="https://darrenmcclure.bandcamp.com/" target="_blank" rel="noreferrer">DarrenMcClure</a></li>
          
        </ul>
      </main>
    </Layout>
  )
}

export default SupportPage