'use client'
import React from 'react';
import mydata from '../../data/data.json'
import Link from "next/link";
import {BackgroundGradient} from "@/app/ui/background-gradient";

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}
function FeturedProducts() {

   const featuredProduct= mydata.courses.filter((course:Course)=>course.isFeatured)

    return (
        <>
<div className="py-12 bg-gray-900">
    <div><div className="text-center">
        <h2 className={"text-base text-teal-600 font-semibold tracking-wide uppercase"}>Featured Product</h2>
        <p className={"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"}>Product Details</p>
    </div>
    </div>
    <div className={"mt-10"}>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 justify-center">{featuredProduct.map((course:Course)=>(
            <div key={course.id} className={"flex justify-center"}><BackgroundGradient className={"flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"}><div className={"" +
                "p-4 sm:p-6 flex flex-col items-center text-center flex-grow"}>
                <p className={"text-log sm:text-xl text-black mt-4 mb-4 dark:text-neutral-200"}>{course.title}</p><p>{course.description}</p>
                <Link href={`/products/`} className={"px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:gb-gray-100 transition duration-200"}>Learn More</Link>
            </div></BackgroundGradient></div>
        ))}</div>
    </div>
    <div className={"mt-20 text-center"}>
        <Link href={"/products"} className={"px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"}>
            Product Details
        </Link>
    </div>

</div>

        </>
    );
}

export default FeturedProducts;