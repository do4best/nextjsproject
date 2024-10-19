'use client'
import React from 'react'
import MenuDisplay from "@/app/components/aproject/menuDisplay";
import AnotherDisplay from "@/app/components/aproject/anotherDisplay";
import {useState} from "react";
import {MouseEvent} from "react";


export default function MainValue() {
    const [value,setValue] = useState<string>("Hello");
    // const onMenuListItem=(d:MouseEvent)=>{
    //     setValue(d)
    // }

    return (
        <>

                <div className="flex flex-row justify-around ">
                    <MenuDisplay name={value} onItemClicked={(e:any) : void=>setValue(e)} />
                    <AnotherDisplay name={value}/>
                </div>

        </>
    );
}
