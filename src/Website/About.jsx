import React from "react";
import Img4 from "./images/4.jpg";
const About = () => {
  return (
    <>
      <section className="main-heading my-5">
        <div className="text-center">
          <h1 className="display-5">About us</h1>
          <hr className="w-50 mx-auto" />
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
              <figure>
                <img src={Img4} alt="" className="img-fluid about-img" />
              </figure>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column">
              <h1>My Journey</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, temporibus expedita? Aliquam tenetur quos qui
                placeat perspiciatis vero, amet natus repellat modi labore nam
                quas, optio unde ipsa impedit. Error!
              </p>
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Who am i"
              >
                Check-more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
