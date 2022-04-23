import React from "react";
import myImage from "../../assets/garry.png";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row mt-5 py-3">
            {/* <!-- below md take 12 grid --> */}
            <div className="col-md-6 text-center order-md-2">
              <img src={myImage} alt=""></img>
            </div>

            <div className="col-md-6 pt-5 d-flex flex-column justify-content-evenly">
              <h5>Hi, I am Garry Amasia</h5>
              <h1>Software Engineer | Dented Code</h1>
              <p className="pt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
                illo dolore dignissimos nostrum ad beatae? Corrupti quae nihil,
                reiciendis qui temporibus, voluptates id laborum ullam, odio
                corporis voluptatum facere autem.
              </p>
              {/* <!-- note!text-danger has !important rule --> */}
            </div>

            {/* <!-- text-end is bootstrap className to put everything to the right inside its container --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
