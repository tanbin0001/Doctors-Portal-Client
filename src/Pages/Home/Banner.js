import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Banner = () => {
return (

<div className="hero min-h-screen " style={{
            background: `url(${bg}) `,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            
         }}>
    <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-prose rounded-lg shadow-2xl" />
        <div className='text-left'>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem  Ipsum has been the industry's standard dummy text ever since the</p>
           <PrimaryButton></PrimaryButton>
        </div>
    </div>
</div>

);
};

export default Banner;