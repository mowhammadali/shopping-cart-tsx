import React , { useContext } from 'react';
// import types
import { Action } from '../contexts/cart-context-provider';
// types
type PropsType = {
    data: {
        itemsCounter: number;
        total: number;
        dispatch: React.Dispatch<Action>;
    }
}

const Factor = ({ data }: PropsType): JSX.Element => {

    return (
        <div className='dashboard-card font-bold'>
            <p>Total Items: {data.itemsCounter}</p>
            <p>Total Payments: {`${data.total} $`}</p>
            <section className='flex items-center justify-between'>
                <button className='card-btn bg-info 
                dark:bg-darkInfo'
                onClick={() => data.dispatch({type: 'Clear' , payload: null})}>
                    Clear
                </button>
                <button className='card-btn bg-info 
                dark:bg-darkInfo'
                onClick={() => data.dispatch({type: 'Checkout' , payload: null})}>
                    Checkout
                </button>
            </section>
        </div>
    )
}

export default Factor;