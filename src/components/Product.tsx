import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// helper
import { sliceTitle } from '../helper/helper';
// icons
import { BsTrash3Fill } from 'react-icons/bs';
// import context and import types
import { CartContext, InitialState, Action } from '../contexts/cart-context-provider';
// types
type propsType = {
    title: string;
    price: number;
    image: string;
    id: number;
}

type ContextType = {
    state: InitialState;
    dispatch: React.Dispatch<Action>;
}

const Product = (props: propsType): JSX.Element => {
    const { title, price, image , id } = props;

    const { state, dispatch } = useContext<ContextType>(CartContext);

    const item = state.selectedItems.find(item => item.id === id);

    return (
        <div className='flex flex-col gap-y-4 p-4 w-[260px] bg-primary 
        dark:bg-darkPrimary shadow-xl rounded-xl font-bold'>
            <img src={image} alt='product'
                className='w-full h-[300px] rounded-xl' />
            <h2>{sliceTitle(title)}</h2>
            <p>{`${price} $`}</p>
            <section className='flex justify-between items-center'>
                <NavLink to={`/details/${id}`} className='card-btn'
                >
                    Details
                </NavLink>
                {
                    !item 
                    ?
                    <button className='card-btn'
                    onClick={() => dispatch({type: 'Add_Item' , payload: {...props}})}>
                        Add to Cart
                    </button>
                    :
                    <div className='flex items-center gap-x-2'>
                        {
                            item.quantity > 1
                            ?
                            <button className='card-btn'
                            onClick={() => dispatch({type: 'Decrease' , payload: {...props}})}>
                                -
                            </button>
                            :
                            <button className='card-btn'
                            onClick={() => dispatch({type: 'Remove_Item' , payload: {...props}})}>
                                <BsTrash3Fill />
                            </button>
                        }
                        <span>{item.quantity}</span>
                        <button className='card-btn'
                        onClick={() => dispatch({type: 'Increase' , payload: {...props}})}>
                            +
                        </button>
                    </div>  
                }
            </section>
        </div>
    )
}

export default Product;