import { Helmet } from 'react-helmet'
import Nav from './components/Nav'

const Home = () => {
    return <>
        <Helmet>
            <title>Param Damle</title>
        </Helmet>
        <Nav />
        <h1>Home page content</h1>
    </>;
}
export default Home