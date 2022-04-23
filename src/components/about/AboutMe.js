import React from "react";
import aboutMe from "../../assets/programming.jpeg";

export const AboutMe = () => {
  return (
    <div>
      <section id="about" className="container">
        <div className="sec-title fs-1 fw-bolder text-center m-auto mt-5">
          About Me
        </div>
        <div className="row mt-5">
          <div className="col-md-4 text-center mb-4">
            <img src={aboutMe} alt="" width="90%"></img>
          </div>

          <div className="col-md-7">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quibusdam iure eum id asperiores quaerat, rem ex voluptate atque
              deserunt quidem?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              commodi numquam at consectetur, sequi accusantium vero cum ea
              saepe eveniet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
