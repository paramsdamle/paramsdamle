import { BrowserRouter as Router, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom'
// import Projects from '../projects';
import MagicMirror from './magic-mirror/mirror';
import ListenParty from './listen-party/listenParty'
import SwapiTest from './swapi-test/swapi-test'

import Home from "../home";

let ProjectRoutes = () => {
    return <>
    <Switch>
    
    <Route exact path="/MagicMirror" component={MagicMirror} />
    
    <Route exact path="/ListenParty" component={ListenParty} />

    <Route exact path="/SWAPItest" component={SwapiTest} />

    <Route>
        <Redirect to="/"/>
    </Route>
    </Switch>
    </>
};

export default ProjectRoutes;