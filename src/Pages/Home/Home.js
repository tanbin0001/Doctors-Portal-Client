import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ExceptionalDental from './ExceptionalDental';
 
import Form from './Form';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';



const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Form></Form>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;