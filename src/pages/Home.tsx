import React from 'react'; 
// components
import Products from '../components/Products';

const Home: React.FC = () => {
    return (
        <div className='w-full py-16 px-[30px] md:px-[60px]'>
            <Products />
        </div>
    )
}

export default Home;