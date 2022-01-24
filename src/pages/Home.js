import React from 'react';
import Video from '../components/Video';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Fact from '../components/Fact';
import Faq from '../components/Faq';
import Blog from '../components/Blog';
import Pricing from '../components/Pricing';
import Doctor from '../components/Doctor';
import Newsleter from '../components/Newsleter';
import Brand from '../components/Brand';
import Perched from '../components/Perched';
import Feature from '../components/Feature';

function Home() {
    return (
        <main>
            <Slider/>
            <Feature/>
            <Services/>
            <Video/>
            <Faq/>
            <Fact/> 
            <Pricing/>
            <Doctor/>
            <Perched/>
            <Blog/>
            <Brand/>
            <Newsleter/>
        </main>
    )
}

export default Home;
