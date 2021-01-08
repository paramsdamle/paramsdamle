import React from 'react';
import PageContent from './components/PageContent';
import PageHeader from './components/PageHeader'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom'
import {Button} from 'react-bootstrap';


const Projects = props => {
   return <> 
   <Nav />
   <div>
      <PageHeader title="Projects Page" />
    <PageContent>
        <p>Placeholder page content on projects page</p>
      
        <NavLink exact to="/MagicMirror">Mirror</NavLink>
        <br/>
        <NavLink exact to="/ListenParty">Listen Party!</NavLink>

    </PageContent>
  </div> 
  </>

}

export default Projects