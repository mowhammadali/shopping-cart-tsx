import React from 'react';
// hooks
import useAxios from '../hooks/useAxios';
// types
type ProductsContextType = {
    responses: {
        id: number,
        price: number,
        title: string,
        image: string,
        description?: string,
        category?: string,
    }[] | null;
    isLoading: boolean;
    error: string;
}

type PropsType = {
    children: React.ReactNode;
}
// create context
export const ProductsContex = React.createContext<ProductsContextType>({
    responses: null,
    isLoading: false,
    error: '',
})

const ProductsContextProvider = ({children}: PropsType) => {
    const { data: { responses , isLoading , error } } = useAxios('https://fakestoreapi.com/products');
  
    return (
        <ProductsContex.Provider value={{ responses , isLoading , error }}>
            {children}
        </ProductsContex.Provider>
    )
}

export default ProductsContextProvider;