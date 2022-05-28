import React from 'react'
import image_login from './image-login.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
function Login() {
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
                  // onChange={(e) => setDatalogin({ ...datalogin, email: e.target.value })}
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
                  // onChange={(e) => setDatalogin({ ...datalogin, password: e.target.value })}
                />
              </div>

              <div className=" justify-content-center input-group flex-nowrap submit-btn input-align-login">
                <button
                  
                  className="btn text-add">
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

export default Login