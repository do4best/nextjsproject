import React, {useState} from 'react';
type Users={
    name:string,
    onClick:any
}
function MenuItems({name,onClick}:Users) {
    const [hovered,setHovered] = useState(false)
    function activate(){
        setHovered(true)
    }
    function deactivate(){
        setHovered(false)
    }
    function gebackGroundColor(){
        if(hovered){
            return "#a5e9ff"
        }else {
            return "red"
        }
    }

    return (
        <>
        <div onClick={()=>onClick(name)} onMouseEnter={activate} onMouseLeave={deactivate} style={{background:gebackGroundColor()}}>{name?`There is a user name ${name}`:"Sorry there is no user"}</div>
        </>
    );
}

export default MenuItems;