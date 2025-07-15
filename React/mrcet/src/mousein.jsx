import React from "react";

function MouseInEvent(){
    const handleMouseEnter=()=>alert('Mouse Entered');
    return(
        <div>
            <button onMouseEnter={handleMouseEnter}>Hover Over Me</button>
        </div>
    );
}
export default MouseInEvent();