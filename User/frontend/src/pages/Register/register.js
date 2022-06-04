import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../../action/UserAction";

import image_login from "../Login/image-login.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faFlag,
  faVenusMars,
  faImage,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import Swal from "sweetalert2";

function Register() {
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_salt: "",
    user_birthdate: "",
    user_gender: "",
    // user_avatar: "",
    user_type: "",
  });

  const registrasiUser = async () => {
    try {
      let registrasiUser = await axios({
        method: "POST",
        url: "http://localhost:3000/user/register",
        data: input,
      });
      Swal.fire({
        icon: "success",
        title: "Register Success!",
        text: `You've successfully register an account!`,
      });
      navigate("/");

      console.log(registrasiUser.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const registrasiHandler = () => {
    registrasiUser();
    // navigate("/login");
  };

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
                  name="user_name"
                  // value={name}
                  // onChange={(event) => setName(event.target.value)}
                  onChange={(e) =>
                    setInput({ ...input, user_name: e.target.value })
                  }
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
                  name="user_email"
                  // value={email}
                  // onChange={(event) => setEmail(event.target.value)}
                  onChange={(e) =>
                    setInput({ ...input, user_email: e.target.value })
                  }
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
                  name="user_password"
                  // value={password}
                  // onChange={(event) => setPassword(event.target.value)}
                  onChange={(e) =>
                    setInput({ ...input, user_password: e.target.value })
                  }
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
                  name="user_salt"
                  // value={salt}
                  // onChange={(event) => setSalt(event.target.value)}
                  onChange={(e) =>
                    setInput({ ...input, user_salt: e.target.value })
                  }
                />
              </div>
              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                </span>
                <input
                  type="date"
                  className="form-control"
                  name="user_gender"
                  onChange={(e) =>
                    setInput({ ...input, user_birthdate: e.target.value })
                  }
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
                  name="user_gender"
                  onChange={(e) =>
                    setInput({ ...input, user_gender: e.target.value })
                  }
                />
              </div>

              <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type: Admin or User"
                  name="user_type"
                  // value={type}
                  // onChange={(event) => setType(event.target.value)}
                  onChange={(e) =>
                    setInput({ ...input, user_type: e.target.value })
                  }
                />
              </div>

              <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
                <button
                  className="btn text-add"
                  onClick={() => registrasiHandler()}
                >
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
