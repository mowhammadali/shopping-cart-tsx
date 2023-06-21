import React , { useContext } from 'react';
// components
import DashboardCard from '../components/dashboard-card';
import Factor from '../components/Factor';
import Clear from '../components/Clear';
import Checkout from '../components/Checkout';
// import context
import { CartContext } from '../contexts/cart-context-provider';

const Dashboard = (): JSX.Element => {
    const { state: { selectedItems , checkout , itemsCounter , total} , dispatch } = useContext(CartContext);

    return (
        <div className='py-16 px-6 lg:px-16 grid
        grid-cols-1 md:grid-cols-3 md:gap-x-5 gap-y-6'>
            <section className='col-span-2 flex flex-col items-center
            gap-y-6'>
                {
                    selectedItems.map(item => {
                        return (
                            <DashboardCard key={item.id} {...item} dispatch={dispatch}/>
                        )
                    })
                }
            </section>
            <section>
                {
                    selectedItems.length
                    ?
                    <Factor data={{itemsCounter , total ,dispatch}}/>
                    :
                    (
                        checkout
                        ?
                        <Checkout />
                        :
                        <Clear />
                    )
                }
            </section>
        </div>
    )
}

export default Dashboard;