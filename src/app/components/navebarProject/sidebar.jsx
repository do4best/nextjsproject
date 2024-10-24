import React from 'react';

function Sidebar(props) {
    return (
        <>
        <div className="w-[250px] h-full bg-gray-900 text-white fixed top-0 left-0">
            <div className="felx justify-between items-center bg-gray-800 p-2">
                <button className={"cursor-pointer bg-none border-0 flex items-center p-2"}></button>
                <div></div>
            </div>
        </div>
        </>
    );
}

export default Sidebar;