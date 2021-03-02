import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div class="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="body-title" style={{ textAlign: "left" }}>
              <h1>Enquire Us!</h1>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label for="name">
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
                  <label for="phone">
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
                  <label for="course">
                    <h4>Course</h4>
                  </label>
                  <select id="inputState" class="form-control form-control=lg">
                    <option selected>All</option>
                    <option>Web Developer</option>
                    <option>App Developer</option>
                    <option>Cloud</option>
                    <option>UI Design</option>
                    <option>Personal Development</option>
                    <option>Fitness</option>
                  </select>
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

export default Contact;
