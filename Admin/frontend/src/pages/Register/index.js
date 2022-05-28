import React, { useState, useEffect } from "react";
import register from "../../assets/images/register.jpg";
import { Button, Gap, Input } from "../../components/addOns";
import "./register.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
// import { registrasiUser } from "../../Axios/userAxios";

const Register = () => {
  const [input, setInput] = useState({
    profile: "",
    nama: "",
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const registrasiHandler = () => {
    // registrasiUser(input);
    // navigate("/login");
  };
  return (
    <div className="main-page">
      <div className="left">
        <img src={register} className="bg-image" alt="imageBg" />
      </div>
      <div className="right">
        <p className="title"> Register</p>

        <Input
          type="file"
          onChange={(e) => setInput({ ...input, profile: e.target.value })}
          label="Profile"
          placeholder="Profile"
          name="profile"
          className="form-control"
        />
        <Input
          type="text"
          onChange={(e) => setInput({ ...input, nama: e.target.value })}
          label="Nama"
          placeholder="Nama"
          // name="nama"
          className="form-control"
        />
        <Input
          type="email"
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          label="Email"
          placeholder="Email"
          name="email"
          className="form-control"
        />
        <Gap height={18} />
        <Input
          onChange={(e) => setInput({ ...input, username: e.target.value })}
          type="text"
          label="Username"
          placeholder="Username"
          name="username"
          className="form-control"
        />
        <Gap height={18} />
        <Input
          type="password"
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          label="Password"
          placeholder="Password"
          name="password"
          className="form-control"
        />
        <Gap height={50} />

        <Gap height={50} />
        <Button title="Register" onClick={() => registrasiHandler()} />
        <Gap height={100} />
        <div className="w-100 text-center mt-4 text">
          <p className="mb-0">Do have an account?</p>
          <Link
            style={{
              color: "red",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
