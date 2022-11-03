import React from 'react';
import Services from './Services';
 

const Service = ( {service}) => {
    return (
        <div  className="mt-10">
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                <img src={service.img} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                </div>
            </div>

        </div>
     
    );
};

export default Service;