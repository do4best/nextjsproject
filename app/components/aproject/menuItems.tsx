import React, {useState} from 'react';
type Users={
    name:string,
    onClicked:any
}
function MenuItems({name,onClicked}:Users) {
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
    const onItemClicked=()=>{
        onClicked(onClick)
    }
    return (
        <>
        <div onClick={onItemClicked} onMouseEnter={activate} onMouseLeave={deactivate} style={{background:gebackGroundColor()}}>{name?`There is a user name ${name}`:"Sorry there is no user"}</div>
        </>
    );
}

export default MenuItems;