import React from "react";

export const Skill = () => {
  return (
    <div>
      <section id="skills" className="skills container mt-5 py-5">
        <div className="sec-title fs-1 fw-bolder text-center m-auto">
          skills
        </div>
        <div className="sec-content fs-1 fw-bolder mt-5 d-flex justify-content-between flex-wrap">
          {/* <!-- flex wrap placed incase we have more than 3 skill,so it will wrap to the next line --> */}
          <span className="d-flex flex-column align-items-center">
            <i className="fab fa-html5 text-danger"></i>HTML
          </span>
          <span className="d-flex flex-column align-items-center">
            <i className="fab fa-css3-alt text-primary"></i>CSS
          </span>
          <span className="d-flex flex-column align-items-center">
            <i className="fab fa-js text-warning"></i>Javascript
          </span>
        </div>
      </section>
    </div>
  );
};
