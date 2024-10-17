'use client'
import MenuDisplay from "@/app/components/aproject/menuDisplay";
import AnotherDisplay from "@/app/components/aproject/anotherDisplay";
import {useState} from "react";


export default function MainValue() {
    const [value,setValue] = useState("Value")
    const onMenuListItem=(d:string)=>{
        setValue(d)
    }

    return (
        <>

                <div className="flex flex-row justify-around ">
                    <MenuDisplay name={value} onItemClicked={onMenuListItem} />
                    <AnotherDisplay name={value}/>
                </div>

        </>
    );
}
