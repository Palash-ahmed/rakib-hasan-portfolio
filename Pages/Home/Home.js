import React from 'react';
import AboutMe from './AboutMe';

import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import MyProjects from './MyProjects';
import ProfessionalSkill from './ProfessionalSkill';


const Home = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    return (
        <div className='mt-8 over overflow-hidden lg:overflow-visible '>
            <Banner></Banner>
            <hr className='my-16  border-gray-300 shadow-2xl' />
            <MyProjects></MyProjects>

         

            <ProfessionalSkill></ProfessionalSkill>
            <AboutMe></AboutMe>
            <Contact></Contact>
            <hr className='mt-16   border-gray-300 shadow-2xl' />
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;