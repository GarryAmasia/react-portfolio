import React from "react";
import projectImage from "../../assets/logo1.png";

export const Project = () => {
  return (
    <div>
      <section id="projects" class="project py-5">
        <div class="sec-title fs-1 fw-bolder text-center m-auto mt-5">
          Project
        </div>

        <div class="proj-content">
          <div class="container mt-5">
            <div class="row mt-5">
              <div class="col-md-6">
                <img
                  src={projectImage}
                  alt=""
                  width="70%"
                  class="img-fluid img-thumbnail"
                ></img>
              </div>
              <div class="col-md-6 mt-5 mt-md-0">
                <h2>My Portfolio</h2>
                <div class="links fs-3">
                  <a href="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="_blank">
                    <i class="fab fa-chrome"></i>
                  </a>
                </div>
                <p class="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur id amet soluta tenetur voluptatibus sint animi!
                  Dolore, sint facilis. Voluptates iusto a culpa, nemo saepe
                  ipsa nulla architecto modi dolorum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aut perferendis architecto debitis mollitia adipisci.
                </p>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-6 order-md-1">
                <img
                  src={projectImage}
                  alt=""
                  width="70%"
                  class="img-fluid img-thumbnail"
                ></img>
              </div>
              <div class="col-md-6 mt-5 mt-md-0">
                <h2>My Portfolio</h2>
                <div class="links fs-3">
                  <a href="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="_blank">
                    <i class="fab fa-chrome"></i>
                  </a>
                </div>
                <p class="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur id amet soluta tenetur voluptatibus sint animi!
                  Dolore, sint facilis. Voluptates iusto a culpa, nemo saepe
                  ipsa nulla architecto modi dolorum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aut perferendis architecto debitis mollitia adipisci.
                </p>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col-md-6">
                <img
                  src={projectImage}
                  alt=""
                  width="70%"
                  class="img-fluid img-thumbnail"
                ></img>
              </div>
              <div class="col-md-6 mt-5 mt-md-0">
                <h2>My Portfolio</h2>
                <div class="links fs-3">
                  <a href="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="_blank">
                    <i class="fab fa-chrome"></i>
                  </a>
                </div>
                <p class="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur id amet soluta tenetur voluptatibus sint animi!
                  Dolore, sint facilis. Voluptates iusto a culpa, nemo saepe
                  ipsa nulla architecto modi dolorum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  aut perferendis architecto debitis mollitia adipisci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
