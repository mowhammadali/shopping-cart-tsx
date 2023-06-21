import React from 'react';
// helper
import { sliceTitle } from '../helper/helper';
// icons
import { BsTrash3Fill } from 'react-icons/bs';
// import types
import { Action } from '../contexts/cart-context-provider';
// types
interface PropsType {
    image: string;
    price: number;
    title: string;
    quantity: number;
    id: number;
    dispatch: React.Dispatch<Action>;
}

const DashboardCard = (props: PropsType): JSX.Element => {
    const { title , price , image , quantity , dispatch } = props;

    return (
        <div className='w-full p-2 xs:p-4 flex justify-between items-center
        rounded-xl bg-primary dark:bg-darkPrimary shadow-md'>
            <img src={image} alt='product' className='w-[50px] h-[70px]
            sm:w-[100px] sm:h-[140px] rounded-xl'/>
            <section className='flex flex-col items-center gap-y-4'>
                <h2 className='font-bold text-sm sm:text-lg'>
                    {sliceTitle(title)}
                </h2>
                <p className='font-bold text-xs sm:text-sm'>
                    {`${price} $`}
                </p>
            </section>
            <span className='square-badge'>{quantity}</span>
            <section className='flex items-center gap-x-3'>
                {
                    quantity > 1 
                    ? 
                    <button className='h-[30px] py-1 px-2 sm:h-[40px] sm:py-2 sm:px-4 
                    card-btn '
                    onClick={() => dispatch({type: 'Decrease' , payload: {...props}})}>
                        -
                    </button>
                    :
                    <button className='h-[30px] py-1 px-2 sm:h-[40px] sm:py-2 sm:px-4 
                    card-btn'
                    onClick={() => dispatch({type: 'Remove_Item' , payload: {...props}})}>
                        <BsTrash3Fill />
                    </button>
                }
                <button className='h-[30px] py-1 px-2 sm:h-[40px] sm:py-2 sm:px-4 
                card-btn '
                onClick={() => dispatch({type: 'Increase' , payload: {...props}})}>
                    +
                </button>
            </section>
        </div>
    )
}

export default DashboardCard;