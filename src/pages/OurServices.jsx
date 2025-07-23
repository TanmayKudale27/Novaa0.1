import React from "react";
import "../css/OurServices.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const servicesData = [
  {
    icon: "bi-briefcase",
    color: "#f57813",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    delay: 100,
  },
  {
    icon: "bi-card-checklist",
    color: "#15a04a",
    title: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    delay: 200,
  },
  {
    icon: "bi-bar-chart",
    color: "#d90769",
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    delay: 300,
  },
  {
    icon: "bi-binoculars",
    color: "#15bfbc",
    title: "Magni Dolores",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    delay: 400,
  },
  {
    icon: "bi-brightness-high",
    color: "#f5cf13",
    title: "Nemo Enim",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    delay: 500,
  },
  {
    icon: "bi-calendar4-week",
    color: "#1335f5",
    title: "Eiusmod Tempor",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    delay: 600,
  },
];

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur
          velit
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {servicesData.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={service.delay}
              key={index}
            >
              <div className="icon flex-shrink-0">
                <i className={`bi ${service.icon}`} style={{ color: service.color }}></i>
              </div>
              <div>
                <h4 className="title">{service.title}</h4>
                <p className="description">{service.description}</p>
                <a href="#" className="readmore stretched-link">
                  <span>Learn More</span> <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
