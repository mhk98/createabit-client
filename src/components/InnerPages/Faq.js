import Image from "next/image";
import sq1 from "../../../images/sq1.jpg";
import sq2 from "../../../images/sq2.jpg";

function Faq() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }

  return (
    <section className="intro-corp section-padding">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Watch the creative</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">process behind our</span>
                  </span>
                  <span className="sideup-text">
                    <span className="up-text">Web Application Development.</span>
                  </span>
                </h2>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Requirements Gathering</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      At first, gather all requirements from you, leaving
                      nothing behind.
                    </p>
                  </div>
                </div>

                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Analyze & Design</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      We will then analyze your requirements. And, then come up
                      with a proposed design of the application.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Programming & Development</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      At this phase, we will code & develop the solution with
                      standing all entry point and possible routes, ensuring a
                      robust application
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Implementation</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      Then we will upload the application on our in-house
                      server.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Testing & Demonstration</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      At this phase, we will test the application. And when the
                      testing & bug fixing are done, we will demonstrate.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Support</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      Then, we will resolve all the issues before the
                      deployment.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Maintenance</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      After that, we will agree upon a maintenance plan that
                      will cover all the deployment issues.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Deployment</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      Finally, we will deploy the application which will involve
                      user acceptance testing in the live ‘platform’.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 valign md-mb50">
            <div className="imgs full-width mb-80">
              <div className="img1 main-color2 wow fadeInUp">
                <Image src={sq1} alt="" />
              </div>
              <div className="img2 wow fadeInLeft">
                <Image src={sq2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
