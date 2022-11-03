import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Form = () => {
    return (
        <div className="hero min-h-sm" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h3 className='text-primary font-bold'>Contact Us</h3>
                    <h1 className="mb-5 text-3xl ">Stay connected with us</h1>
                    
                    <div className="hero min-h-sm   ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Form;