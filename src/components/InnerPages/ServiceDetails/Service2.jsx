import Intro from "@/components/MarketingAgency/Intro";
import {
  faMobileButton,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import web_banner from "../../../../images/Custom-web-app-and-developments-01.png";
import service2 from "../../../../images/service/Our-Web-Application-Development-Process-01.png";

function Service2() {
  return (
    <div>
      <div className="container service">
        <div className="service_feature">
          <div>
            <Image src={web_banner} alt="" style={{ width: "500px" }} />
          </div>
          <div style={{ width: "500px" }}>
            <h4>Custom Web Application/Software Development</h4>
            <h5>
              End to end customised solutions to all of your Business needs
            </h5>
            <p className="mt-8">
              We are a One Stop Web Application/Software solution center for all
              your software requirements. We know that one solution doesn’t
              really fit for all. At iTBiz, we tailor our service according to
              your needs and develop Customized Solutions that are more relevant
              to your business processes.
            </p>{" "}
            <br />
            <p>
              We offer powerful web application development services that cater
              to all aspects of application development. We take strategic
              initiative for existing business functionalities over a wide
              spectrum of business domains.
            </p>
            <div className="purchase" style={{ marginTop: "20px" }}>
              <a className="butn butn-md butn-bord radius-30">
                <span>SEND US YOUR QUERIES! </span>
              </a>
            </div>
          </div>
        </div>

        <div className="serviceDetails-title">
          <h4 className="text-center mt-80 mb-30">Why choose our Web Apps?</h4>
          <p>
            We understand your website is central to your brand identity,
            reputation and how customers perceive you. We pay special attention
            to understand your business and create a strategy to fulfill your
            business objectives. Following are some of our specialties:
          </p>
          <div
            className="row"
            style={{
              marginTop: "80px",
            }}
          >
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon
                  icon={faMobileButton}
                  className="development-icon"
                />
                <h5>Mutiple Devices</h5>
              </div>
              <div>
                <p>
                  The number one benefit of using our web apps is that you can
                  use them on your mobile phone & other devices.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon
                  icon={faMobileButton}
                  className="development-icon"
                />
                <h5>Multiple Computers</h5>
              </div>
              <div>
                <p>
                  When you use our web apps, you are not restricted to one
                  computer. So, you can use the web app service on any computer
                  that is connected to the Internet.
                </p>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              marginTop: "80px",
            }}
          >
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon
                  icon={faMobileButton}
                  className="development-icon"
                />
                <h5>Easy Data Sharing</h5>
              </div>
              <div>
                <p>
                  All our web apps are Internet-based and don’t have
                  compatibility issues. So, it means that sharing data from the
                  same app is easy.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div style={{ display: "flex", gap: "10px" }}>
                <FontAwesomeIcon
                  icon={faMobileButton}
                  className="development-icon"
                />
                <h5>No Backup Needed</h5>
              </div>
              <div>
                <p>
                  All the user data is stored on our web app servers. So this
                  means that users don’t have to do backups. Everything is saved
                  and back-up by the service provider.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-center mt-100 mb-100">
            Features That You’ll Love
          </h3>
          <Intro />
        </div>

        <div className="mt-100 mb-100">
          <h3 className="text-center">Features & Benefits of Our Web Apps</h3>
          <div className="row mt-100">
            <div class=" col-lg-4 col-md-12 col-sm-12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center ",
                  marginBottom: "20px",
                }}
              >
                <div className="left-side">
                  <div className="user-icon">
                    <FontAwesomeIcon
                      className="rounded-circle application-icon"
                      icon={faUserGraduate}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="ml-20 right-side">
                  <p
                    className="heading"
                    style={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    Outstanding Build Quality
                  </p>
                  <small className="content">
                    At iTBiz, we use the industry’s best patterns and latest
                    technologies to produce web applications with outstanding
                    quality.
                  </small>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center ",
                  marginBottom: "20px",
                }}
              >
                <div className="left-side">
                  <div className="user-icon">
                    <FontAwesomeIcon
                      className="rounded-circle application-icon"
                      icon={faUserGraduate}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="ml-20 right-side">
                  <p
                    className="heading"
                    style={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    User Centric Design
                  </p>
                  <small className="content">
                    We design the user interface of the applications in the way
                    that the users will expect without having to think about it.
                    needs.
                  </small>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center ",
                  marginBottom: "20px",
                }}
              >
                <div className="left-side">
                  <div className="user-icon">
                    <FontAwesomeIcon
                      className="rounded-circle application-icon"
                      icon={faUserGraduate}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="ml-20 right-side">
                  <p
                    className="heading"
                    style={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    Cloud Based Architecture
                  </p>
                  <small className="content">
                    Our applications are server/cloud-based. So, every time we
                    update, you have access to the new version from any
                    connected device.
                  </small>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Image src={service2} alt="" />
            </div>
            <div class=" col-lg-4 col-md-12 col-sm-12">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center ",
                  marginBottom: "20px",
                }}
              >
                <div className="left-side">
                  <div className="user-icon">
                    <FontAwesomeIcon
                      className="rounded-circle application-icon"
                      icon={faUserGraduate}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="ml-20 right-side">
                  <p
                    className="heading"
                    style={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    Accurate budgeting
                  </p>
                  <small className="content">
                    We assess your requirements thoroughly. And then we propose
                    a realistic estimate of the budget and time required to
                    complete the project.
                  </small>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center ",
                  marginBottom: "20px",
                }}
              >
                <div className="left-side">
                  <div className="user-icon">
                    <FontAwesomeIcon
                      className="rounded-circle application-icon"
                      icon={faUserGraduate}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="ml-20 right-side">
                  <p
                    className="heading"
                    style={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    Future proof and scalable
                  </p>
                  <small className="content">
                    We build in hooks for future development and consider
                    scalability issues where user numbers are likely to grow.
                  </small>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center ",
                  marginBottom: "20px",
                }}
              >
                <div className="left-side">
                  <div className="user-icon">
                    <FontAwesomeIcon
                      className="rounded-circle application-icon"
                      icon={faUserGraduate}
                    ></FontAwesomeIcon>
                  </div>
                </div>
                <div className="ml-20 right-side">
                  <p
                    className="heading"
                    style={{ fontWeight: "600", fontSize: "18px" }}
                  >
                    Superior security and compliance
                  </p>
                  <small className="content">
                    We understand your industry and business. So, we provide the
                    solution that is customized and fits according to your
                    needs.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service2;
