import React from "react";
import image_login from "../Login/image-login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faFlag,
  faVenusMars,
  faImage,
  faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";


function Register() {
  return (
    <div className="bg-login">
      <br></br>
      <div className="container-md">
        <div className="row justify-content-center bg-row">
          <div className="col-6 bg-col">
            <img
              src={image_login}
              alt=""
              align="center"
              className="img-responsive"
            />
          </div>
          <div className="col-6 bg-col-1">
            <h1>Welcome</h1>
            <h4>Create Your Account</h4>
            <form>
              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  // value={name}
                  // onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                  // value={email}
                  // onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  // value={password}
                  // onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Salt"
                  name="salt"
                  // value={user_salt}
                  // onChange={(event) => setSalt(event.target.value)}
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Gender: Female or Male"
                  name="gender"
                  // value={gender}
                  // onChange={(event) => setGender(event.target.value)}
                />
              </div>

              <div class="input-group mb-3 flex-nowrap input-align">
              <span className="input-group-text">
                  <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                </span>
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile01"
                ></input>
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                </span>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Gender: Female or Male"
                  name="gender"
                  // value={gender}
                  // onChange={(event) => setGender(event.target.value)}
                />
              </div>

              <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
                <button className="btn text-add" type="submit">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Register;
