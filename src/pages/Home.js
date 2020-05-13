import React, { Fragment } from 'react';

import Banner from '../components/Banner';
import About from '../components/About';
import Contact from '../components/Contacts';
import Projects from '../components/Projects';


function Home () {
    return (
        <Fragment>
            <Banner />
            <About />
            <Projects />
            <Contact />
        </Fragment>
    );
}

export default Home;