'use client'
import React, {useState} from 'react';

function MinuListItem({difficulty,onClick}) {
    const [hovered,setHovered] = useState(false)
    const activate=()=>{
        setHovered(true)
    }
    const deactivate=()=>{
        setHovered(false)
    }
    const getBackground=()=>{
        if(hovered){
            return "blue"
        }else{
            return "red"
        }
    }
    return (
        <div onClick={()=>onClick(difficulty)} style={{backgroundColor:getBackground()}} onMouseEnter={activate} onMouseLeave={deactivate}>set Item :{difficulty}</div>
    );
}

export default MinuListItem;