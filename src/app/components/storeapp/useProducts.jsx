
import React from 'react';
import {useQuery} from "@tanstack/react-query";

function UseProducts(props) {
    const fetchProducts=async ()=>{
const products = await fetch('https://fakestoreapi.com/products')
        return await products.json();

    }
    const {data,isPending,isError,error} = useQuery({queryKey:['products'],queryFn:fetchProducts})
    return {
        data,isPending,isError,error
    }
}

export default UseProducts;