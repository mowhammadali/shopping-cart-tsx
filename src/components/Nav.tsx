import React , { useContext } from 'react';
// react router dom
import { NavLink } from 'react-router-dom';
// components
import Menu from './Menu';
// icons
import { HiOutlineShoppingCart } from 'react-icons/hi';
// import context
import { CartContext } from '../contexts/cart-context-provider';

const Nav = (): JSX.Element => {
    const { state: { itemsCounter } } = useContext(CartContext);

    return (
        <div className='flex justify-between items-center w-full 
        py-8 px-4 sm:py-8 sm:px-12 bg-primary dark:bg-darkPrimary 
        text-text dark:text-darkText'>
            <section className='flex items-center gap-x-[1.2rem] sm:gap-x-[2.5rem]'>
                <NavLink to='/' className='text-[22px] sm:text-3xl font-bold'>
                    Products
                </NavLink>
                <div className='relative'>
                    <NavLink to='/dashboard'>
                        <HiOutlineShoppingCart className='text-[1.6rem] sm:text-[2rem]'/>
                    </NavLink>
                    <span className='badge absolute top-0 right-0 
                    translate-x-[50%] translate-y-[-50%]'>
                        {itemsCounter}
                    </span>
                </div>
            </section>
            <Menu />
        </div>
    )
}

export default Nav;