import React from 'react';
import MinuListItem from "@/app/components/theProject/minuListItem";

function MenuList({onClick}) {
    return (
        <div className={"w-[250px] h-[250px] border-2 flex flex-col justify-center justify-items-center"}>
            <MinuListItem onClick={onClick} difficulty={"Low"}/>
            <MinuListItem onClick={onClick} difficulty={"Medium"}/>
            <MinuListItem onClick={onClick} difficulty={"High"}/>
            <MinuListItem onClick={onClick} difficulty={"Insane"}/>
        </div>
    );
}

export default MenuList;