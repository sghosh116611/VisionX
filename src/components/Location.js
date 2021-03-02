import React from "react";

const Location = () => {
  return (
    <div className="location">
      <div class="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12" align="center">
            <div class="title" style={{margin:"auto"}}>
              <h1>LET'S DO THIS!</h1>
            </div>
            <div className="content">
              <h2>Address</h2>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="body-title" style={{textAlign:"left"}}>
              <h1>Enquire Us!</h1>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="email">
                    <h4>Full Name</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="name"
                    placeholder="Alex Martin"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="email">
                    <h4>Email</h4>
                  </label>
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    id="email"
                    placeholder="martin@example.com"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="email">
                    <h4>Phone</h4>
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="phone"
                    placeholder="+91"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="email">
                    <h4>Message</h4>
                  </label>
                  <textarea
                    type="text"
                    class="form-control form-control-lg"
                    id="message"
                    rows="3"
                    placeholder="Write your message(optional)"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
