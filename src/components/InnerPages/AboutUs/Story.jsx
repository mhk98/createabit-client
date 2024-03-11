import { useEffect } from "react";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";
import Image from "next/image";
import about from "../../../../images/about/01.jpg";

function Story({ lightMode }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about story-about sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="bg-img radius-10 md-mb50"
              data-background="/dark/assets/imgs/about/sq1.jpg"
            ></div>
          </div>
          <div className="col-lg-8">
            <div
              className="bg-img radius-10"
              data-background="/dark/assets/imgs/about/sq2.jpg"
            ></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title" style={{ fontSize: "20px" }}>
                Our Story.
              </h6>
            </div>
          </div>

          <div className="col-lg-8">
            <div className=" mt-80">
              <p>
                CreateAbit designs is a renowned name in the digital world. We
                are a reputed marketing and branding agency based in Washington
                DC metro area. Our extensive history, rich experience, and
                excellent track record make us a more reliable choice when it
                comes to designing and marketing services.
              </p>
              <p style={{ fontSize: "16px" }}>
                We aim to make your online presence better which is no less than
                a necessity these days. In this day and age, where technology
                has takeover, trends have significantly changed. No matter how
                big small your business is, you have to maintain your repute
                online. Building a strong presence and a positive image about
                your business is crucial to your success and that’s what we are
                here for.
              </p>
            </div>
          </div>
        </div>
        <section
          className="about-intro section-padding"
          style={{ marginTop: "80px" }}
        >
          <div className="container ">
            <div className="different-cont row">
              <div className="col-lg-6 rest">
                <div className="imgs md-mb50">
                  <div className="img1">
                    <div className="o-hidden">
                      <div className=" wow">
                        <Image className="" src={about} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-30 col-lg-6">
                <div className="cont">
                  <h2 className="wow">
                    <span className="">Our Key Differentiators</span>
                  </h2>
                  <div className="mt-30 feat">
                    <ul className="differentiator">
                      <li className="mb-10 " style={{ fontSize: "16px" }}>
                        Expertise in executing customized project requirements
                        to perfection (short-term as well as long-term)
                      </li>
                      <li className="mb-10 " style={{ fontSize: "16px" }}>
                        Fast project turnaround time
                      </li>
                      <li className="mb-10 " style={{ fontSize: "16px" }}>
                        Substantial cost savings
                      </li>
                      <li className="mb-10 " style={{ fontSize: "16px" }}>
                        Strict adherence to International quality standards
                      </li>
                      <li className="mb-10 " style={{ fontSize: "16px" }}>
                        A dedicated Project Management, Transitions and Customer
                        Engagement team available 24 hours a day
                      </li>
                      <li className="mb-10 " style={{ fontSize: "16px" }}>
                        Significant increase in business revenue and
                        productivity
                      </li>
                      <li className="mb-10 " style={{ fontSize: "16px" }}>
                        Experience in serving global customers for over 12 years
                      </li>
                      <li className="mb-10 " style={{ fontSize: "16px" }}>
                        Vast domain knowledge and outsourcing expertise across
                        multiple domains
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-8">
            <div className="cont">
              <p style={{ fontSize: "16px" }}>
                We know how important it is to keep the audiences involved and
                how to maintain their interest in what you do. We ensure the
                provision of best services that can provide you with the
                fruitful outcomes and ultimate success for your business.
                experienced. Our team of experts comprises top designers, market
                analysis, social media managers, web developers, software
                architects and application developers. We are equipped with
                state of the art technology and each of our team members is
                highly-qualified and
              </p>
              <br />
              <p style={{ fontSize: "16px" }}>
                We provide top-notch services to all our clients and
                satisfaction is guaranteed here. Whether you need a new website
                with appealing design and easy to use interface or you are
                looking for assistance with SEO, we have got you covered.
                Likewise, you can come to us if you require professional
                assistance in database administration. In addition to these, we
                also offer a complete range of online marketing services. WHY
                USThere are countless companies offering a similar type of
                services but we are the best at what we do. Coming to us would
                save your time, money and energy. You will get flawless services
                and a hassle-free experience with us.
              </p>
              <br />
            </div>
          </div>

          <div className="text-right col-lg-4">
            <div className="sec-head ">
              <h6 className="sub-title" style={{ fontSize: "20px" }}>
                What We Do.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
