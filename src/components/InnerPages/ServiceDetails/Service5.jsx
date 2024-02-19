import {
  faBuildingUser,
  faMobile,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import service1 from "../../../../images/service/Video-Aanimation.png";
import service2 from "../../../../images/service/video_feature.png";

function Service5() {
  return (
    <div className="container">
      <div className="service_feature">
        <div>
          <Image className="service_image" src={service1} alt="" />
        </div>
        <div>
          <h4>Video production and Animation Service</h4>
          <h5>Professional & Creative Video and animation production</h5>
          <p className="mt-8">
            The advent of the internet and mobile devices have made way for
            video to emerge in a more abundant and relevant way than it has in
            the past. In fact, "More video content is uploaded in 30 days than
            the major U.S. television networks have created in 30 years." -Word
            Stream What has also changed with this, is how marketers reach their
            potential clients with video. There are so many different platforms
            and methods to get video content viewed by the masses. So now more
            than ever, engaging, creative and effective video content creation
            is even more relevant! Here at Overit, There are different ways that
            we achieve this:
          </p>{" "}
          <div className="purchase" style={{ marginTop: "20px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>SEND US YOUR QUERIES! </span>
            </a>
          </div>
        </div>
      </div>

      {/* <div>
        <h3 className="text-center mt-100 mb-100">
          Our Graphic Design Process
        </h3>

        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <li className="font-bold" style={{ fontSize: "16px" }}>
              Assemble Requirements
            </li>
            <li className="font-bold" style={{ fontSize: "16px" }}>
              Inspect and Design
            </li>
            <li className="font-bold" style={{ fontSize: "16px" }}>
              Programming & Development
            </li>
            <li className="font-bold" style={{ fontSize: "16px" }}>
              Execution
            </li>
            <li className="font-bold" style={{ fontSize: "16px" }}>
              Testing and Verification
            </li>
            <li className="font-bold" style={{ fontSize: "16px" }}>
              Support
            </li>
            <li className="font-bold" style={{ fontSize: "16px" }}>
              Maintenance
            </li>
            <li className="font-bold" style={{ fontSize: "16px" }}>
              Evaluate the Design
            </li>
            <p className="mt-20">
              Finally, we will deploy the application which will involve user
              acceptance testing in the live ‘platform’.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Image src={service2} alt="" />
          </div>
        </div>
      </div> */}

      <div>
        <h4 className="text-center mt-100">
          What Should You Know About Our Video Production and Animation Service?
        </h4>
        <p>
          We understand your website is central to your brand identity,
          reputation and how customers perceive you. We pay special attention to
          understand your business and create a strategy to fulfill your
          business objectives. Following are some of our specialties:
        </p>
        <div className="row mt-80">
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-3" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h5>OUR SOLUTIONS EFFECTIVELY AND EFFICIENTLY.</h5>
                <p className="" style={{ fontSize: "16px" }}>
                  Instead of mindless drawing we solve specific business
                  problems. Therefore, special attention is paid to the
                  collection of information about the client and the CA, as well
                  as the generation of ideas.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-3" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h5>WE CARRY OUT WORK WITHOUT BIAS DEADLINE.</h5>
                <p className="" style={{ fontSize: "16px" }}>
                  At the stage of harmonization of the volume of work, we
                  calculate with accuracy the time required. You will then
                  receive a Gantt chart and timeline for each stage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-60 mb-100">
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-3" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h5>YOUR PROJECT WILL WORK EXPERIENCED SPECIALISTS.</h5>
                <p className="" style={{ fontSize: "16px" }}>
                  We employ experts level not less than "Senior". Experience
                  each - 5 years or more. All employees undergo regular training
                  and confirm their knowledge.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div>
                <FontAwesomeIcon className="fs-3" icon={faMobile} />
              </div>
              <div className="ml-20">
                <h5>
                  WE CREATE MEMORABLE SOLUTIONS, USING THE LATEST ECHNOLOGIES.
                </h5>
                <p className="" style={{ fontSize: "16px" }}>
                  Our company is driven by one thing: passion; a passion for web
                  design & development and a passion for helping our clients
                  grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-100 mb-100">
        <h4 className="text-center">We’ll handle it</h4>
        <p className="text-center">
          Here at Modicum, our motion design process is collaborative.
        </p>{" "}
        <p className="text-center">
          We keep you informed every step of the way, working together to bring
          your story to life.
        </p>
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
                  Strategy
                </p>
                <small className="content">
                  We begin our process by discussing your goals. Once our
                  designers understand your situation, we work together to
                  develop a strategy for using motion graphics to tell your
                  story.
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
                  Scripting
                </p>
                <small className="content">
                  After a kick-off call, our motion designers and copywriters
                  work together to develop a script and concept that will tell
                  your story and pair well with motion design.
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
                  Moodboards & Storyboards
                </p>
                <small className="content">
                  Storyboards are shared at varying degrees of finish, making
                  sure that important details are covered and that you know
                  exactly what to expect before we begin the motion design
                  process.
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
                  Design & Animation
                </p>
                <small className="content">
                  We create custom characters and backgrounds to explain what
                  will happen in each scene, so you have a concrete idea of what
                  to expect when you see the final piece. Then, we bring it to
                  life.
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
                  Sound Design & Voiceover
                </p>
                <small className="content">
                  Motion graphics rely on solid sound design to create a
                  captivating experience. After visuals are in place, we find
                  the right sound effects.
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
                  Delivery
                </p>
                <small className="content">
                  We deliver the shiny new animation, and any other content you
                  need to share your video on different platforms. You ride off
                  happily into the sunset, until you’re ready to build your next
                  story.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service5;
