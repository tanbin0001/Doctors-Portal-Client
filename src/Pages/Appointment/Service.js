import React from 'react';

const service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body ">
                    <div className='text-center'>
                        <h2 className=" text-2xl  text-secondary ">{name} </h2>
                        <p>
                            {
                                slots.length>0
                                    ? <span>{slots[0]}</span>
                                    : <span className='text-red-500'>Try Another Date</span>
                            }
                        </p>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                    </div>
                    <div className="card-actions justify-center">

                        <label
                            htmlFor="booking-modal"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            className="btn btn-sm btn-secondary  text-white uppercase   bg-gradient-to-r from-secondary  to-primary">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default service;