import React from "react";
import "./portfolio.css";

import Img1 from "../../assets/p1.jpeg";
import Img2 from "../../assets/p2.jpeg";
import Img3 from "../../assets/p3.jpeg";
import Img4 from "../../assets/p4.jpeg";
import Img5 from "../../assets/p5.jpeg";
import Img6 from "../../assets/p6.jpeg";
const data = [
  {
    image: Img1,
    github: "https://github.com",
    title: "React PortFolio website using React.js",
    demo: "https://github.com",
    id: 1,
  },
  {
    image: Img2,
    github: "https://github.com",
    title: "React PortFolio website using React.js",
    demo: "https://github.com",
    id: 2,
  },
  {
    image: Img3,
    github: "https://github.com",
    title: "React PortFolio website using React.js",
    demo: "https://github.com",
    id: 3,
  },
  {
    image: Img4,
    github: "https://github.com",
    title: "React PortFolio website using React.js",
    demo: "https://github.com",
    id: 4,
  },
  {
    image: Img5,
    github: "https://github.com",
    title: "React PortFolio website using React.js",
    demo: "https://github.com",
    id: 5,
  },
  {
    image: Img6,
    github: "https://github.com",
    title: "React PortFolio website using React.js",
    demo: "https://github.com",
    id: 6,
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio" className="container portfolio__container">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ demo, id, github, title, image }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
