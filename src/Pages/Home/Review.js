import React from 'react';


const Review = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
      
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi dolores, minus tempore ratione unde.</p>
                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img   src= {review.img} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{review.name}</h4>
                        <h3>{review.location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;