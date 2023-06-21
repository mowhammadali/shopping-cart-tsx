import React , { useState , useEffect } from 'react';
import axios from 'axios';
// types
interface DataState {
    responses: null | {
        id: number;
        price: number;
        title: string;
        image: string;
    }[];
    isLoading: boolean;
    error: string;
}

const useAxios = (url: string) => {
    const [data , setData] = useState<DataState>({
        responses: null,
        isLoading: true,
        error: ''
    })

    useEffect(() => {
        ( async () => {
            try {
                const response = await axios.get(url);
                // console.log(response)
                setData({
                    responses: response.data,
                    isLoading: false,
                    error: '',
                });
            }
            catch (err) {
                setData({
                    responses: null,
                    isLoading: true,
                    error: String(err),
                })
            }
        }) ();
    } , [url])

    return { data };
}

export default useAxios;