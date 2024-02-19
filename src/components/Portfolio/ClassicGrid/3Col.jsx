import Link from "next/link";
import { useEffect } from "react";
//= Scripts
import initIsotope from "@/common/initIsotope";
//= Data
import Image from "next/image";
import portfolio10 from "../../../../images/portfolio10.jpg";
import portfolio11 from "../../../../images/portfolio11.jpg";
import portfolio12 from "../../../../images/portfolio12.jpg";
import portfolio13 from "../../../../images/portfolio13.jpg";
import portfolio14 from "../../../../images/portfolio14.jpg";
import portfolio6 from "../../../../images/portfolio6.jpg";
import portfolio7 from "../../../../images/portfolio7.jpg";
import portfolio8 from "../../../../images/portfolio8.jpg";
import portfolio9 from "../../../../images/portfolio9.jpg";
function Grid() {
  useEffect(() => {
    initIsotope();
  }, []);

  return (
    <section className="portfolio section-padding mt-20">
      <div className="container-xxl">
        <div className="sec-lg-head">
          <div className="row">
            <div className="col-lg-7">
              <div className="position-re">
                <h6 className="mb-10 dot-titl-non">Product</h6>
                <h2 className="fz-50">INTERACTIVE WOW Products</h2>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="justify-end full-width d-flex justify-content-end">
                <div className="vew-all">
                  <Link href="/dark/portfolio-classic-grid">
                    View All Works
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center filtering col-12 mb-80">
            {/* <div className="filter">
              <span className="text">Filter By :</span>
              {data.filters.map((item, index) => (
                <span
                  data-filter={item.filter}
                  className={index === 0 ? "active" : ""}
                  data-count={item.count}
                  key={item.id}
                >
                  {item.title}
                </span>
              ))}
            </div> */}
          </div>
        </div>
        <div className="gallery">
          <div className="grid row md-marg">
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio6} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">
                      3D HOLOGRAPHIC SIGNAGE
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio7} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">DIGITAL DISPLAY</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio8} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">VIRTUAL BOOK</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="grid row md-marg">
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio9} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">REAR PROJECTION</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio10} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">INTERACTIVE FLOOR</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio11} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">TOUCH TABLE</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="grid row md-marg">
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio12} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">
                      INTERACTIVE FLOOR PROJECTION
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio13} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">
                      INTERACTIVE FLOOR PROJECTION
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={`col-lg-4 col-md-6 items info-overlay mb-50`}>
              <div className="item-img o-hidden">
                <Link href="/dark/project-details1" className=" wow">
                  <div className="inner wow">
                    <Image src={portfolio14} alt="image" />
                  </div>
                </Link>
                <div className="info">
                  <span className="mb-15">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <h6 className="sub-title tag">
                    <Link href="/dark/project-details1">
                      © 2023 <br /> INTERACTIVE WOW PRODUCT
                    </Link>
                  </h6>
                  <h5>
                    <Link href="/dark/project-details1">
                      INTERACTIVE FLOOR PROJECTION
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;
