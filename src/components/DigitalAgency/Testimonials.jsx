//= Data
import Image from "next/image";
import member1 from "../../../images/member1.jpg";

function Testimonials({ mainColor }) {
  return (
    <section className="testim-vrt sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div>
              <div className="main-marqv">
                <div className="slide-vertical st1">
                  <div className="box">
                    <div className="item radius-30 mt-30" >
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img circle-80">
                            <Image
                              src={member1}
                              alt=""
                              className="circle-img"
                            />
                          </div>
                        </div>
                        <div className="ml-30">
                          <div className="info">
                            <h6>Competitive Rates & Project Quotes</h6>
                            <span className="">
                              Shopping quotes for your next mobile app
                              development project? Get a quote from us! Offering
                              competitive rates for experienced mobile app
                              developers.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ))} */}
                  </div>
                  <div className="box">
                    <div className="item radius-30 mt-30" >
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img circle-80">
                            <Image
                              src={member1}
                              alt=""
                              className="circle-img"
                            />
                          </div>
                        </div>
                        <div className="ml-30">
                          <div className="info">
                            <h6>Proven, Rapid & Trusted Delivery</h6>
                            <span className="">
                              Using agile methodology, always keeping you in the
                              loop. Streamlined delivery, cost effective
                              projects, designed to match your goals, timeline
                              and budget.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ))} */}
                  </div>
                  <div className="box">
                    <div className="item radius-30 mt-30" >
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img circle-80">
                            <Image
                              src={member1}
                              alt=""
                              className="circle-img"
                            />
                          </div>
                        </div>
                        <div className="ml-30">
                          <div className="info">
                            <h6>Experienced Mobile App Developers</h6>
                            <span className="">
                            Our mobile app developers create solutions that work seamlessly across all platforms and operating systems: smartphone, tablet or laptop or running iOS, Android, BlackBerry OS or Windows.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 mr-80">
            <div>
              <div className="main-marqv">
                <div className="slide-vertical st1">
                  <div className="box">
                    
                    <div className="item radius-30 mt-30" >
                      
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img circle-80">
                            <Image
                              src={member1}
                              alt=""
                              className="circle-img"
                            />
                          </div>
                        </div>
                        <div className="ml-30">
                          <div className="info">
                            <h6>Transparent, Collaborative, Communicative</h6>
                            <span className="">
                              Complete project visibility from day one, working
                              with you, and for you. Using email, phone, chat,
                              Skype, and Google Hangout for clear, constant
                              communication.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ))} */}
                  </div>
                  <div className="box">
                    <div className="item radius-30 mt-30">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img circle-80">
                            <Image
                              src={member1}
                              alt=""
                              className="circle-img"
                            />
                          </div>
                        </div>
                        <div className="ml-30">
                          <div className="info">
                            <h6>Customer Satisfaction is the Priority</h6>
                            <span className="">
                              Dedicated account manager, project manager and
                              consistent delivery team provided. We survey all
                              of our clients, the results of which go directly
                              to our CEO.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="item radius-30 mt-30" >
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="img circle-80">
                            <Image
                              src={member1}
                              alt=""
                              className="circle-img"
                            />
                          </div>
                        </div>
                        <div className="ml-30">
                          <div className="info">
                            <h6>Best Service In the market</h6>
                            <span className="">
                              We integrate your website with your social media
                              profiles such as Facebook, Twitter, LinkedIn,
                              Google+, etc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
