import React from 'react';
import { NavLink } from 'react-router-dom';

const Checkout = (): JSX.Element => {
    return (
        <div className='dashboard-card items-center'>
            <h2 className='text-2xl font-bold'>
                Checkout Successfully
            </h2>
            <NavLink to='/' className='card-btn'>
                But More
            </NavLink>
        </div>
    )
}

export default Checkout;