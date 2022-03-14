import React from "react";
import Img1 from "./images/1.jpg";
import Img2 from "./images/2.jpg";
import Img3 from "./images/3.jpg";
import Img4 from "./images/4.jpg";
import Img5 from "./images/6.jpg";
import Img7 from "./images/7.jpg";
import Img8 from "./images/8.jpg";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="main-heading my-3">
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

      <section className="main-heading my-3">
        <div className="text-center">
          <h1 className="display-5">Gallary</h1>
          <hr className="w-50 mx-auto" />
          <div className="container">
            <div className="row gy-2">
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img7} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img7} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img7} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img4} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img4} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img4} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img8} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img8} alt="" className="img-fluid" />
                </figure>
              </div>
              <div className="col-md-4 col-10 col-xxl-4 mx-auto">
                <figure>
                  <img src={Img8} alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-heading my-5 py-2 bg-info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-10 col-xxl-12 py-5 text-center">
              <h1 className="text-white">Check out my videos</h1>
              <p cl>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                deserunt incidunt laboriosam doloremque minus et cupiditate a
                repudiandae impedit,placeat nobis officiis debitis quae. Nobis
                nam hic saepe quis numquam. Autem, accusamus asperiores.
              </p>

              <button
                type="button"
                className="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  />
                </svg>
                Check-more
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 bg-light py-5">
        <div className="text-center">
          <h1 className="display-5">Contact us</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-10 col-md-8 mx-auto">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="bt-3">
                  <label className="pe-4">Gender</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      Male
                    </label>
                  </div>
                </div>
                <div className="my-4">
                  <label for="exampleDataList" className="form-label">
                    Select city
                  </label>
                  <input
                    className="form-control"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                  />
                  <datalist id="datalistOptions">
                    <option value="Dehradun"></option>
                    <option value="Delhi"></option>
                    <option value="Mumbai"></option>
                    <option value="Noida"></option>
                    <option value="Chandigarh"></option>
                  </datalist>
                </div>
                <div className="mb-3">
                  <div className="mb-3">
                    <label for="formFile" className="form-label">
                      Default file input example
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
