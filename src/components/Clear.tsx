import React from 'react';
import { NavLink } from 'react-router-dom';

const Clear = (): JSX.Element => {
    return (
        <div className='dashboard-card items-center'>
            <h2 className='text-2xl font-bold'>
                Want to Buy?
            </h2>
            <NavLink className='card-btn' to='/'>Go to Shop</NavLink>
        </div>
    )
}

export default Clear;