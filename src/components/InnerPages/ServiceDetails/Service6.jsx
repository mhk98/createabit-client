import {
  faBuildingUser,
  faComputer,
  faMobile,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Service1 from "../../../../images/Video-Aanimation-01.png";
import service2 from "../../../../images/service/Features-Services-Regarding-Graphic-Design-01.png";
import Faq from "../Faq";
function Service6() {
  return (
    <div className="container ">
      <div className="service_feature">
        <div>
          <Image className="service_image" src={Service1} alt="" />
        </div>
        <div>
          <h4>Graphic Design</h4>
          <h5>Professional & Creative Graphic Design Solution</h5>
          <p className="mt-8">
            Graphics design is a way to show or express ideas and experience
            through visual and textual content. When the whole world is busy in
            upgrading business strategy with every possible way, there graphics
            design is the prop that can easily help you out with. With very
            limited amount of art work it can deliver a good quantity of
            information. The representation these can be both virtual and
            physical including.
          </p>{" "}
          <br />
          <p>
            Create.a.bit desings has a great skilled and experienced team for
            helping you to provide one of the best Graphics Design service with
            high quality design with creative and unique ideas.
          </p>
          <div className="purchase" style={{ marginTop: "20px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>SEND US YOUR QUERIES! </span>
            </a>
          </div>
        </div>
      </div>

      <div>
        <h5 className="text-center mt-100">Why choose US ?</h5>

        <div className="row mt-80">
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon icon={faMobile} style={{ fontSize: "30px" }} />
              </div>
              <div className="ml-20">
                <h5>High Quality Design</h5>
                <p style={{ fontSize: "16px" }}>
                  The number one benefit of using our web apps is that you can
                  use them on your mobile phone & other devices.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon
                  className="fs-1"
                  icon={faComputer}
                  style={{ fontSize: "30px" }}
                />
              </div>
              <div className="ml-20">
                <h5>Logo Design.</h5>
                <p style={{ fontSize: "16px" }}>
                  When you use our web apps, you are not restricted to one
                  computer. So, you can use the web app service on any computer
                  that is connected to the Internet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-60 mb-100">
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon
                  className="fs-1"
                  icon={faUserGraduate}
                  style={{ fontSize: "30px" }}
                />
              </div>
              <div className="ml-20">
                <h5>Fascinating User Interface.</h5>
                <p style={{ fontSize: "16px" }}>
                  All our web apps are Internet-based and don’t have
                  compatibility issues. So, it means that sharing data from the
                  same app is easy.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon
                  className="fs-1"
                  icon={faMobile}
                  style={{ fontSize: "30px" }}
                />
              </div>
              <div className="ml-20">
                <h5>Faultless Budgeting</h5>
                <p style={{ fontSize: "16px" }}>
                  All the user data is stored on our web app servers. So this
                  means that users don’t have to do backups. Everything is saved
                  and back-up by the service provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h5 className="text-center mt-100 mb-100">
            Our Web Application Development Process
          </h5>
          <Faq />
        </div>
      </div>

      <div className="mt-100 mb-100">
        <h3 className="text-center">
          Features Services Regarding Graphic Design
        </h3>

        <div className="row mt-100">
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
                    className="rounded-circle"
                    icon={faBuildingUser}
                    style={{
                      fontSize: "10px",
                      backgroundColor: "white",
                      color: "black",
                      width: "30px",
                      height: "30px",
                      padding: "20px",
                    }}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="ml-20 right-side">
                <p
                  className="heading"
                  style={{ fontWeight: "600", fontSize: "18px" }}
                >
                  Brand Identity Design
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
                    className="rounded-circle"
                    icon={faBuildingUser}
                    style={{
                      fontSize: "10px",
                      backgroundColor: "white",
                      color: "black",
                      width: "30px",
                      height: "30px",
                      padding: "20px",
                    }}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="ml-20 right-side">
                <p
                  className="heading"
                  style={{ fontWeight: "600", fontSize: "18px" }}
                >
                  Rebranding
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
                    className="rounded-circle"
                    icon={faUserGraduate}
                    style={{
                      fontSize: "10px",
                      backgroundColor: "white",
                      color: "black",
                      width: "30px",
                      height: "30px",
                      padding: "20px",
                    }}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="ml-20 right-side">
                <p
                  className="heading"
                  style={{ fontWeight: "600", fontSize: "18px" }}
                >
                  Logo Design
                </p>
                <small className="content">
                  We understand your industry and business. So, we provide the
                  solution that is customized and fits according to your needs.
                </small>
              </div>
            </div>
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
                    className="rounded-circle"
                    icon={faBuildingUser}
                    style={{
                      fontSize: "10px",
                      backgroundColor: "white",
                      color: "black",
                      width: "30px",
                      height: "30px",
                      padding: "20px",
                    }}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="ml-20 right-side">
                <p
                  className="heading"
                  style={{ fontWeight: "600", fontSize: "18px" }}
                >
                  Stationery Design
                </p>
                <small className="content">
                  We design the user interface of the applications in the way
                  that the users will expect without having to think about it.
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
                    className="rounded-circle"
                    icon={faBuildingUser}
                    style={{
                      fontSize: "10px",
                      backgroundColor: "white",
                      color: "black",
                      width: "30px",
                      height: "30px",
                      padding: "20px",
                    }}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="ml-20 right-side">
                <p
                  className="heading"
                  style={{ fontWeight: "600", fontSize: "18px" }}
                >
                  Print And Brochure Design
                </p>
                <small className="content">
                  Our applications are server/cloud-based. So, every time we
                  update, you have access to the new version from any connected
                  device.
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
                    className="rounded-circle"
                    icon={faUserGraduate}
                    style={{
                      fontSize: "10px",
                      backgroundColor: "white",
                      color: "black",
                      width: "30px",
                      height: "30px",
                      padding: "20px",
                    }}
                  ></FontAwesomeIcon>
                </div>
              </div>
              <div className="ml-20 right-side">
                <p
                  className="heading"
                  style={{ fontWeight: "600", fontSize: "18px" }}
                >
                  Packaging Design
                </p>
                <small className="content">
                  We assess your requirements thoroughly. And then we propose a
                  realistic estimate of the budget and time required to complete
                  the project.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service6;
