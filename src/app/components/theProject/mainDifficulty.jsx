'use client'
import React, {useState} from 'react';
import MenuList from "@/app/components/theProject/menuList";
import DisplayDifficulty from "@/app/components/theProject/displayDifficulty";

function MainDifficulty(props) {
    const [mode,setMode] = useState("Start")
    const itemClicked=(e)=>{
        setMode(e)
    }
    return (
        <div className={"flex flex-row justify-evenly"}>

            <MenuList onClick={(e)=>setMode(e)}/>
            <DisplayDifficulty name={mode}/>
        </div>
    );
}

export default MainDifficulty;