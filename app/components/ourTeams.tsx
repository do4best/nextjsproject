'use client'
import React from 'react';
import {WavyBackground} from "@/app/ui/wavy-background";
import {AnimatedTooltip} from "@/app/ui/animated-tooltip";

const instructors = [
    {
        id: 1,
        name: 'Elena Briggs',
        designation: 'Vocal Coach',
        image:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        name: 'Marcus Reid',
        designation: 'Guitar Instructor',
        image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
        id: 3,
        name: 'Julia Zhang',
        designation: 'Piano Teacher',
        image:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 4,
        name: 'Andre Gomez',
        designation: 'Drumming Expert',
        image:
            'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
];


function OurTeams() {
    return (
        <div className={"relative h-[40rem] overflow-hidden flex  justify-center items-center"}>
            <WavyBackground className={"w-full h-full flex flex-col justify-center items-center max-w-7xl mx-auto"}>

                <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Discover our Team</h2>

                <p className="text-base md:text-lg text-white text-center mb-4">Meet Our Team:  high-proficient and excel in their profession
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae doloribus eaque facilis harum id itaque laboriosam magnam perferendis quae reprehenderit, repudiandae, saepe sunt vel velit voluptatem! Aperiam delectus id qui repellendus. Dolor, illum ipsa iste laborum molestiae natus quas qui repellat saepe, tempora unde, vel. Autem laboriosam neque repellat temporibus.</p>
                <div className="flex flex-row justify-center items-center mb-10 w-full ">
                    <AnimatedTooltip items={instructors}/>
                </div>
            </WavyBackground>
        </div>
    );
}

export default OurTeams;