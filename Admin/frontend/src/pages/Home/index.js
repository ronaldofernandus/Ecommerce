import React from "react";
import "./libraries/bootstrap/css/bootstrap.css";
import "./styles/main.css";

import { detail1 } from "./image";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="section-details-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 pl-lg-0">
            <div className="card card-details">
              <h1>Barcelona</h1>
              <p>Spain</p>
              <div className="gallery">
                <div className="xzoom-container">
                  <img
                    src={detail1}
                    alt=""
                    className="xzoom"
                    xoriginal={detail1}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>

                <div className="xzoom-thumbs">
                  <Link to={detail1}>
                    <img
                      src={detail1}
                      alt=""
                      className="xzoom-gallery"
                      style={{ width: "128" }}
                      xpreview={detail1}
                    />
                  </Link>
                </div>
              </div>
              <h2>Tentang Wisata</h2>
              <p>
                Barcelona is a city on the coast of northeastern Spain. It is
                the capital and largest city of the autonomous community of
                Catalonia, as well as the second most populous municipality of
                Spain. With a population of 1.6 million within city limits
              </p>
              <div className="features row">
                <div className="col-md-4 border-left">
                  <img
                    src="frontend/images/a.png"
                    alt=""
                    className="features-images"
                  />
                  <div className="description">
                    <h3>Feautred Events</h3>
                    <p>Flamenco</p>
                  </div>
                </div>

                <div className="col-md-4 border-left">
                  <img
                    src="frontend/images/b.png"
                    alt=""
                    className="features-images"
                  />
                  <div className="description">
                    <h3>Languange</h3>
                    <p>Spain</p>
                  </div>
                </div>
                <div className="col-md-4 border-left">
                  <img
                    src="frontend/images/b.png"
                    alt=""
                    className="features-images"
                  />
                  <div className="description">
                    <h3>Languange</h3>
                    <p>Spain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
