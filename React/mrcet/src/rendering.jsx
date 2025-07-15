function Greeting(name){
    if(name.isloggedin){
        return <h1>Welcome,{name.user}!</h1>;
    }else{
        return <h1> Please Log in</h1>;
    }
}
export default Greeting;