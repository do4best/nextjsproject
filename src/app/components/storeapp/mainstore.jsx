
import React from 'react';
import UseProducts from "@/app/components/storeapp/useProducts";
import {allowedDisplayValues} from "next/dist/compiled/@next/font/dist/constants";

function Mainstore(props) {
    const {data,isPending,isError,error} =  UseProducts()

if(isPending){
    return <h1>Loading ......</h1>
}
if(isError){
    return <h1>{error.message}</h1>
}
    return (
     <>
         <div className={"flex  flex-wrap justify-between text-center p-[20px]"}>
            {
                data.map((product =>{

return(
                    <div className={"w-[300px]"}  key={product.id}>
                        <img src={product.image} alt={product.title} width={250} height={250} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </div>
)
                }))
            }
         </div>
     </>
    );
}

export default Mainstore;