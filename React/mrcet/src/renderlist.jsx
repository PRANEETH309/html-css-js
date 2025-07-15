import React from "react";
import Student from "./student";
function RenderList({student}){
    return(
        <div>
            {student.map((student,index)=>(
                <Student key={index}{...student}/>
            ))}
        </div>
    );
}
export default RenderList;