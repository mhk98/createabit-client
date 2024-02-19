import Image from "next/image";
import wow1 from "../../../../images/wow1.png";
import wow2 from "../../../../images/wow2.jpg";

import Link from "next/link";
import wow3 from "../../../../images/wow3.jpg";
import wow4 from "../../../../images/wow4.jpg";
import wow5 from "../../../../images/wow5.jpg";
import wow6 from "../../../../images/wow6.jpg";
import wow7 from "../../../../images/wow7.jpg";

export default function Wow1() {
  return (
    <div className="container">
      <div>
        <div
          className="wow1_content"
          style={{ margin: "120px 0px" }}
        >
          <Image className="wow1_image" src={wow1} alt="" />

          <div>
            <p style={{ padding: "30px", marginLeft: "80px" }}>
              Createabit interactive projection system can be projected on the
              normal floor, wall or window with any desired effect. It will show
              attractive effects by detecting people's actions on the projection
              screen. We provide professional service, tailored to your effects.
              We can even supply multiple display technology to make two or
              three projection sizes look like one projection image without any
              light gaps.
            </p>
          </div>
        </div>
        <div
          className="wow1_content"
          style={{ margin: "120px 0px" }}
        >
          <Image className="wow1_image" src={wow2} alt="" />
          <p style={{ padding: "30px", marginLeft: "80px" }}>
            Createabit interactive projection system can be projected on the
            normal floor, wall or window with any desired effect. It will show
            attractive effects by detecting people's actions on the projection
            screen. We provide professional service, tailored to your effects.
            We can even supply multiple display technology to make two or three
            projection sizes look like one projection image without any light
            gaps.
          </p>
        </div>
        <div
          className="wow1_content "
          style={{ margin: "120px 0px" }}
        >
          <Image className="wow1_image" src={wow7} alt="" />
          <div style={{ padding: "30px" }}>
            <h3>Advantage:</h3>
            <p>- Exciting to play and watch</p>
            <p>- Move your body to play it’s magic!</p>
            <p>- Easy and safe to use - It’s a complete virtual experience</p>
            <p>- Large number of effects available</p>
            <p>- Customer will never get bored</p>
            <p>- Customizable to your needs</p>
            <p>- Brand it, personalize it, build and design your own effects</p>
          </div>
        </div>
      </div>

      <section
        className="portfolio clasic section-padding"
        data-scroll-index="3"
      >
        <div className="container">
          <div className="sec-lg-head mb-50">
            <div className="row">
              <div className="col-lg-7">
                <div className="position-re">
                  <h6 className="mb-10 dot-titl-non">Product</h6>
                  <h2 className="fz-50">Feature Products</h2>
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
            <div className="col-lg-6">
              <div className="item mt-30">
                <div className="img">
                  <Image src={wow3} alt="" className="radius-10" />
                  <Link href="/dark/project-details1" className="tag">
                    <span>Wow Product</span>
                  </Link>
                </div>
                <div className="cont mt-30 d-flex">
                  <div>
                    <h6 className="line-height-1">
                      <Link href="/dark/project-details1">
                        Interactive WoW Production
                      </Link>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    {/* <p className="fz-14">© {item.date}</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="item mt-30">
                <div className="img">
                  <Image src={wow4} alt="" className="radius-10" />
                  <Link href="/dark/project-details1" className="tag">
                    <span>Wow Product</span>
                  </Link>
                </div>
                <div className="cont mt-30 d-flex">
                  <div>
                    <h6 className="line-height-1">
                      <Link href="/dark/project-details1">
                        Interactive WoW Production
                      </Link>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    {/* <p className="fz-14">© {item.date}</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="item mt-30">
                <div className="img">
                  <Image src={wow5} alt="" className="radius-10" />
                  <Link href="/dark/project-details1" className="tag">
                    <span>Wow Product</span>
                  </Link>
                </div>
                <div className="cont mt-30 d-flex">
                  <div>
                    <h6 className="line-height-1">
                      <Link href="/dark/project-details1">
                        Interactive WoW Production
                      </Link>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    {/* <p className="fz-14">© {item.date}</p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="item mt-30">
                <div className="img">
                  <Image src={wow6} alt="" className="radius-10" />
                  <Link href="/dark/project-details1" className="tag">
                    <span>Wow Product</span>
                  </Link>
                </div>
                <div className="cont mt-30 d-flex">
                  <div>
                    <h6 className="line-height-1">
                      <Link href="/dark/project-details1">
                        Interactive WoW Production
                      </Link>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    {/* <p className="fz-14">© {item.date}</p> */}
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
