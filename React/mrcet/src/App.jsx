// // import React from "react";
// // import Student from "./student.jsx";
// // import Greeting from "./rendering.jsx";
// import RenderList from "./renderlist.jsx";
// function App(){
//     const student=[
//         {name: "John",age: 20,isStudent:true},
//         {name: "Smith",age: 21,isStudent:false},
//         {name: "Johnson",age: 19,isStudent:true},
//         {name: "Bob",age: 22,isStudent:true},
//         {name: "Charlie",age: 23,isStudent:false},
//     ];
//     return(
//         <div>
//             <RenderList student={student}/>
//         </div>
//     );
//     // return(
//     //     <div>
//     //         <center>
//     //         <Student name="John" age={20} isStudent={true}/><hr />
//     //         <Student name="Smith" age={22} isStudent={false}/><hr />
//     //         <Student name="Alice" age={19} isStudent={true}/><hr />
//     //         </center>
//     //     </div>
//     // );
//     // return(
//     //     <div>
//     //         <Greeting isloggedin={true} user={"John"}/>
//     //         <Greeting isloggedin={false} user={"smith"}/>
//     //     </div>
//     // );
// }
// export default App;

import React from "react"
import { Events,DoubleClickEvent, MouseInEvent, MouseOutEvent,KeyBoardEvent,KeyDownEvent } from "./event.jsx";

function App(){
    return(
        <div>
            <Events />
            <DoubleClickEvent />
            <MouseInEvent />
            <MouseOutEvent/>
            <KeyBoardEvent />
            <KeyDownEvent />
        </div>
    )
}
export default App;