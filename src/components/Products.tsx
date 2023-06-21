import React , { useContext } from 'react';
// useAxios
import useAxios from '../hooks/useAxios';
// mui
import { CircularProgress , Alert } from '@mui/material';
// components
import Product from './Product';
// import context
import { ProductsContex } from '../contexts/products-context-provider';


const Products = (): JSX.Element | null => {
    const { responses , isLoading , error } = useContext(ProductsContex);

    if (error) {
        return (
            <Alert variant="outlined" severity="error" className='flex justify-center'>
                {error}
            </Alert>
        )
    }

    if (responses === null) {
        return <div className='flex justify-center'>
            <CircularProgress color="success"/>
        </div>;
    }

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-x-6 gap-y-24 justify-items-center'>
            {
                isLoading 
                ? 
                <div className='flex justify-center'>
                    <CircularProgress color="success"/>
                </div>
                :
                responses.map(response => {
                    return (
                        <Product key={response.id} {...response}/>
                    )
                })
            }
        </div>
    )
}

export default Products;