import React from 'react';

function DisplayDifficulty({name}) {
    return (
        <div className={"w-[250px] h-[250px] border-2 flex justify-center items-center"}>{name?`Difficulty is ${name}`:"No Difficulty"}</div>
    );
}

export default DisplayDifficulty;