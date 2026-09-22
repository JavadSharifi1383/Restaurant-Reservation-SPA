import Header from '../components/pageLayouts/Header';
import Footer from '../components/pageLayouts/Footer';
import Background from '../components/homePage/Hero';
import {Cards} from '../components/homePage/Cards';
import restaurants from '../restaurants';


function Home() {

    return (
        <>
            <Header name="javad"/>
            <Background />
            <Cards restaurants={restaurants}/>
            <Footer />
        </>
    );
}

export default Home;