import { useEffect } from "react";
//= Scripts
import isInView from "@/common/isInView";
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Data
import { useGetServicesQuery } from "@/features/service/serviceApi";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../../images/service/website-design-and-development-01.png";
import banner2 from "../../../../images/service/digital-signage.png";
import banner3 from "../../../../images/service/Feature-of-app-development-01.png";
import banner4 from "../../../../images/service/Digital-Marketing-_-Seo-01.png";
import banner5 from "../../../../images/service/Graphic.png";
import banner6 from "../../../../images/service/Video-Aanimation-01.png";

function Products({ lightMode }) {
  const { data, isLoading, isSuccess, isError, error } = useGetServicesQuery();

  const services = data?.data;

  console.log("services", services);
  useEffect(() => {
    loadBackgroudImages();
    window.addEventListener("scroll", handleShowTabs);
    return () => window.removeEventListener("scroll", handleShowTabs);
  }, []);

  function handleShowTabs() {
    isInView({
      selector: ".portfolio-fixed .sub-bg .cont",
      isElements: true,
      callback(element) {
        element.classList.add("current");
        document
          .querySelector("#" + element.getAttribute("data-tab"))
          .classList.add("current");
      },
      whenOutOfView(element) {
        element.classList.remove("current");
        document
          .querySelector("#" + element.getAttribute("data-tab"))
          .classList.remove("current");
      },
    });

    const leftSide = document.getElementById("sticky_item");
    if (!leftSide) return;
    const width = leftSide.getBoundingClientRect().width;
    const portfolio = document
      .querySelector(".portfolio-fixed")
      .getBoundingClientRect();

    if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom + 400) {
      leftSide.style.position = "fixed";
      leftSide.style.top = "0px";
      leftSide.style.width = width + "px";
      leftSide.classList.remove("is_stuck");
    } else if (portfolio.height / 2 > portfolio.bottom + 400) {
      leftSide.style.position = "absolute";
      leftSide.style.top = "auto";
      leftSide.style.bottom = "0";
      leftSide.style.width = width + "px";
      leftSide.classList.add("is_stuck");
    } else {
      leftSide.style.position = "relative";
      leftSide.style.top = "unset";
      leftSide.style.bottom = "unset";
      leftSide.style.width = "auto";
    }
  }

  return (
    <div>
      <section className="portfolio-fixed ">
        <div className="container">
          <div className="software-section mb-15">
            <div className="software-img">
              <Image src={banner1} alt="" />
            </div>

            <div className="software-content">
              <h3 className="mb-15">Website Development</h3>

              <p>
                Our web application development department is equipped with the
                state-of-the-art equipment and a highly-trained team of
                development that generates outstanding ideas for our client’s
                project. They work closely with you to generate optimal outcomes
                for your application/ software concerns. We complete your
                project within the given deadline.
              </p>

              <Link
                href={
                  lightMode ? "/light/page-service1" : "/dark/page-service1"
                }
                className="mt-4 butn butn-md butn-bord radius-30"
              >
                <span>View Details</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className=" software-section">
            <div className="software-img">
              <h3 className="mb-15">Web Application</h3>

              <p>
                Our web application development department is equipped with the
                state-of-the-art equipment and a highly-trained team of
                development that generates outstanding ideas for our client’s
                project. They work closely with you to generate optimal outcomes
                for your application/ software concerns. We complete your
                project within the given deadline.
              </p>

              <Link
                href={
                  lightMode ? "/light/page-service2" : "/dark/page-service2"
                }
                className="mt-4 butn butn-md butn-bord radius-30"
              >
                <span>View Details</span>
              </Link>
            </div>

            <div className="software-content">
              <Image src={banner2} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className=" software-section">
            <div className="software-img">
              <Image src={banner3} alt="" />
            </div>

            <div className="software-content">
              <h3 className="mb-15">Mobile Apps Development</h3>

              <p>
                We specialize in design and development for mobile apps and
                websites. We design websites and mobile apps that are further
                facilitated with a high-performance rate. Our team of developers
                and designers at Createabit Design are acquainted with the
                creation and development of iOS and Android apps that are
                user-specific and mobile-friendly-specific.
              </p>

              <Link
                href={
                  lightMode ? "/light/page-service3" : "/dark/page-service3"
                }
                className="mt-4 butn butn-md butn-bord radius-30"
              >
                <span>View Details</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className=" software-section">
            <div className="software-img">
              <h3 className="mb-15">Digital Marketing & SEO</h3>

              <p>
                Createabit Design focuses on utilizes the approach that focuses
                on users to generate solutions for digital marketing and SEO
                areas. We use business-oriented design solutions to cater to the
                digital marketing and SEO concerns of our clients.
              </p>

              <Link
                href={
                  lightMode ? "/light/page-service4" : "/dark/page-service4"
                }
                className="mt-4 butn butn-md butn-bord radius-30"
              >
                <span>View Details</span>
              </Link>
            </div>

            <div className="software-content">
              <Image src={banner4} alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className=" software-section">
            <div className="software-img">
              <Image src={banner5} alt="" />
            </div>

            <div className="software-content">
              <h3 className="mb-15">Graphics Design & Printing</h3>

              <p>
                Our team at Createabit Design is responsible for creating
                compelling graphic designs and prints to add an appeal to your
                business to maintain its sustainability. We invest our complete
                creativity, resources, and efforts to come up with 100%
                satisfactory.
              </p>

              <Link
                href={
                  lightMode ? "/light/page-service5" : "/dark/page-service5"
                }
                className="mt-4 butn butn-md butn-bord radius-30"
              >
                <span>View Details</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="container">
          <div className=" software-section">
            <div className="software-img">
              <h3 className="mb-15">Video & Animation</h3>

              <p>
                At Createabit Design, our team of designers and animators are
                responsible for the conversion of abstract ideas to animations
                and motion graphics. Our creative and innovative animated videos
                are highly regarded for their quality and sound.
              </p>

              <Link
                href={
                  lightMode ? "/light/page-service6" : "/dark/page-service6"
                }
                className="mt-4 butn butn-md butn-bord radius-30"
              >
                <span>View Details</span>
              </Link>
            </div>

            <div className="software-content">
              <Image src={banner6} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
