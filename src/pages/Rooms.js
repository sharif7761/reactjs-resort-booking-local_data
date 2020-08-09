import React, {  Fragment } from 'react';


import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import RoomsContainer from '../components/RoomsContainer';


const Rooms = () => {
    return(
        <Fragment>
        <Hero hero="roomsHero">
            <Banner title="our rooms" >
                <Link to="/" className="btn-primary" >
                    return home
                </Link>
                
            </Banner>
        </Hero> 
         
        <RoomsContainer></RoomsContainer>

        <Footer></Footer>

        </Fragment>  
        );
};

export default Rooms;