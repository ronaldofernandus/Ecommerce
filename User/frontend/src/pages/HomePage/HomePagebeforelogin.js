import React from "react";
import "./style.css";

function HomePagebeforelogin() {
  return (
    <>
      <nav className="bg-image">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 className="text-center text-style-h1">Welcome to Distro</h1>
              <h4 className="text-center text-style-h4">
                Kami menyediakan segala jenis baju dengan harga yang bisa
                dijangkau semua kalangan masyarakat
              </h4>
              <br></br>
              <h5 className="text-center text-style-h4">
                Daftarkan Diri Anda dan Dapatkan Diskon Menarik
              </h5>
              <br></br>
              <br></br>
            </div>
            <div class="col-3 offset-md-2">
              <div className=" input-group flex-nowrap submit-btn input-align">
                <button className="btn text-add">Login</button>
              </div>
              <br></br>
            <br></br>
            </div>
            <div class="col-3 offset-md-2">
              <div className=" input-group flex-nowrap submit-btn input-align">
                <button className="btn text-add">Register</button>
              </div>
              <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HomePagebeforelogin;
