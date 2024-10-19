import React from 'react';
import {useQuery} from "@tanstack/react-query";

function UseProducts() {
    const fetchProducts=async ()=>{
        const products = await fetch('https://fakestoreapi.com/products');
return await products.json()
    }
const{data,isError,error,isPending} =useQuery({queryKey:['products'],queryFn:fetchProducts})
    return {
        data,isError,error,isPending
    }
}

export default UseProducts;