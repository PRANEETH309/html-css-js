import React from "react";

function MouseOutEvent(){
    const handleMouseLeave=()=>alert('Mouse Left!');
    return(
        <div>
            <button onMouseLeave={handleMouseLeave}>Hover Out Me</button>
        </div>
    );
}
export default MouseOutEvent();