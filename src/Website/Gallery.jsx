import React from "react";
import Img7 from "./images/7.jpg";
import Img8 from "./images/8.jpg";
import Img4 from "./images/4.jpg";
const Gallary = () => {
  return (
    <>
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
    </>
  );
};
export default Gallary;
