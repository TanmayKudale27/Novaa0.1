import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/Section.css";

const slides = [
  {
    title: "Let's grow your business together",
    subtitle: "Optio reiciendis accusantium iusto architecto at quia minima maiores quidem, dolorum.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, ipsam perferendis asperiores explicabo vel tempore velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut, magni voluptatem velit doloribus quas sapiente optio."
  },
  {
    title: "Unde perspiciatis ut repellat dolorem",
    subtitle: "Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam quis.",
    text: "Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam dolorum delectus autem veritatis facilis. Et ea ut repellat ea. Facere est dolores fugiat dolor."
  },
  {
    title: "Aliquid non alias minus",
    subtitle: "Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.",
    text: "Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut."
  },
  {
    title: "Necessitatibus suscipit non voluptatem quibusdam",
    subtitle: "Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum soluta nihil est. Eum similique neque autem ut.",
    text: "Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui sint at qui animi animi rerum."
  },
];

const Section = () => (
  <section id="why-us" className="why-us section py-5">
    <div className="container">
      <div className="row g-0 align-items-center">
        <div className="col-xl-5 img-bg" data-aos="fade-up" data-aos-delay="100">
          <img src="/src/assets/img/why-us-bg.jpg" alt="" className="img-fluid rounded-start" />
        </div>
        <div className="col-xl-7 slides position-relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView={"auto"}
            centeredSlides={true}
            pagination={{ clickable: true }}
            navigation={true}
            className="init-swiper"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="item">
                  <h3 className="mb-3">{slide.title}</h3>
                  <h4 className="mb-3">{slide.subtitle}</h4>
                  <p>{slide.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </section>
);

export default Section;
