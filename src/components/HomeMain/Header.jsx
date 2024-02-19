import Link from "next/link";
import { useEffect, useState } from "react";
//= Components
import ModalVideo from "@/components/Common/ModalVideo";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Modules
import data from "@/data/Architecture/header.json";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Header({ lightMode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  const swiperOptions = {
    modules: [Navigation, Autoplay, Pagination, Parallax],
    speed: 1500,
    autoplay: {
      delay: 5000,
    },
    parallax: true,
    loop: true,
    onSwiper: function (swiper) {
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i]
          .querySelector(".bg-img")
          .setAttribute("data-swiper-parallax", 0.75 * swiper.width);
      }
    },
    onResize: function (swiper) {
      swiper.update();
    },
    pagination: {
      el: ".slider-prlx .swiper-pagination",
      type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: ".slider-prlx .next-ctrl",
      prevEl: ".slider-prlx .prev-ctrl",
    },
  };

  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  useEffect(() => {
    if (loadSwiper) loadBackgroudImages();
  }, [loadSwiper]);

  return (
    <>
      <header className="crev-header">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-9">
              <div className="caption title">
                <h1>
                  We Are Your
                  <br /> <span className="stroke">Bag Of</span> Secrets!
                </h1>
                <div className="row mt-30">
                  <div className="col-lg-5 offset-lg-1">
                    <div className="text">
                      <p>
                        We're your one-stop creative marketing solutions
                        provider – branding, web marketing, interior/exterior
                        design, digital video walls – unlocking visual design
                        success against competitors!
                      </p>
                    </div>
                    <div className="crv-butn-vid mt-30">
                      <a
                        href="https://youtu.be/AzwC6umvd1s"
                        className="vid"
                        onClick={openVideo}
                      >
                        <span className="px-2 text sub-title">Watch</span>
                        <span className="icon main-colorbg4">
                          <svg
                            className="default"
                            width="13"
                            height="20"
                            viewBox="0 0 13 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 20L13 10L0 0V20Z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="md-hide explore-radius1">
                <Link href="/dark/page-about" className="hover-this">
                  <div className="circle-button in-bord hover-anim">
                    <div className="rotate-circle fz-30 text-u">
                      <svg className="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          ></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength="900">
                            Explore More - Explore More -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="arrow">
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
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="main-banner-img col-lg-5">
            {/* <Image src={home_main} alt="" /> */}
            <div
              className="slider arch-slider slider-prlx"
              style={{ marginTop: "-150px" }}
            >
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  className="swiper-container parallax-slider"
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="bg-img valign"
                        data-background={item.background}
                        data-overlay-dark="5"
                        style={{ width: "", height: "400px" }}
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-7">
                              <div className="caption mt-30">
                                <h5 className="inline main-colorbg">
                                  {/* <span>{item.number}</span> */}
                                </h5>
                                <h1>
                                  {/* <StatementSplitter statement={item.title} /> */}
                                </h1>
                                {/* <p>{item.text}</p> */}
                              </div>
                            </div>
                            {/* <div className="col-lg-3 offset-lg-1 valign">
                      <div className="ml-auto explore">
                        <Link href="/dark/project-details1">
                          <div className="circle-button">
                            <div className="rotate-circle fz-30 text-u">
                              <svg className="textcircle" viewBox="0 0 500 500">
                                <defs>
                                  <path
                                    id="textcircle1"
                                    d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                                  ></path>
                                </defs>
                                <text>
                                  <textPath
                                    xlinkHref="#textcircle1"
                                    textLength="900"
                                  >
                                    {" "}
                                    Explore More - Explore More -
                                  </textPath>
                                </text>
                              </svg>
                            </div>
                            <div className="arrow">
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
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              {/* <div className="setting">
                <div className="controls">
                  <div className="cursor-pointer swiper-button-next swiper-nav-ctrl next-ctrl">
                    <i className="ion-chevron-right"></i>
                  </div>
                  <div className="cursor-pointer swiper-button-prev swiper-nav-ctrl prev-ctrl">
                    <i className="ion-chevron-left"></i>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* <div
        className="bg-pattern bg-img"
        data-background={`/${
          lightMode ? "light" : "dark"
        }/assets/imgs/patterns/graph.png`}
      ></div> */}
        <ModalVideo
          videoId="AzwC6umvd1s"
          channel="youtube"
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          autoplay
        />
      </header>

      <header className="crev-header1">
        <div className="container-xxl">
          <div className="justify-between row">
            <div className="col-lg-8">
              <div className="caption title">
                <h3>
                  We Are Your
                  <br /> <span className="stroke">Bag Of</span> Secrets!
                </h3>
                <div className="row mt-30">
                  <div className="col-lg-5 offset-lg-1">
                    <div className="text">
                      <p>
                        We're your one-stop creative marketing solutions
                        provider – branding, web marketing, interior/exterior
                        design, digital video walls – unlocking visual design
                        success against competitors!
                      </p>
                    </div>
                    <div className="crv-butn-vid mt-30">
                      <a
                        href="https://youtu.be/AzwC6umvd1s"
                        className="vid"
                        onClick={openVideo}
                      >
                        <span className="px-2 text sub-title">Watch</span>
                        <span className="icon main-colorbg4">
                          <svg
                            className="default"
                            width="13"
                            height="20"
                            viewBox="0 0 13 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 20L13 10L0 0V20Z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 explore-radius">
              <div className="">
                <Link href="/dark/page-about" className="hover-this">
                  <div className="circle-button in-bord hover-anim">
                    <div className="rotate-circle fz-30 text-u">
                      <svg className="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          ></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength="900">
                            Explore More - Explore More -
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="arrow">
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
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner-img col-sm-12">
          {/* <Image src={home_main} alt="" /> */}
          <div
            className="slider arch-slider slider-prlx"
            style={{ marginTop: "-150px" }}
          >
            {loadSwiper && (
              <Swiper
                {...swiperOptions}
                className="swiper-container parallax-slider"
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="bg-img valign"
                      data-background={item.background}
                      data-overlay-dark="5"
                      style={{ width: "", height: "400px" }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="caption mt-30">
                              <h5 className="inline main-colorbg">
                                {/* <span>{item.number}</span> */}
                              </h5>
                              <h1>
                                {/* <StatementSplitter statement={item.title} /> */}
                              </h1>
                              {/* <p>{item.text}</p> */}
                            </div>
                          </div>
                          {/* <div className="col-lg-3 offset-lg-1 valign">
                      <div className="ml-auto explore">
                        <Link href="/dark/project-details1">
                          <div className="circle-button">
                            <div className="rotate-circle fz-30 text-u">
                              <svg className="textcircle" viewBox="0 0 500 500">
                                <defs>
                                  <path
                                    id="textcircle1"
                                    d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                                  ></path>
                                </defs>
                                <text>
                                  <textPath
                                    xlinkHref="#textcircle1"
                                    textLength="900"
                                  >
                                    {" "}
                                    Explore More - Explore More -
                                  </textPath>
                                </text>
                              </svg>
                            </div>
                            <div className="arrow">
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
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
            {/* <div className="setting">
              <div className="controls">
                <div className="cursor-pointer swiper-button-next swiper-nav-ctrl next-ctrl">
                  <i className="ion-chevron-right"></i>
                </div>
                <div className="cursor-pointer swiper-button-prev swiper-nav-ctrl prev-ctrl">
                  <i className="ion-chevron-left"></i>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div
        className="bg-pattern bg-img"
        data-background={`/${
          lightMode ? "light" : "dark"
        }/assets/imgs/patterns/graph.png`}
      ></div> */}
        <ModalVideo
          videoId="AzwC6umvd1s"
          channel="youtube"
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          autoplay
        />
      </header>
    </>
  );
}

export default Header;
