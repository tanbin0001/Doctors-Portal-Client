import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png';
import appoinment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
         <section style={{
            background: `url(${appoinment})`
         }} className='flex justify-center items-center'>
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={doctorSmall} alt="" />
            </div>
            <div className='lg:flex-1 text-start px-5'>
                <h3 className='text-xl text-primary font-bold py-4'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-6 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni, voluptate earum deserunt laudantium possimus eveniet tempora labore? Assumenda, dolor deserunt tempora molestias nisi placeat perferendis inventore voluptate amet eum praesentium repudiandae autem rerum repellendus et molestiae nemo laborum in?</p>
                <PrimaryButton></PrimaryButton>
            </div>
         </section>
    );
};

export default MakeAppointment;