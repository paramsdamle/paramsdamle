import React from 'react';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import Helmet from 'react-helmet'
import ProjectTab from './projects/projectTab'
import styled from 'styled-components'

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
          desc="You're on it! Built from scratch using React JS. Will continue to be updated as I learn more."
        ></ProjectTab>

        <ProjectTab name="Magic Mirror" toLink="/MagicMirror"
          label="Work In Progress!"
          desc="Uses Face-API.js to detect and draw facial recognition landmarks on user's webcam footage."
        ></ProjectTab>

        <ProjectTab name="Listen Party" toLink="/ListenParty"
          label="[Coming Soon]"
          desc="Uses Spotify API to gather playlist song synchronization info."
        ></ProjectTab>

    </PageContent>
  </div> 
  </>

}

export default Projects