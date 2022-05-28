import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import image_login from './image-login.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import Swal from 'sweetalert2';


const Login = (props) => {
  const navigation = useNavigate();
  const { loginCbHandler } = props;

  const [form, setForm] = useState({
    user_email: "",
    user_password: ""
  });

  const loginUser  = async() => {
    try{
      let result = await axios({
        method: 'POST',
        url: "http://localhost:3000/users/login",
        data: form
      })
      const access_token = result.data.access_token;
      localStorage.setItem('access_token', access_token);
      loginCbHandler(true);
      Swal.fire(
        'Login',
        'user has succesffuly login',
        'success'
      )
      navigation('/');
    } catch (err) {
      console.log(err.message)
    }
  };

  const submitHandler = () => {
    loginUser()
  };


  return (
    <>
    <div className="bg-login">
      <br></br>
      <div className="container-md">
        <div className="row justify-content-center bg-row">
          <div className="col-7 bg-col">
            <img src={image_login} alt="" align="center" className="img-responsive"/>
          </div>
          <div className="col-5 bg-col-1">
            <h1>Welcome</h1>
            <h4>Sign in to Your Account</h4>
           
              <div className="input-group flex-nowrap input-align-login">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                  onChange={(e) => setForm({ ...form, user_email: e.target.value })}
                />
              </div>

              <div className="input-group flex-nowrap input-align-login">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setForm({ ...form, user_password: e.target.value })}
                />
              </div>

              <div className=" justify-content-center input-group flex-nowrap submit-btn input-align-login">
                <button className="btn text-add" onClick={ () => submitHandler() }>
                  Sign in
                </button>
              </div>
           
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
    </>
  )
}

export default Login;