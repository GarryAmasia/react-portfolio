import React from "react";

export const Contact = () => {
  return (
    <div>
      <section id="contact" class="container">
        <div class="contact-icons rounded py-3">
          <div class="sec-title fs-1 fw-bolder text-center m-auto mt-5">
            Contact Me
          </div>

          <div class="icons mt-5 mb-5 border">
            <a href="tel:0430598828" target="_blank">
              <i class="fas fa-mobile text-secondary"></i>
            </a>
            <a href="mailto:garryamasia@outlook.com" target="_blank">
              <i class="fas fa-envelope-square text-danger"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/garry-amasia-0a388319b/"
              target="_blank"
            >
              <i class="fab fa-linkedin text-primary"></i>
            </a>
            <a href="https://www.facebook.com/gery.amasia" target="_blank">
              <i class="fab fa-facebook text-warning"></i>
            </a>
            <a href="https://github.com/GarryAmasia" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
