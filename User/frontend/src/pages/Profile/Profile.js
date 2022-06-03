import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faVenusMars,
  faCalendarDays,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import profile from './profile-1.jpg'

function Profile() {
  return (
    <div className="color-full-page">
    <div className="container-sm">
      <div className="row row-bg ">
        <div className="col-md-6 offset-md-3 line-white"></div>
        <br></br>
        <div className="col-md-6 offset-md-3 col-bg justify-content-center">
         
          <img
            className="img-fluid img-thumbnail mx-auto h-25 d-block rounded-circle"
            src={profile}
            alt=""
          />
          <br></br>
          <br></br>
          <div className="card border-warning">
            <div className="card-body" style={{ width: "18rem" }}>
              <h5 className="card-title">
                <span>
                  <FontAwesomeIcon icon={faIdBadge}></FontAwesomeIcon>
                </span> {" "}
                 Name
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Name</h6>
            </div>
          </div>
          <br></br>
          <br></br>

          <div className="card border-success">
            <div className="card-body" style={{ width: "18rem" }}>
              <h5 className="card-title">
                <span>
                  <FontAwesomeIcon icon={faVenusMars}></FontAwesomeIcon>
                </span> {" "}
                 Gender
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Perempuan</h6>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="card border-primary mb-3">
            <div className="card-body" style={{ width: "18rem" }}>
              <h5 className="card-title">
                <span>
                  <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                </span> {" "}
                 Birthdate
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">21-02-2010</h6>
            </div>
          </div>
          <br></br>
          
          <div className="card border-danger">
            <div className="card-body" style={{ width: "18rem" }}>
              <h5 className="card-title">
                <span>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </span> {" "}
                 Email
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">Email</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile