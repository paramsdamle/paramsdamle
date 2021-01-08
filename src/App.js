import React, { Component } from 'react'
import Home from './home'
import Projects from './projects.js'
import About from "./about"
import ProjectRoutes from "./projects/projectRoutes"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          
          <Switch>
                        

            <Route exact path="/" component={Home}></Route>
            
            <Route exact path='/about' component={About}></Route>

            <Route path='/about'>
              <Redirect exact to="/about" />
            </Route>

            <Route exact path="/projects" component={Projects}>
            </Route>

            <Route path="/projects">
              <Redirect exact to="/projects" />
            </Route>

            <ProjectRoutes />

            <Route>
              <Redirect exact to="/"/>
            </Route>

            {/* <Route component={() => {
                return (
                <h3>404 - Not found</h3>
                      );} }></Route> */}
          </Switch>  
        </div>
        
      </Router>    
      
      )
  }
}

export default App;
