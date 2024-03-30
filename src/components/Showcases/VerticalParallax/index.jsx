import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import parallaxieGroup from "@/common/parallaxieGroup";

function VerticalParallax({ lightMode }) {
  useEffect(() => {
    parallaxieGroup(`.bg-img.parallaxie`, 0.2);
  }, []);

  return (
    <section className="parallax-show">
      <div
        className="bg-img inner parallaxie valign"
        data-background="/dark/assets/imgs/works/full/1.jpg"
        data-overlay-dark="3"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="caption text-center">
                <h6 className="sub-title mb-30" data-swiper-parallax="-1000">
                  © 2023 Branding
                </h6>
                <h1>
                  <Link
                    href={
                      lightMode
                        ? "/light/page-product-category1"
                        : "/dark/page-product-category1"
                    }
                  >
                    Dynamic Digital Products
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-img inner parallaxie valign"
        data-background="/dark/assets/imgs/works/full/2.jpg"
        data-overlay-dark="3"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="caption text-center">
                <h6 className="sub-title mb-30" data-swiper-parallax="-1000">
                  © 2023 Branding
                </h6>
                <h1>
                  <Link
                    href={
                      lightMode
                        ? "/light/page-product-category2"
                        : "/dark/page-product-category2"
                    }
                  >
                    Intelligent Tech Products
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-img inner parallaxie valign"
        data-background="/dark/assets/imgs/works/full/3.jpg"
        data-overlay-dark="3"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="caption text-center">
                <h6 className="sub-title mb-30" data-swiper-parallax="-1000">
                  © 2023 Branding
                </h6>
                <h1>
                  <Link
                    href={
                      lightMode
                        ? "/light/page-product-category3"
                        : "/dark/page-product-category3"
                    }
                  >
                    Interactive Wow Production
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalParallax;
