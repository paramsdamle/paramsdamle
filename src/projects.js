import React from 'react';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader'
import Nav from './components/Nav'
import Helmet from 'react-helmet'
import ProjectTab from './projects/projectTab'
import styled from 'styled-components'

import iconSite from "./projects/icons/arrow.png"
import iconSwapi from "./projects/icons/starWars.png"
import iconMirror from "./projects/icons/magicMirror.png"
import iconListen from "./projects/icons/listenParty.png"

const TabbedPage = styled.div`
  justify-content: center;
  margin: 0 auto;
`


const Projects = props => {
   return <> 
        <Helmet>
            <title>Projects | Param Damle</title>
        </Helmet>
   <Nav />
   <div>
      <PageHeader title="Projects Page" />
    <PageContent>

        <ProjectTab name="This Website" toLink="github.com/paramsdamle/paramsdamle" linkType="ext"
          img={iconSite}
          desc="You're on it! Built from scratch using React JS. Will continue to be updated as I learn more."
        ></ProjectTab>

        <ProjectTab name="API Test" toLink="/SwapiTest"
          img={iconSwapi}
          label="Work In Progress!"
          desc="My first experimentation with API data retrieval. Uses classic Star Wars API and (soon) Google Images API."
        ></ProjectTab>

        <ProjectTab name="Magic Mirror" toLink="/MagicMirror"
          img={iconMirror}
          label="Work In Progress!"
          desc="Uses Face-API.js to detect and draw facial recognition landmarks on user's webcam footage."
        ></ProjectTab>

        <ProjectTab name="Listen Party" toLink="/ListenParty"
          img={iconListen}
          label="[Coming Soon]"
          desc="Uses Spotify API to gather playlist song synchronization info."
        ></ProjectTab>

    </PageContent>
  </div> 
  </>

}

export default Projects