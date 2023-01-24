import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: "Amit Koushik",
    review:
      "Lorem ipsum dolor sit amet consectetur  dipisicing elit. Harum ipsum quis consectetur iure quod vitae optio et aperiam deleniti dignissimos? Cum, culpa harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, atque!",
  },
  {
    avatar: AVTR2,
    name: "Nidhi Somvanshi",
    review:
      "Lorem ipsum dolor sit amet consectetur  dipisicing elit. Harum ipsum quis consectetur iure quod vitae optio et aperiam deleniti dignissimos? Cum, culpa harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, atque!",
  },
  {
    avatar: AVTR3,
    name: "Harsh Sarsodiya",
    review:
      "Lorem ipsum dolor sit amet consectetur  dipisicing elit. Harum ipsum quis consectetur iure quod vitae optio et aperiam deleniti dignissimos? Cum, culpa harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, atque!",
  },
  {
    avatar: AVTR4,
    name: "Nandini Rajore",
    review:
      "Lorem ipsum dolor sit amet consectetur  dipisicing elit. Harum ipsum quis consectetur iure quod vitae optio et aperiam deleniti dignissimos? Cum, culpa harum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, atque!",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        // install Swiper modules
        modules={[Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ name, review, avatar }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
