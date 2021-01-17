import React from 'react'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Nav from './components/Nav'
import Helmet from 'react-helmet'
import BioPic from "./assets/images/biopic.jpg"

const About = props => <>
        <Helmet>
            <title>About Me | Param Damle</title>
        </Helmet>
  <Nav />
  <div>
    <PageHeader title="About Page" />
    <PageContent>
      <img src={BioPic} style={{width: "20vw", float:"left", marginTop: "2vh", marginLeft: "2vh", marginRight:"2vh"}}/>
      <div style={{marginTop:"2vh", marginLeft:"2vh", width: "80vw"}}>
        <h1>Hello! I'm Param. Welcome to my website.</h1>
        <p style={{fontSize:"3vh"}}>Right now I'm just using the site to experiment with React, Javascript, and APIs I find interesting.
          A little more about me: I'm a first-year computer science student at UVA, and I'm interested in everything from web development to design to artificial intelligence!
          In my free time, I like to watch YouTube, listen to Spotify, and write/produce my own music.
          <br/> <br/>
          The site may not look that great right now, but I'm always improving it. After a few projects, it'll really start coming together. In the meantime,
          if you have any suggestions, you can contact me at [the domain name of this site] at gmail dot com!
        </p>
      </div>
    </PageContent>
  </div>
</>

export default About