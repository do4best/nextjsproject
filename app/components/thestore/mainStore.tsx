import React from 'react';
import UseProducts from "@/app/components/thestore/useProducts";

function MainStore() {

    const{data,isPending,isError,error}=UseProducts;
    if(isPending){
        return <h1>Data is Loading......</h1>
    }
    if(isError){
        return <h1>error.message</h1>
    }
    return (
        <div className={"flex  flex-wrap justify-between text-center p-[20px]"}>
            {
                data?.map((products:any)=>
                {
                    return(
                        <div className={"w-[300px]"} key={products.id}>
                            <img src={products.id} alt={products.title} width={250} height={250}/>
<h3>{products.title}</h3>
                            <p>{products.price}</p>


                        </div>
                    )
                })
            }

        </div>
    );
}

export default MainStore;