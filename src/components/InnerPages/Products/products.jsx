import { useEffect } from "react";
//= Scripts
import isInView from "@/common/isInView";
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Data
import { useGetServicesQuery } from "@/features/service/serviceApi";
import Image from "next/image";
import Link from "next/link";
import banner1 from "../../../../images/product/3D-Holographic-Signs-1.png";
import banner3 from "../../../../images/product/POS-systems.png";
import banner2 from "../../../../images/product/digital-signage.png";

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
              <Image src={banner2} alt="" />
            </div>

            <div className="software-content">
              <h3 className="mb-15">DIGITAL DISPLAY</h3>

              <p>
                Digital displays are getting quite popular now a day for its
                attractive features. We brought very new Digital displays with
                lots of features and technology. We have various types of LCD
                Wall Video Displays, Wall Mount Displays, Stand Alone Signage,
                Touch Table, OutDoor Signage, Multimedia Kiosk.
              </p>

              <Link
                href="/dark/page-service1"
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
              <h3 className="mb-15">3D HOLOGRAPHIC SIGNS</h3>

              <p>
                We came up with 3D holographic Signage that has spinning led fan
                that creates dynamic visual display in 3 Dimension without any
                kind of glasses. It will provide you enriched quality visual for
                advertising.
              </p>

              <Link
                href="/dark/page-service2"
                className="mt-4 butn butn-md butn-bord radius-30"
              >
                <span>View Details</span>
              </Link>
            </div>

            <div className="software-content">
              <Image src={banner1} alt="" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className=" software-section">
            <div className="software-img">
              <Image src={banner3} alt="" />
            </div>

            <div className="software-content">
              <h3 className="mb-15">POS SYSTEMS</h3>

              <p>
                From the very beginning till now we are proving one of the best
                Point of sales System. Our POS has successfully satisfied our
                valuable customer with Its easy handling. We deliver 24x7
                customer service so that the business never gets interrupted for
                any inconvenience.
              </p>

              <Link
                href="/dark/page-service3"
                className="mt-4 butn butn-md butn-bord radius-30"
              >
                <span>View Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
