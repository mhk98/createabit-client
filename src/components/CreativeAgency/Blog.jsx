import React, { useState, useEffect } from "react";
import Link from "next/link";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
//= Data
import data from "@/data/CreativeAgency/blog.json";

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".blog-modern .swiper-button-next",
    prevEl: ".blog-modern .swiper-button-prev",
  },
};

function CreativeBlog() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="blog-modern section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80 mt-50">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl mb-10">Selected Grocery</h6>
                <h2 className="fz-70 fw-700">Featured Grocery</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit,
                  sed quia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-carsouel">
          {loadSwiper && (
            <Swiper
              {...swiperOptions}
              id="content-carousel-container-unq-blog"
              className="swiper-container"
            >
              {data.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="item">
                    <div className="img">
                      <img src={item.image} alt="" />
                      <div className="date">
                        <Link href="/dark/blog-post">{item.date}</Link>
                      </div>
                    </div>
                    <div className="cont mt-30">
                      <h6>
                        <Link href="/dark/blog-post">{item.title}</Link>
                      </h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/dark/grocery/"
            className="butn butn-md butn-bord radius-30 mt-4 "
          >
            <div className="full-width">
              <span className="full-width">Read More</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CreativeBlog;
