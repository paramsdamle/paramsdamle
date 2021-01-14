import React from 'react'
import PageHeader from './components/PageHeader'
import PageContent from './components/PageContent'
import Nav from './components/Nav'
import Helmet from 'react-helmet'

const About = props => <>
        <Helmet>
            <title>About Me | Param Damle</title>
        </Helmet>
  <Nav />
  <div>
    <PageHeader title="About Page" />
    <PageContent>
      <p>Welcome to the About Page!</p>
      <img
        src="https://source.unsplash.com/xotmnyN3gdc/200x200"
        alt="Photo by Isabella Jusková"
      />
    </PageContent>
  </div>
</>

export default About