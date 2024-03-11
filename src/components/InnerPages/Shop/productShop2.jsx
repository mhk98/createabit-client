import {
  faFingerprint,
  faHandsHelping,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import product1 from "../../../../images/51tO9J706CL._SY355_.jpg";
import product from "../../../../images/61oEhC1IFYL._SX425_.png";
import product2 from "../../../../images/B1158671887.jpg";

const ProductShop2 = () => {
  return (
    <div className="container">
      {/* Banner part start */}
      <div className="productshop_banner ">
        <div className="text-center productshop_banner_cont">
          <h1>“The Ultimate 3D Advertising</h1>
          <h1>Display Machine”</h1>
        </div>
      </div>
      {/* Banner part end */}

      {/* Branding part start */}
      <div className="text-center mb-50 row ">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h3>Grow your brand</h3>
          <h3>in the palm of</h3>
          <h3>your hand</h3>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <FontAwesomeIcon
            style={{
              width: "20px",
              // color: "white",
              // background
              borderRadius: "100%",
              width: "80px",
              height: "80px",
            }}
            icon={faUserSecret}
          />
          <h5>3D advertising</h5>
          <p>An open eye 3D experience</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <FontAwesomeIcon
            style={{
              width: "20px",
              // color: "white",
              // background
              borderRadius: "100%",
              width: "80px",
              height: "80px",
            }}
            icon={faUserSecret}
          />
          <h5>3D advertising</h5>
          <p>An open eye 3D experience</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <FontAwesomeIcon
            style={{
              width: "20px",
              // color: "white",
              // background
              borderRadius: "100%",
              width: "80px",
              height: "80px",
            }}
            icon={faHandsHelping}
          />
          <h5>3D advertising</h5>
          <p>An open eye 3D experience</p>
        </div>
      </div>
      {/* Branding part end */}

      {/* Benefit start */}
      <div>
        <h1 className="pb-40 pt-50">Benefits of 3D holographic Sign</h1>

        <div
          className="justify-between gap-5 align-middle benefit_main row"
          style={{ margin: "auto" }}
        >
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="benefit">
              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />
            </div>
            <div className="benefit">
              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />
            </div>
            <div className="benefit">
              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <Image src={product} alt="" />
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <div className="benefit1">
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />

              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
            </div>
            <div className="benefit1">
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />

              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
            </div>
            <div className="benefit1">
              <FontAwesomeIcon style={{ width: "50px" }} icon={faFingerprint} />

              <div>
                <h5>Distinguish the Brand</h5>
                <p>
                  Targeted product can make connection through vibrant place to
                  the targeted crowd source
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefit end */}

      {/* Products start */}
      <div
        style={{
          paddingBottom: "180px",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <h1>More About Our Products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
        <p style={{ paddingBottom: "60px" }}>
          {" "}
          sed do eiusmod tempor incididunt ut labore.
        </p>

        {/* product reveiw part start */}

        <div className="gap-5 product_review row">
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ width: "550px" }}
          >
            <Image src={product1} alt="" />
          </div>
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ textAlign: "left" }}
          >
            <h2>42 cm (2 Blades)</h2>
            <p>
              Multi-functional - Use 42cm LED fan to have a 42 cm length
              holographic effect.
            </p>
            <p>Immediately attract people's attention.</p>
            <p style={{ marginTop: "20px" }}>
              Easy To Use -Easy to install, you can customize your video or
              pictures to display,
            </p>
            <p style={{ marginBottom: "20px" }}>
              it will bring a vivid 3d advertising display in the air.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Display Size - Displaying dimension: 16.53 inches;
            </p>
            <p style={{ marginBottom: "20px" }}>LED lamps: 224;</p>
            <p style={{ marginBottom: "20px" }}>Resolution(pixel):450*224.</p>
            <p>
              Display Support Format - mp4, avi, rmvb, mkv, gif, jpg, png with
              black background.
            </p>
          </div>
        </div>

        <div className="gap-5 product_review row">
          <div
            style={{ textAlign: "left" }}
            className="col-lg-6 col-md-12 col-sm-12"
          >
            <h2>42 cm (2 Blades)</h2>
            <p>
              Multi-functional - Use 42cm LED fan to have a 42 cm length
              holographic effect.
            </p>
            <p>Immediately attract people's attention.</p>
            <p style={{ marginTop: "20px" }}>
              Easy To Use -Easy to install, you can customize your video or
              pictures to display,
            </p>
            <p style={{ marginBottom: "20px" }}>
              it will bring a vivid 3d advertising display in the air.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Display Size - Displaying dimension: 16.53 inches;
            </p>
            <p style={{ marginBottom: "20px" }}>LED lamps: 224;</p>
            <p style={{ marginBottom: "20px" }}>Resolution(pixel):450*224.</p>
            <p>
              Display Support Format - mp4, avi, rmvb, mkv, gif, jpg, png with
              black background.
            </p>
          </div>

          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ width: "550px" }}
          >
            <Image src={product2} alt="" />
          </div>
        </div>

        <div className="gap-5 product_review row">
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            style={{ width: "550px" }}
          >
            <Image src={product1} alt="" />
          </div>
          <div
            style={{ textAlign: "left" }}
            className="col-lg-6 col-md-12 col-sm-12"
          >
            <h2>42 cm (2 Blades)</h2>
            <p>
              Multi-functional - Use 42cm LED fan to have a 42 cm length
              holographic effect.
            </p>
            <p>Immediately attract people's attention.</p>
            <p style={{ marginTop: "20px" }}>
              Easy To Use -Easy to install, you can customize your video or
              pictures to display,
            </p>
            <p style={{ marginBottom: "20px" }}>
              it will bring a vivid 3d advertising display in the air.
            </p>
            <p style={{ marginBottom: "20px" }}>
              Display Size - Displaying dimension: 16.53 inches;
            </p>
            <p style={{ marginBottom: "20px" }}>LED lamps: 224;</p>
            <p style={{ marginBottom: "20px" }}>Resolution(pixel):450*224.</p>
            <p>
              Display Support Format - mp4, avi, rmvb, mkv, gif, jpg, png with
              black background.
            </p>
          </div>
        </div>

        {/* product reveiw part end */}
      </div>
      {/* Products end */}

      {/* Background video part start */}

      <div className="productshop_video">
        <h1>Watch The Video</h1>
        <p>Want a thrilling vision of your eye?</p>
        <p>Have a look at the video that mesmerize your vision.</p>
      </div>

      {/* Background video part end */}

      {/* Faq part start */}
      <div style={{ width: "100%", paddingTop: "20px" }}>
        <h1 style={{ textAlign: "center" }}>FAQ</h1>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>
        <p style={{ textAlign: "center" }}>
          sed do eiusmod tempor incididunt ut labore.
        </p>

        <div className="faq_content">
          <section class="faq1" style={{ marginBottom: "50px" }}>
            <div class="faq-container">
              <details class="faq-box" open>
                <summary class="faq-header">
                  Sed accumsan nulla ut dui hendrerit?
                </summary>
                <div class="faq-content">
                  <p>
                    Nullam quis justo in lectus consequat facilisis ac et nibh.
                    Fusce faucibus augue id nibh vestibulum nec.
                  </p>
                </div>
              </details>

              <details class="faq-box">
                <summary class="faq-header">
                  Suspendisse volutpat nunc vestibulum?
                </summary>
                <div class="faq-content">
                  <p>
                    Sed accumsan nulla ut dui hendrerit, et cursus risus
                    placerat. Praesent accumsan lectus vitae suscipit
                    condimentum.
                  </p>
                </div>
              </details>

              <details class="faq-box">
                <summary class="faq-header">
                  Mauris ultrices aliquam lacinia?
                </summary>
                <div class="faq-content">
                  <p>
                    Integer tristique augue diam, eget ultrices nisi vehicula a.
                    Curabitur vulputate arcu nec orci laoreet iaculis.
                  </p>
                </div>
              </details>
              <details class="faq-box" open>
                <summary class="faq-header">
                  Sed accumsan nulla ut dui hendrerit?
                </summary>
                <div class="faq-content">
                  <p>
                    Nullam quis justo in lectus consequat facilisis ac et nibh.
                    Fusce faucibus augue id nibh vestibulum nec.
                  </p>
                </div>
              </details>

              <details class="faq-box">
                <summary class="faq-header">
                  Suspendisse volutpat nunc vestibulum?
                </summary>
                <div class="faq-content">
                  <p>
                    Sed accumsan nulla ut dui hendrerit, et cursus risus
                    placerat. Praesent accumsan lectus vitae suscipit
                    condimentum.
                  </p>
                </div>
              </details>

              <details class="faq-box">
                <summary class="faq-header">
                  Mauris ultrices aliquam lacinia?
                </summary>
                <div class="faq-content">
                  <p>
                    Integer tristique augue diam, eget ultrices nisi vehicula a.
                    Curabitur vulputate arcu nec orci laoreet iaculis.
                  </p>
                </div>
              </details>
              <details class="faq-box" open>
                <summary class="faq-header">
                  Sed accumsan nulla ut dui hendrerit?
                </summary>
                <div class="faq-content">
                  <p>
                    Nullam quis justo in lectus consequat facilisis ac et nibh.
                    Fusce faucibus augue id nibh vestibulum nec.
                  </p>
                </div>
              </details>

              <details class="faq-box">
                <summary class="faq-header">
                  Suspendisse volutpat nunc vestibulum?
                </summary>
                <div class="faq-content">
                  <p>
                    Sed accumsan nulla ut dui hendrerit, et cursus risus
                    placerat. Praesent accumsan lectus vitae suscipit
                    condimentum.
                  </p>
                </div>
              </details>

              <details class="faq-box">
                <summary class="faq-header">
                  Mauris ultrices aliquam lacinia?
                </summary>
                <div class="faq-content">
                  <p>
                    Integer tristique augue diam, eget ultrices nisi vehicula a.
                    Curabitur vulputate arcu nec orci laoreet iaculis.
                  </p>
                </div>
              </details>
            </div>
          </section>

          <div className=" faq2">
            <Image src={product2} alt="" />
          </div>
        </div>
      </div>
      {/* Faq part end */}
    </div>
  );
};

export default ProductShop2;
