import { useEffect } from "react";
//= Scripts
import isInView from "@/common/isInView";
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Data
import { useGetProductCategory1Query } from "@/features/product/productCategory1";
import Link from "next/link";
import banner1 from "../../../../images/product/digital-product/1.jpg";
import banner3 from "../../../../images/product/digital-product/2.jpg";
import banner2 from "../../../../images/product/digital-product/3.jpg";

import Image from "next/image";

function Product({ lightMode }) {
  const { data, isLoading, isSuccess, isError, error } =
    useGetProductCategory1Query();

  const products = data?.data;

  // const { data1 } =
  //   useCreateCartMutation();

  //   const cart = data1?.data1

  //   const cartData = {
  //     title:
  //   }

  // console.log("cart", cart);
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
          ?.classList.remove("current");
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
      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner1} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                  {item.number} {item.type}
                </span> */}
                <h2 className="mb-15">DIGITAL DISPLAY</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Digital displays are getting quite popular now a day for
                      it’s attractive features. We brought very new Digital
                      displays with lots of features and technology. We Have
                      various types of LCD Wall Video Displays, Wall Mount
                      Displays, Stand Alone Signage, Touch Table, OutDoor
                      Signage, Multimedia Kiosk.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your business visible online.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your eCommerce business stand out.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Grow with your audience.
                        </h6>
                      </li>
                    </ul>

                    <Link
                      // href="/dark/page-productshop1"
                      href={`/${
                        lightMode ? "light" : "dark"
                      }/page-productshop1`}
                      className="mt-4 butn butn-md butn-bord radius-30"
                    >
                      <div className="full-width">
                        <span className="full-width">View Details</span>
                      </div>
                    </Link>

                    {/* <Link
                      style={{ marginLeft: "20px" }}
                      href={`/${
                        lightMode ? "light" : "dark"
                      }/page-productshop1`}
                      className="mt-4 butn butn-md butn-bord radius-30"
                    >
                      <div className="full-width">
                        <span className="full-width">Add to Cart</span>
                      </div>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner1} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                  {item.number} {item.type}
                </span> */}
                <h2 className="mb-15">3D HOLOGRAPHIC SIGNS</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Digital displays are getting quite popular now a day for
                      it’s attractive features. We brought very new Digital
                      displays with lots of features and technology. We Have
                      various types of LCD Wall Video Displays, Wall Mount
                      Displays, Stand Alone Signage, Touch Table, OutDoor
                      Signage, Multimedia Kiosk.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your business visible online.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your eCommerce business stand out.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Grow with your audience.
                        </h6>
                      </li>
                    </ul>

                    <Link
                      // href="/dark/page-productshop1"
                      href={`/${
                        lightMode ? "light" : "dark"
                      }/page-productshop2`}
                      className="mt-4 butn butn-md butn-bord radius-30"
                    >
                      <div className="full-width">
                        <span className="full-width">View Details</span>
                      </div>
                    </Link>

                    {/* <Link
                      style={{ marginLeft: "20px" }}
                      href={`/${
                        lightMode ? "light" : "dark"
                      }/page-productshop1`}
                      className="mt-4 butn butn-md butn-bord radius-30"
                    >
                      <div className="full-width">
                        <span className="full-width">Add to Cart</span>
                      </div>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-fixed product_category">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-lg-6 rest" style={{ position: "relative" }}>
              <div className="left" id="sticky_item">
                <div
                  id={`tab-$1`}
                  className="img bg-img product_image"
                  // data-background={`${
                  //   lightMode ? "/light/" : "/dark/"
                  // }${item.image}`}

                  // key={index}
                >
                  <Image src={banner1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 sub-bg right">
              <div
                // className={`cont ${index === 0 ? "active" : ""}`}
                className={`cont`}
                // data-tab={`tab-${index + 1}`}
                // key={index}
              >
                <div className="img-hiden">
                  <Image src={banner1} alt="" />
                </div>
                {/* <span className="sub-title mb-15">
                  {item.number} {item.type}
                </span> */}
                <h2 className="mb-15">POS SYSTEMS</h2>
                <div className="row justify-content-center">
                  <div className="col-md-11">
                    <p>
                      Digital displays are getting quite popular now a day for
                      it’s attractive features. We brought very new Digital
                      displays with lots of features and technology. We Have
                      various types of LCD Wall Video Displays, Wall Mount
                      Displays, Stand Alone Signage, Touch Table, OutDoor
                      Signage, Multimedia Kiosk.
                    </p>
                    <ul className="rest list-arrow mt-30">
                      <li>
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your business visible online.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Make your eCommerce business stand out.
                        </h6>
                      </li>
                      <li className="mt-5">
                        <span className="icon">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <h6 className="inline fz-16 fw-400">
                          Grow with your audience.
                        </h6>
                      </li>
                    </ul>

                    <Link
                      // href="/dark/page-productshop1"
                      href={`/${
                        lightMode ? "light" : "dark"
                      }/page-productshop3`}
                      className="mt-4 butn butn-md butn-bord radius-30"
                    >
                      <div className="full-width">
                        <span className="full-width">View Details</span>
                      </div>
                    </Link>

                    {/* <Link
                      style={{ marginLeft: "20px" }}
                      href={`/${
                        lightMode ? "light" : "dark"
                      }/page-productshop1`}
                      className="mt-4 butn butn-md butn-bord radius-30"
                    >
                      <div className="full-width">
                        <span className="full-width">Add to Cart</span>
                      </div>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Product;
