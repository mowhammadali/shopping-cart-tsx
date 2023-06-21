import React , { useReducer , useEffect } from 'react';
// types 
export type InitialState = {
    selectedItems: any[];
    itemsCounter: number;
    total: number;
    checkout: boolean;
}

export type Action = {
    type: 'Add_Item' | 'Remove_Item' | 'Increase' | 'Decrease' | 'Checkout' | 'Clear';
    payload: {
        id: number,
        price: number,
        title: string,
        image: string,
        quantity?: number,
    } | null;
}

type PropsType = {
    children: React.ReactNode;
}

type CreateContextType = {
    state: InitialState;
    dispatch: React.Dispatch<Action>;
}
// reducer
const initialState: InitialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const sumItem = (items: any[]) => {
    const itemsCounter = items.reduce((acc , cur) => acc + cur.quantity , 0);
    const total = items.reduce((acc , cur) => acc + (cur.price * cur.quantity) , 0).toFixed(2);
    return { itemsCounter , total };
}

const reducer = (state: InitialState , action: Action) => {
    const { type , payload } = action;

    switch (type) {
        case 'Add_Item':
            if (!state.selectedItems.find(item => item.id === payload?.id)) {
                state.selectedItems.push({...payload , quantity: 1})
            }
            return {
                selectedItems: [...state.selectedItems],
                ...sumItem(state.selectedItems),
                checkout: false,
            }

        case 'Remove_Item':
            const newSelectedItems: any[] = state.selectedItems.filter(item => item.id !== payload?.id);
            return {
                selectedItems: [...newSelectedItems],
                ...sumItem(newSelectedItems),
                checkout: false,
            }

        case 'Increase':
            const increasedItems = state.selectedItems.map(item => {
                if (item.id === payload?.id) {
                    item.quantity += 1;
                }
                return item;
            })
            
            return {
                selectedItems: [...increasedItems ],
                ...sumItem(increasedItems),
                checkout: false,
            }

        case 'Decrease':
            const decreaseItems = state.selectedItems.map(item => {
                if (item.id === payload?.id) {
                    item.quantity -= 1;
                }
                return item;
            })

            return {
                selectedItems: [...decreaseItems],
                ...sumItem(decreaseItems),
                checkout: false,
            }

        case 'Checkout':
            return {...initialState , selectedItems: [] , checkout: true};

        case 'Clear':
            return {...initialState , selectedItems: [] , checkout: false};
            
        default: 
            return state;
    }
}
// create context
export const CartContext = React.createContext<CreateContextType>({
    state: {...initialState},
    dispatch: () => {}
});

const CartContextProvider = ({children}: PropsType) => {
    const [ state , dispatch ] = useReducer(reducer , (
        JSON.parse(localStorage.getItem('state')!) || initialState
    ));

    useEffect(() => {
        localStorage.setItem('state' , JSON.stringify(state));
    } , [state])
    
    return (
        <CartContext.Provider value={{state , dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;