import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);
    const formattedDate = format(date, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;


        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot ,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    toast(`Appointment is set, ${formattedDate} at ${slot}`);
                }
                else{
                    toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                 //to close the modal!
                setTreatment(null);
            })

    }

    return (
        <div>
            <label htmlFor="booking-modal" className="btn modal-button">open modal</label>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary"> Booking for: {name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-4 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date, 'PP')} className="input w-full  input-bordered max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option  value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input w-full  input-bordered max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input w-full  input-bordered max-w-xs" />
                        <input type="text" name='number' placeholder="Your Number" className="input w-full  input-bordered max-w-xs" />
                        <input type="submit" value="submit" className=" btn btn-secondary w-full max-w-xs  bg-gradient-to-r from-secondary  to-primary" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;




