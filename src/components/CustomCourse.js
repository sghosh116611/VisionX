import React from "react";


import Figure from "../components/Figure";

const CustomCourse = (props) => {

  const { data } = props;
  const courses = data.courses;

  return (
    <div className="courses">
      <div className="course-intro" style={{ background: `url(${data.img})` }}>
        <div className="container">
          <div className="course-title">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
      <div className="course-body">
        <div className="container">
          <div className="body-title">
            <h1>Featured Courses</h1>
          </div>
          <div className="row">
            {courses.map((course, key) => {
              const size = 12 / courses.length;
              return (
                <div
                  key={key}
                  className={`col-lg-${size} col-sm-12`}
                  style={{ padding: "2%" }}
                >
                  <div key={key} className="figure-container">
                    <Figure
                      key={key}
                      contents={course.contents}
                      img={course.img}
                      title={course.title}
                      body={course.description}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCourse;
