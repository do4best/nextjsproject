import React from 'react';
type AnotherUsers={
    name:string
}
function AnotherDisplay({name}:AnotherUsers) {
    return (
        <div className="h-[250px] w-[250px] border-amber-300 mt-5 border-2 flex flex-col justify-around items-center m-auto">
            {name ? `Yes ${name}` : ""}

        </div>
    );
}

export default AnotherDisplay;