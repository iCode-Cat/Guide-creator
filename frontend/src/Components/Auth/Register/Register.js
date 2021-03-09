import React, {useState, useRef} from 'react';
import './Register.scss'
import axios from 'axios';

const Register = () => {

const [form , setForm] = useState(null);

const postHandler = async (username, password) => {

    const posts = await axios.post('http://localhost:5000/register' , {username, password})
    .then((result)=>console.log(result))
    .catch((err) => console.log(err.response.data))
    

}

//Refs
const username = useRef();
const password = useRef();

const formHandler = (username, password) => {

    //Post info to backend
    postHandler(username,password)

    }



    return <div className="user-register-container">
        <form onSubmit={(e)=>{e.preventDefault() ; formHandler(username.current.value,password.current.value )}}>
            <label htmlFor="username">USERNAME</label>
            <input ref={username} required type="email"/>
            <label htmlFor="username">PASSWORD</label>
            <input minLength='6' ref={password} required type="password"/>
            <button type="submit">REGISTER</button>
        </form>
    </div>

}

export default Register