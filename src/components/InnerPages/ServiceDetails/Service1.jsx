import {
  faBlog,
  faFire,
  faLaptop,
  faLightbulb,
  faLock,
  faMobileButton,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import web_banner from "../../../../images/iPhone-App-Development.png";
import service1 from "../../../../images/service/web-development.png";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Service1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  // const handleSendMail = async () => {
  //   const data = {
  //     senderAddress: address,
  //     senderPhone: phone,
  //     senderName: name,
  //     mailerSubject: subject,
  //     mailerMessage: message,
  //   };
  //   const res = await axios.post(
  //     "https://server.arcfbd.org/api/v1/contact/create-contact",
  //     data
  //   );
  // };

  const handleSendMail = async () => {
    try {
      const data = {
        mailAddress: address,
        mailerName: name,
        mailerSubject: subject,
        mailerMessage: message,
        senderPhone: phone,
      };

      console.log("data", data);
      //     // Use IP address instead of hostname
      const res = await axios.post(
        "https://createabit-backend.onrender.com/api/v1/contact/create-contact", // replace x.x.x.x with the actual IP address
        data
      );

      if (res.data.data.status === "Success") {
        toast.success("Successfully send email");
      } else {
        console.error(
          "Failed to send mail. Server returned status:",
          res.status
        );
      }
    } catch (error) {
      console.error("An error occurred while sending the mail:", error.message);
    }
  };
  return (
    <div>
      <div className="container service">
        <div className="service_content">
          <div>
            <Image className="service_image" src={service1} alt="" />
          </div>
          <div className="service_image">
            <h4>Website Design & Development</h4>
            <h5>Professional & Creative Web Design Solution</h5>
            <p className="mt-8">
              Createabit's experienced web designers have the ability to make
              your website look professional, yet beautiful. We use the latest
              web design technologies that enabled us to become the top web
              design and development company in the industry.
            </p>{" "}
            <br />
            <p>
              Our commitment is to provide prodigious, high-quality services by
              utilizing professionals with their research and studies to deliver
              exceptional value to our client getting them to their objectives
              that directly hit to the targeted area.
            </p>
            <div className="purchase" style={{ marginTop: "16px" }}>
              <button
                className="butn butn-md butn-bord radius-30"
                onClick={handleShow}
              >
                <span>SEND US YOUR QUERIES! </span>
              </button>

              <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className="mt-80"
              >
                {/* <Modal.Header closeButton></Modal.Header> */}
                <Modal.Body>
                  <div className="contact-page__form-box">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendMail();
                      }}
                      // action="assets/inc/sendemail.php"
                      className="contact-page__form contact-form-validated mt-30"
                      // noValidate="novalidate"
                    >
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="contact-form__input-box">
                            <input
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              placeholder="Your name"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="contact-form__input-box">
                            <input
                              onChange={(e) => setAddress(e.target.value)}
                              type="email"
                              placeholder="Email address"
                              name="email"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="contact-form__input-box">
                            <input
                              onChange={(e) => setPhone(e.target.value)}
                              type="text"
                              placeholder="Phone"
                              name="phone"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="contact-form__input-box">
                            <input
                              onChange={(e) => setSubject(e.target.value)}
                              type="text"
                              placeholder="Subject"
                              name="subject"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="contact-form__input-box text-message-box">
                            <textarea
                              onChange={(e) => setMessage(e.target.value)}
                              name="message"
                              placeholder="Write a message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="contact-form__btn-box">
                            <input
                              type="submit"
                              className="thm-btn contact-form__btn"
                              value="Send a message"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>

        <div className="serviceDetails-title">
          <h4 className="text-center mt-80 mb-30">
            What Should You Know About Our Web Design Service
          </h4>
          <p>
            We understand your website is central to your brand identity,
            reputation and how customers perceive you. We pay special attention
            to understand your business and create a strategy to fulfill your
            business objectives. Following are some of our specialties:
          </p>
          <div className="service_card">
            <div style={{ width: "300px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon className="development-icon" icon={faLaptop} />
                <h5>Professional Design</h5>
              </div>
              <div>
                <p>
                  We focus on developing effective, elegant and affordable web
                  design solutions that create opportunities for small to large
                  Organizations to grow their businesses.
                </p>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon
                  className="development-icon"
                  icon={faMobileButton}
                />
                <h5>Responsive Website</h5>
              </div>
              <div>
                <p>
                  We design & develop mobile-friendly websites to scale
                  seamlessly across different devices and screen sizes, a
                  concept termed responsive web design.
                </p>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon icon={faSearch} className="development-icon" />
                <h5>SEO friendly coding</h5>
              </div>
              <div>
                <p>
                  We always follow Google’s SEO-friendly coding guideline. We do
                  100% SEO Friendly HTML coding to boost up your site and become
                  more search friendly.
                </p>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon icon={faBlog} className="development-icon" />
                <h5>Multiple Frameworks & CMS</h5>
              </div>
              <div>
                <p>
                  We have developed our expertise on different frameworks and
                  CMS such as: WordPress, Joomla, Codeigniter, Magento, Laravel,
                  and Custom Frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="service_card">
            <div style={{ width: "300px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="development-icon"
                />
                <h5>Creativity</h5>
              </div>
              <div>
                <p>
                  We’re a creative web design company in Bangladesh with a focus
                  on the bigger picture and the smallest details, with the right
                  kind of creativity expertise.
                </p>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon icon={faFire} className="development-icon" />
                <h5>Passion</h5>
              </div>
              <div>
                <p>
                  Our company is driven by one thing: passion; a passion for web
                  design & development and a passion for helping our clients
                  grow.
                </p>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon icon={faPhone} className="development-icon" />
                <h5>Great Support</h5>
              </div>
              <div>
                <p>
                  Our affordable web design maintenance and support service
                  offers peace-of-mind for clients who require frequent updates
                  to their websites.
                </p>
              </div>
            </div>
            <div style={{ width: "300px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon icon={faLock} className="development-icon" />
                <h5>Security</h5>
              </div>
              <div>
                <p>
                  We have a great team who always work on the security of your
                  site and make sure that your website is secured from any known
                  threats.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center mt-60">Features That You’ll Love</h3>
          <div>
            <div className="mt-30 service_feature">
              <div>
                <Image src={web_banner} alt=""></Image>
              </div>

              <div style={{ lineHeight: "10px", marginBottom: "10px" }}>
                <div class="e1617-51 x-text x-text-headline">
                  <div class="x-text-content">
                    <span class="x-graphic" aria-hidden="true">
                      <i
                        class="x-icon x-graphic-icon x-graphic-primary"
                        aria-hidden="true"
                        data-x-icon-b=""
                      ></i>
                    </span>
                    <div class="x-text-content-text">
                      <h6 class="x-text-content-text-primary">
                        Clean HTML CSS
                      </h6>
                      <p style={{ fontSize: "16px" }}>
                        {" "}
                        Our expert programmers always maintain a clean HTML,
                        CSS, &amp; JavaScript coding structure.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="e1617-51 x-text x-text-headline">
                  <div class="x-text-content">
                    <span class="x-graphic" aria-hidden="true">
                      <i
                        class="x-icon x-graphic-icon x-graphic-primary"
                        aria-hidden="true"
                        data-x-icon-b=""
                      ></i>
                    </span>
                    <div class="x-text-content-text">
                      <h6 class="x-text-content-text-primary">
                        Responsive Website
                      </h6>
                      <p style={{ fontSize: "16px" }}>
                        {" "}
                        We put the best effort on mobile-friendly web design so
                        that your website fits into each and every device.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="e1617-51 x-text x-text-headline">
                  <div class="x-text-content">
                    <span class="x-graphic" aria-hidden="true">
                      <i
                        class="x-icon x-graphic-icon x-graphic-primary"
                        aria-hidden="true"
                        data-x-icon-b=""
                      ></i>
                    </span>
                    <div class="x-text-content-text">
                      <h6 class="x-text-content-text-primary">
                        Google Standard Coding
                      </h6>
                      <p style={{ fontSize: "16px" }}>
                        {" "}
                        We make sure that your website coding is error-free and
                        follows all the coding guidelines of Google.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="e1617-51 x-text x-text-headline">
                  <div class="x-text-content">
                    <span class="x-graphic" aria-hidden="true">
                      <i
                        class="x-icon x-graphic-icon x-graphic-primary"
                        aria-hidden="true"
                        data-x-icon-b=""
                      ></i>
                    </span>
                    <div class="x-text-content-text">
                      <h6 class="x-text-content-text-primary">
                        Eye-Catching Design
                      </h6>
                      <p style={{ fontSize: "16px" }}>
                        {" "}
                        We make attractive and appropriate designs for your
                        website, understanding your requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="e1617-51 x-text x-text-headline">
                  <div class="x-text-content">
                    <span class="x-graphic" aria-hidden="true">
                      <i
                        class="x-icon x-graphic-icon x-graphic-primary"
                        aria-hidden="true"
                        data-x-icon-b=""
                      ></i>
                    </span>
                    <div class="x-text-content-text">
                      <h6 class="x-text-content-text-primary">
                        Social Media Integration
                      </h6>
                      <p style={{ fontSize: "16px" }}>
                        {" "}
                        We integrate your website with your social media
                        profiles such as Facebook, Twitter, LinkedIn, Google+,
                        etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service1;
