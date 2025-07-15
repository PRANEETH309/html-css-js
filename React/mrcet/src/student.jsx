function Student(props){
    return(
        <div>
            <center>
                <h1 style={{color:"blue",textAlign:"center"}}>Student Information</h1>
                <p style={{color:"red"}}>Name: {props.name}</p>
                <p style={{color:"green"}}>Age: {props.age}</p>
                <p style={{color:"purple"}}>is a student: {props.isStudent ? "Yes":"No"}</p>
            </center>
        </div>
    );
}
export default Student;