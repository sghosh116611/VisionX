import React from "react";

import IconRight from "../components/IconRight";
import Location from "../components/Location";

const Homepage = () => {
  return (
    <div>
      {/* Intro */}
      <div className="intro">
        <div className="container">
          <div className="content">
            <div className="content-title">
              <h1>GET READY TO TAKE OFF!</h1>
            </div>
            <div className="content-body">
              <h2>
                Donec sit amet hendrerit libero. Sed facilisis mi orci, sed
                auctor quam bibendum eget.
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Learning and Development */}

      <div id="speakers" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title">
                <center>
                  <div className="body-title">
                    <h1>Flagpship Programs</h1>
                  </div>
                  <p>
                    Keep Reinventing. Get Transformed. Be ready for the Next
                    Generation Workforce.
                  </p>
                </center>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-sm-3"
              align="center"
              style={{ backgroundColor: "white" }}
            >
              <img
                src="images/fundamentals.jpg"
                style={{ height: "150px", width: "150px" }}
              />
            </div>

            <div
              className="col-sm-9"
              style={{
                backgroundColor: "white",
                padding: "20px",
              }}
            >
              <div>
                <h1 style={{ textAlign: "left", color: "#123d52" }}>
                  Fundamentals
                </h1>
                <br />
                <p style={{ textAlign: "left" }}>
                  {" "}
                  This introduces the greenhorns to the certain technological
                  universe with technical training and soft skills with
                  leadership.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-sm-9"
              style={{
                backgroundColor: "#f9fafc",
                padding: "20px",
              }}
            >
              <div>
                <h1 style={{ textAlign: "right", color: "#123d52" }}>
                  Essentials
                </h1>{" "}
                <br />
                <p style={{ textAlign: "left" }}>
                  {" "}
                  This is the next level of training wherein technical
                  applications are further cemented. Every week the candidates
                  are being taken to the next level concepts with weekly
                  assessments and interactive projects.
                </p>
              </div>
            </div>

            <div
              className="col-sm-3"
              align="center"
              style={{ backgroundColor: "#f9fafc" }}
            >
              <div>
                <img
                  src="images/essentials.png"
                  style={{ height: "150px", width: "150px" }}
                ></img>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-sm-3"
              align="center"
              style={{ backgroundColor: "white" }}
            >
              <div>
                <img
                  src="images/product.png"
                  style={{ height: "150px", width: "150px" }}
                ></img>
              </div>
            </div>

            <div
              className="col-sm-9"
              style={{
                backgroundColor: "white",
                padding: "20px",
              }}
            >
              <div>
                <h1 style={{ textAlign: "left", color: "#123d52" }}>Product</h1>
                <br />
                <p style={{ textAlign: "left" }}>
                  A scenario-based hands-on training that will fine-tune the
                  entrepreneurial skills and focus on concept development,
                  troubleshooting, and problem-solving. The folks will be
                  forming team and will be given a business case to manage.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-sm-9"
              style={{
                backgroundColor: "#f9fafc",
                padding: "20px",
              }}
            >
              <div>
                <h1 style={{ textAlign: "right", color: "#123d52" }}>
                  Simulation
                </h1>{" "}
                <br />
                <p style={{ textAlign: "right" }}>
                  {" "}
                  The simulation lab re-creates the real-time project
                  environment. The folks work as a tech engineer with dummy
                  managers on customers scenarios with SLAs. Customers and
                  leaders are invited to provide feedback on customer query
                  resolution, documentation, teamwork, and SLA adherence.{" "}
                </p>
              </div>
            </div>

            <div
              className="col-sm-3"
              align="center"
              style={{ backgroundColor: "#f9fafc" }}
            >
              <div>
                <img
                  src="images/simmulation.png"
                  style={{ height: "150px", width: "150px" }}
                />
              </div>
            </div>
          </div>

          <br />
          <div id="owl-speakers" className="owl-carousel">
            <div
              className="item wow fadeInUp col-md-3 col-sm-3"
              data-wow-delay="0.9s"
            >
              <div className="speakers-wrapper">
                <img
                  src="images/ignite.jpg"
                  className="img-responsive"
                  alt="speakers"
                />
                <div className="speakers-thumb">
                  <h3>Ignite 12.0</h3>
                </div>
              </div>
            </div>

            <div
              className="item wow fadeInUp col-md-3 col-sm-3"
              data-wow-delay="0.6s"
            >
              <div className="speakers-wrapper">
                <img
                  src="images/incubation.png"
                  className="img-responsive"
                  alt="speakers"
                />
                <div className="speakers-thumb">
                  <h3>Incubation Center</h3>
                </div>
              </div>
            </div>

            <div
              className="item wow fadeInUp col-md-3 col-sm-3"
              data-wow-delay="0.9s"
            >
              <div className="speakers-wrapper">
                <img
                  src="images/vision25.jpg"
                  className="img-responsive"
                  alt="speakers"
                />
                <div className="speakers-thumb">
                  <h3>Vision 25</h3>
                </div>
              </div>
            </div>

            <div
              className="item wow fadeInUp col-md-3 col-sm-3"
              data-wow-delay="0.6s"
            >
              <div className="speakers-wrapper">
                <img
                  src="images/igniteex.png"
                  className="img-responsive"
                  alt="speakers"
                />
                <div className="speakers-thumb">
                  <h3>Ignite Ex 6.0</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="path">
        <div className="container">
          <div className="body-title">
            <h1>Why VisionX works!</h1>
          </div>
          <div className="row">
            <div className="col-md-4" align="center">
              {/* <img src="img/" />  */}
              <br />
              <p>Loreum isumndsah sadhjas sdakdj sadsja</p>
            </div>
            <div className="col-md-4" align="center">
              {/* <img src="img/" />  */}
              <br />
              <p>Loreum isumndsah sadhjas sdakdj sadsja</p>
            </div>
            <div className="col-md-4" align="center">
              {/* <img src="img/" />  */}
              <br />
              <p>Loreum isumndsah sadhjas sdakdj sadsja</p>
            </div>
          </div>
        </div>
      </div>

      <Location />
    </div>
  );
};

export default Homepage;
