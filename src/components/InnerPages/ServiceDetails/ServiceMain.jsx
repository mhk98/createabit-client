import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useState } from "react";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Service6 from "./Service6";

const ServiceMain = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  // useEffect(() => {
  //   // Initialize Splide when the component mounts
  //   const splide = new Splide(".splide", {
  //     type: "loop",
  //     perPage: 3,
  //     autoplay: true,
  //   });

  //   splide.mount();

  //   // Optionally, you may want to destroy the Splide instance when the component unmounts
  //   return () => {
  //     splide.destroy();
  //   };
  // }, []);

  return (
    <div className="container">
      <div className="service-slider ">
        <Splide
          className="splide-center"
          options={{
            type: "loop",
            perPage: 5,
            autoplay: true,
            gap: "10px",
            pagination: true, // Hide pagination dots
            arrows: false, // Hide navigation arrows
          }}
        >
          {/* Your slide items go here */}
          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 0 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Web Development
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Web Application
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Mobile Apps
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 3 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              Digital Marketing
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 4 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(4)}
            >
              Video & Animations
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 5 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(5)}
            >
              Graphic Design
            </button>
          </SplideSlide>
        </Splide>
        <div className="content-container">
          {activeButton === 0 && (
            <div>
              <Service1></Service1>
            </div>
          )}
          {activeButton === 1 && (
            <div>
              <Service2></Service2>
            </div>
          )}
          {activeButton === 2 && (
            <div>
              <Service3></Service3>
            </div>
          )}
          {activeButton === 3 && (
            <div>
              <Service4></Service4>
            </div>
          )}
          {activeButton === 4 && (
            <div>
              <Service5></Service5>
            </div>
          )}
          {activeButton === 5 && (
            <div>
              <Service6></Service6>
            </div>
          )}
        </div>
      </div>

      <div className="service-slider1 ">
        <Splide
          className="splide-center"
          options={{
            type: "loop",
            perPage: 2,
            autoplay: true,

            pagination: true, // Hide pagination dots
            arrows: false, // Hide navigation arrows
          }}
        >
          {/* Your slide items go here */}
          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 0 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Web Development
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 1 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Web Application
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 2 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Mobile Apps
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 3 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              Digital Marketing
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 4 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(4)}
            >
              Video & Animations
            </button>
          </SplideSlide>

          <SplideSlide>
            <button
              className={`service-btn-clr service-butn-md butn-bord radius-30 ${
                activeButton === 5 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(5)}
            >
              Graphic Design
            </button>
          </SplideSlide>
        </Splide>

        <div className="content-container">
          {activeButton === 0 && (
            <div>
              <Service1></Service1>
            </div>
          )}
          {activeButton === 1 && (
            <div>
              <Service2></Service2>
            </div>
          )}
          {activeButton === 2 && (
            <div>
              <Service3></Service3>
            </div>
          )}
          {activeButton === 3 && (
            <div>
              <Service4></Service4>
            </div>
          )}
          {activeButton === 4 && (
            <div>
              <Service5></Service5>
            </div>
          )}
          {activeButton === 5 && (
            <div>
              <Service6></Service6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceMain;
