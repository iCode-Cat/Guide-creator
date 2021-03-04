import React, {useState, useRef} from 'react';
import './Register.scss'

const Register = () => {

const [form , setForm] = useState(null);

//Refs
const username = useRef();
const password = useRef();

const formHandler = (username, password) => {

    //Write your code here 
    console.log(username);


    }



    return <div className="user-register-container">
        <form onSubmit={(e)=>{e.preventDefault() ; formHandler(username.current.value,password.current.value )}}>
            <label htmlFor="username">USERNAME</label>
            <input ref={username} required type="email"/>
            <label htmlFor="username">PASSWORD</label>
            <input minLength='3' ref={password} required type="password"/>
            <button type="submit">REGISTER</button>
        </form>
    </div>

}

export default Register