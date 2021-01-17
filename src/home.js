import { Helmet } from 'react-helmet'
import Nav from './components/Nav'
import Awesome from "./assets/images/awesome.gif"
import Surf from "./assets/images/surf.gif"

const Home = () => {
    return <>
        <Helmet>
            <title>Param Damle</title>
        </Helmet>
        <Nav />
        <div style={{textAlign:"center", paddingLeft:"12vw", paddingRight:"12vw"}}>
            <img style={{height:"30vh"}} src={Surf}></img>
            <h1 style={{fontSize:"4vh",color:"#b2f7c1"}}>Hello web surfer! You seem to have happened upon a very obscure website. Check out "Projects" to see what I've got in the works or "About" to learn a bit more about me.</h1>
            <img style={{height:"30vh"}} src={Awesome}></img>

        </div>
    </>;
}
export default Home