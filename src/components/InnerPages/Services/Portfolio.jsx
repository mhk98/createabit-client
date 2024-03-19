// import { useEffect } from "react";
// //= Scripts
// import isInView from "@/common/isInView";
// import loadBackgroudImages from "@/common/loadBackgroudImages";
// //= Data
// import { useGetServicesQuery } from "@/features/service/serviceApi";
// import Image from "next/image";
// import Link from "next/link";
// import banner4 from "../../../../images/service/Digital-Marketing-_-Seo-01.png";
// import banner3 from "../../../../images/service/Feature-of-app-development-01.png";
// import banner5 from "../../../../images/service/Graphic.png";
// import banner6 from "../../../../images/service/Video-Aanimation-01.png";
// import banner2 from "../../../../images/service/digital-signage.png";
// import banner1 from "../../../../images/service/website-design-and-development-01.png";

// function Portfolio({ lightMode }) {
//   const { data, isLoading, isSuccess, isError, error } = useGetServicesQuery();

//   const services = data?.data;

//   console.log("services", services);
//   useEffect(() => {
//     loadBackgroudImages();
//     window.addEventListener("scroll", handleShowTabs);
//     return () => window.removeEventListener("scroll", handleShowTabs);
//   }, []);

//   function handleShowTabs() {
//     isInView({
//       selector: ".portfolio-fixed .sub-bg .cont",
//       isElements: true,
//       callback(element) {
//         element.classList.add("current");
//         document
//           .querySelector("#" + element.getAttribute("data-tab"))
//           .classList.add("current");
//       },
//       whenOutOfView(element) {
//         element.classList.remove("current");
//         document
//           .querySelector("#" + element.getAttribute("data-tab"))
//           .classList.remove("current");
//       },
//     });

//     const leftSide = document.getElementById("sticky_item");
//     if (!leftSide) return;
//     const width = leftSide.getBoundingClientRect().width;
//     const portfolio = document
//       .querySelector(".portfolio-fixed")
//       .getBoundingClientRect();

//     if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom + 400) {
//       leftSide.style.position = "fixed";
//       leftSide.style.top = "0px";
//       leftSide.style.width = width + "px";
//       leftSide.classList.remove("is_stuck");
//     } else if (portfolio.height / 2 > portfolio.bottom + 400) {
//       leftSide.style.position = "absolute";
//       leftSide.style.top = "auto";
//       leftSide.style.bottom = "0";
//       leftSide.style.width = width + "px";
//       leftSide.classList.add("is_stuck");
//     } else {
//       leftSide.style.position = "relative";
//       leftSide.style.top = "unset";
//       leftSide.style.bottom = "unset";
//       leftSide.style.width = "auto";
//     }
//   }

//   return (
//     <div>
//       <section className="portfolio-fixed ">
//         <div className="container">
//           <div className="software-section">
//             <div className="software-img">
//               <Image src={banner1} alt="" />
//             </div>

//             <div className="software-content">
//               <h3 className="mb-15">WEBSITE DEVELOPMENT</h3>

//               <p>
//                 Our web application development department is equipped with the
//                 state-of-the-art equipment and a highly-trained team of
//                 development that generates outstanding ideas for our client’s
//                 project. They work closely with you to generate optimal outcomes
//                 for your application/ software concerns. We complete your
//                 project within the given deadline.
//               </p>

//               <Link
//                 href="/dark/page-service1"
//                 className="mt-4 butn butn-md butn-bord radius-30"
//               >
//                 <span>View Details</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="software-section">
//             <div className="software-content">
//               <h3 className="mb-15">WEB APPLICATION</h3>

//               <p>
//                 Our web application development department is equipped with the
//                 state-of-the-art equipment and a highly-trained team of
//                 development that generates outstanding ideas for our client’s
//                 project. They work closely with you to generate optimal outcomes
//                 for your application/ software concerns. We complete your
//                 project within the given deadline.
//               </p>

//               <Link
//                 href="/dark/page-service2"
//                 className="mt-4 butn butn-md butn-bord radius-30"
//               >
//                 <span>View Details</span>
//               </Link>
//             </div>

//             <div className="software-img">
//               <Image src={banner2} alt="" />
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="software-section">
//             <div className="software-img">
//               <Image src={banner3} alt="" />
//             </div>

//             <div className="software-content">
//               <h3 className="mb-15">MOBILE APPS DEVELOPMENT</h3>

//               <p>
//                 We specialize in design and development for mobile apps and
//                 websites. We design websites and mobile apps that are further
//                 facilitated with a high-performance rate. Our team of developers
//                 and designers at Createabit Design are acquainted with the
//                 creation and development of iOS and Android apps that are
//                 user-specific and mobile-friendly-specific.
//               </p>

//               <Link
//                 href="/dark/page-service3"
//                 className="mt-4 butn butn-md butn-bord radius-30"
//               >
//                 <span>View Details</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="software-section">
//             <div className="software-content">
//               <h3 className="mb-15">DIGITAL MARKETING & SEO</h3>

//               <p>
//                 Createabit Design focuses on utilizes the approach that focuses
//                 on users to generate solutions for digital marketing and SEO
//                 areas. We use business-oriented design solutions to cater to the
//                 digital marketing and SEO concerns of our clients.
//               </p>

//               <Link
//                 href="/dark/page-service4"
//                 className="mt-4 butn butn-md butn-bord radius-30"
//               >
//                 <span>View Details</span>
//               </Link>
//             </div>

//             <div className="software-img">
//               <Image src={banner4} alt="" />
//             </div>
//           </div>
//         </div>

//         <div className="container">
//           <div className="software-section">
//             <div className="software-img">
//               <Image src={banner5} alt="" />
//             </div>
//             <div className="software-content">
//               <h3 className="mb-15">GRAPHICS DESIGN & PRINTING</h3>

//               <p>
//                 We specialize in design and development for mobile apps and
//                 websites. We design websites and mobile apps that are further
//                 facilitated with a high-performance rate. Our team of developers
//                 and designers at Createabit Design are acquainted with the
//                 creation and development of iOS and Android apps that are
//                 user-specific and mobile-friendly-specific.
//               </p>

//               <Link
//                 href="/dark/page-service4"
//                 className="mt-4 butn butn-md butn-bord radius-30"
//               >
//                 <span>View Details</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="container">
//           <div className="software-section">
//             <div className="software-content">
//               <h3 className="mb-15">VIDEO & ANIMATION</h3>

//               <p>
//                 We specialize in design and development for mobile apps and
//                 websites. We design websites and mobile apps that are further
//                 facilitated with a high-performance rate. Our team of developers
//                 and designers at Createabit Design are acquainted with the
//                 creation and development of iOS and Android apps that are
//                 user-specific and mobile-friendly-specific.
//               </p>

//               <Link
//                 href="/dark/page-service6"
//                 className="mt-4 butn butn-md butn-bord radius-30"
//               >
//                 <span>View Details</span>
//               </Link>
//             </div>
//             <div className="software-img">
//               <Image src={banner6} alt="" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Portfolio;

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Service1 from "../ServiceDetails/Service1";
import Service2 from "../ServiceDetails/Service2";
import Service3 from "../ServiceDetails/Service3";
import Service4 from "../ServiceDetails/Service4";
import Service5 from "../ServiceDetails/Service5";
import Service6 from "../ServiceDetails/Service6";
import { useState } from "react";

const Portfolio = () => {
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

export default Portfolio;
