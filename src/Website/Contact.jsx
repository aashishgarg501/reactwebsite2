import React from "react";

const Contact = () => {
  return (
    <>
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
export default Contact;
