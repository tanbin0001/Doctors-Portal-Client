import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);



    const formattedDate = format(date, 'PP');
    

    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formattedDate]);
    return (
        <div className='mt-10'>


            <h4 className="text-xl text-secondary text-center    "> Available Application on: {format(date, 'PP')} </h4>
            <h3 className='text-center text-2xl ' > Please select a service. </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-24' > {
                services.map(service => <Service key={service._id}
                    service={service}
                    setTreatment={setTreatment}>
                </Service>)
            }
            </div> {
                treatment && < BookingModal
                    treatment={treatment}
                    setTreatment={setTreatment}
                    date={date}>


                </BookingModal>}
        </div >
    );
};

export default AvailableAppointments;