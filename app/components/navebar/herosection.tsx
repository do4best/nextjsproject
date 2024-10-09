import React from 'react';
import Link from "next/link";
import {Spotlight} from "@/app/ui/Spotlight";
import {Button} from "@/app/ui/moving-border";

function Herosection() {
    return (
        <div className={"h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"}>
            <Spotlight className={"-top-40 left-0 md:left-60 md:-top-20 "} fill={"blue"}/>
            <h1 className={"mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"}>All Solution at one place</h1>
            <p className={"mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg max-auto"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam laudantium maxime necessitatibus quia recusandae tenetur. Earum facere maxime officiis placeat praesentium quas. Eos exercitationem fuga id, illum incidunt libero molestias numquam omnis perferendis possimus, rerum ullam unde voluptatem! Cupiditate debitis nihil nobis officia quis reiciendis, repudiandae sed veritatis voluptatum.</p>
            <div className="mt-4">
                <Link href={'/products'}><Button>Our Products</Button></Link>
            </div>
        </div>
    );
}

export default Herosection;