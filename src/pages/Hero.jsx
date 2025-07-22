import React from "react";
import "../css/Hero.css";

const Hero = () => (
  <section id="hero" className="hero section dark-background">
    <img
      src="/src/assets/img/hero-bg.jpg"
      alt="Hero background"
      className="hero-bg-img img-fluid"
    />

    <div className="container">
      <div className="row">
        <div className="col-xl-4">
          <h1 className="fade-up">Focus On What Matters</h1>
          <blockquote className="fade-up delay-100">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis cum recusandae eum laboriosam voluptatem repudiandae
              odio, vel exercitationem officiis provident minima.
            </p>
          </blockquote>
          
          <div className="d-flex gap-3 fade-up delay-200">
            <a href="#about" className="btn btn-primary btn-get-started">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="btn btn-outline-light d-flex align-items-center btn-watch-video"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-play-circle me-2"></i>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
