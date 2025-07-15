import React from "react";

function DoubleClickEvent(){
    const handleDoubleClick=()=>alert('Button double clicked');
    return(
        <div> 
            <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </div>
    );
}
export default DoubleClickEvent();