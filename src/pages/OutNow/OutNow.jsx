import React from 'react';
import img from '../../assets/outnow/outnow-01.png'

const OutNow = () => {
    return (
        <div className="hero min-h-screen bg-base-100 max-w-md mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-lg rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold text-success">Exclusive Dolls are Out Now!</h1>
                    <p className="py-6">Explore our new collections</p>
                    <button className="btn btn-success">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default OutNow;