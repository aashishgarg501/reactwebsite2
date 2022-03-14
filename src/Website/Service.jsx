import React from "react";
import Img5 from "./images/6.jpg";
const Service = () => {
  return (
    <>
      <section className="main-heading my-5 bg-light py-5">
        <div className="text-center">
          <h1 className="display-5">Our Services</h1>
          <hr className="w-50 mx-auto" />
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={Img5}
                        className="img-fluid rounded-start dd service-img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={Img5}
                        className="img-fluid rounded-start dd service-img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={Img5}
                        className="img-fluid rounded-start dd service-img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-12 text-center my-5">
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
export default Service;
