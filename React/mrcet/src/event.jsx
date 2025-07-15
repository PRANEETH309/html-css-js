import React from "react";

export function Events(){
    const handleClick=()=>alert('Button clicked');
    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export function DoubleClickEvent(){
    const handleDoubleClick=()=>alert('Button double clicked');
    return(
        <div> 
            <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </div>
    );
}


export function MouseInEvent(){
    const handleMouseEnter=()=>alert('Mouse Entered');
    return(
        <div>
            <button onMouseEnter={handleMouseEnter}>Hover Over Me</button>
        </div>
    );
}

export function MouseOutEvent(){
    const handleMouseLeave=()=>alert('Mouse Left!');
    return(
        <div>
            <button onMouseLeave={handleMouseLeave}>Hover Out Me</button>
        </div>
    );
}

export function KeyBoardEvent(){
    const handleKeyPress=(event)=>{
        if(event.key==='Enter'){
            alert('Enter Key Pressed');
        }
    };
    return <input type="text" onKeyPress={handleKeyPress} placeholder="Press Enter"/>;
}

export function KeyDownEvent(){
    const handleKeyDown=(event)=>{
        alert(`Key down: ${event.key}`);
    };
    return <input type="text" onKeyDown={handleKeyDown} placeholder="Press Any Key"/>;
}