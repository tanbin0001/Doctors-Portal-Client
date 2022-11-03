import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4  '>
            <InfoCard cardTitle="opening Hours" bgClass="bg-gradient-to-r from-secondary  to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" bgClass="bg-neutral" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" img={phone} bgClass="bg-gradient-to-r from-secondary  to-primary"></InfoCard>
        </div>
    );
};

export default Info;