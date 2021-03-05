import React, {useState, useRef} from 'react';
import './Login.scss'

const Login = () => {

const [form , setForm] = useState(null);

//Refs
const username = useRef();
const password = useRef();

const formHandler = (event, username, password) => {

    event.preventDefault();
    //Write your code here 
    console.log(username);


    }



    return <div className="user-login-container">
        <form onSubmit={(event)=>{formHandler(event,username.current.value,password.current.value )}}>
            <label htmlFor="username">USERNAME</label>
            <input ref={username} required type="email"/>
            <label htmlFor="username">PASSWORD</label>
            <input minLength='6' ref={password} required type="password"/>
            <button type="submit">LOGIN</button>
        </form>
    </div>

}

export default Login