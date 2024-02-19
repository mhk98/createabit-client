import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import instrument from "../../../../images/each-part-graphic.jpg";
import laptop from "../../../../images/laptop.png";
import tab from "../../../../images/tab.jpg";
import testimonial from "../../../../images/testimonial.png";
import icon from "../../../../images/websiteboxes-new-Bluegrey-retail.png";
const ProductShop3 = () => {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          textAlign: "left",
          alignItems: "center",
          display: "block",
          alignContent: "center",
          // padding: "0 200px",
          marginTop: "100px",
          marginBottom: "80px",
        }}
      >
        <h2>Finally, a POS System That Fits Your Business</h2>
        <p>
          Your search for the perfect POS system is over. POS Nation recognizes
          that retail store, restaurant, and specialty store owners need a point
          of sale specifically tailored to their unique businesses. That’s why
          we sell more than POS systems – we sell complete point of sale
          solutions. Give us a call and learn why over 5,000 customers have
          trusted us to provide them the best POS system for their businesses.
        </p>
      </div>

      <div style={{ marginBottom: "80px" }}>
        <div className="row">
          <div className="col-lg-2 col-md-12">
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <Image src={icon} alt="" />
            <p style={{ textAlign: "center" }}>Retail POS</p>
          </div>
        </div>
        <h6 style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="">
            Don't see your industry? Don't worry, we've got you covered. See
            them all here{" "}
            <span>
              <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            </span>
          </a>
        </h6>
      </div>

      <div>
        <h2 style={{ textAlign: "center", marginBottom: "100px" }}>
          Everything You Need to Run a Successful Business
        </h2>

        <div className="product_section">
          <div>
            <div className="justify-between gap-3 d-flex">
              <Image className="tab_img" src={laptop} alt="" style={{}} />
              <div className="product_sub">
                <h6>Customize Your System</h6>
                <p>
                  Choose the POS software, hardware, and peripherals you need to
                  maximize the productivity and profitability of your business.
                </p>
              </div>
            </div>
            <div className="justify-between gap-3 d-flex">
              <Image className="tab_img" src={laptop} alt="" />
              <div className="product_sub">
                <h6>Customize Your System</h6>
                <p>
                  Choose the POS software, hardware, and peripherals you need to
                  maximize the productivity and profitability of your business.
                </p>
              </div>
            </div>
            <div className="justify-between gap-3 d-flex">
              <Image className="tab_img" src={laptop} alt="" />
              <div className="product_sub">
                <h6>Customize Your System</h6>
                <p>
                  Choose the POS software, hardware, and peripherals you need to
                  maximize the productivity and profitability of your business.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              style={{ width: "500px", height: "380px" }}
              src={tab}
              alt=""
            />
          </div>
        </div>
      </div>

      <div>
        <h6
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "50px",
          }}
        >
          <a href="">
            See how our POS software can help your business grow
            <span>
              <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
            </span>
          </a>
        </h6>

        <div className="product_main">
          <div className="product_item1">
            <p>
              “When I called you guys, I said, ‘Look, I want the easiest thing
              to use, that takes up the least amount of space, that looks the
              best’ and you came up with a solution. … Literally plug it in,
              turn on the juice, connect our internet, and we’re in business. …
              I think it’s awesome.”
            </p>
            <p>
              Terry Ickowicz -{" "}
              <a style={{ paddingTop: "40px" }}>
                Doughboy’s Bakery and Café - Los Angeles, CA
              </a>
            </p>
          </div>
          <div className="product_item2">
            <Image style={{ width: "250px" }} src={testimonial} alt="" />
          </div>
        </div>

        <div>
          <div className="product_main1">
            <div className="" style={{ textAlign: "center" }}>
              <p>
                “When I called you guys, I said, ‘Look, I want the easiest thing
                to use, that takes up the least amount of space, that looks the
                best’ and you came up with a solution. … Literally plug it in,
                turn on the juice, connect our internet, and we’re in business.
                … I think it’s awesome.”
              </p>
              <p>
                Terry Ickowicz -{" "}
                <a href="#" style={{ paddingTop: "10px" }}>
                  Doughboy’s Bakery and Café - Los Angeles, CA
                </a>
              </p>
            </div>
            <div className="product_item2">
              <Image
                style={{ maxWidth: "100%", height: "auto" }} // Make the image responsive
                src={testimonial}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          textAlign: "left",
          // width: "900px",
          margin: "auto",
        }}
      >
        <h2>Each Part of the System Plays a Role</h2>
        <h6 style={{ marginBottom: "40px" }}>
          We Combine Hardware, Software, and Services to Provide Turnkey POS
          Solutions
        </h6>
        <Image style={{ marginBottom: "40px" }} src={instrument} alt="" />
        <p
          style={{
            marginBottom: "120px",
            paddingBottom: "80px",
          }}
        >
          Navigating the POS purchasing decision can be daunting, and we’re here
          to help. We offer a variety of point of sale hardware and POS software
          options to meet the unique needs of retail stores and restaurants
          around the world. Our POS systems are supported by our dedicated
          customer service – including 24/7 US-based support, payment
          processing, and even ongoing employee training – to offer our
          customers a complete point of sale solution. We've helped over 5,000
          businesses streamline their operations and increase their efficiency.
          Our Product Specialists act as true consultants to help you customize
          a system to meet your business goals. Recognized by Top Ten Reviews as
          one of the best POS system providers, we have the experience and
          expertise to help you make the right point of sale decision for your
          business. Learn why we're the best POS system provider for you here
        </p>
      </div>
    </div>
  );
};

export default ProductShop3;
