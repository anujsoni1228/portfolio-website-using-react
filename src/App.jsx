import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experiences from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (<>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experiences></Experiences>
    <Services></Services>
    <Portfolio></Portfolio>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
  </>);
};

export default App;
