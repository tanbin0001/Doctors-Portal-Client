import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
  const [appointments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            navigate('/');
            signOut(auth);
            localStorage.removeItem('accessToken');
          }
          return res.json()
        })
        .then(data => {

          setAppoinments(data)
        });
    }
  }, [user])
  return (
    <div>
      <h1 className='p-5 font-bold'>My Appoinments: {appointments.length}</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          {
            appointments.map((appointment, index) =>
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.slot}</td>
                  <td>{appointment.treatment}</td>
                </tr>

              </tbody>)
          }

        </table>
      </div>
    </div>
  );
};

export default MyAppointments;