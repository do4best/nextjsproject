'use client'
import React, {useState} from 'react';
import MenuItems from "@/app/components/aproject/menuItems";
type User={

    onItemClicked:any,
    name:any

}
function MenuDisplay({onItemClicked,name}:User) {

    return (
        <>
            <div className="h-[250px] w-[250px] border-amber-300 border-2 flex flex-col justify-around items-center m-auto">
        <MenuItems name={"Hero"} onClick={onItemClicked} />
                <MenuItems name={"Heroine"} onClick={onItemClicked} />
                <MenuItems name={"Vilian"} onClick={onItemClicked} />
            </div>
        </>
    );
}

export default MenuDisplay;