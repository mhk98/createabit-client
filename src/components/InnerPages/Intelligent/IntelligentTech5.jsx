import Image from "next/image";
import Link from "next/link";
import product1 from "../../../../images/LCD-VIDEO-WALL-47 (1).jpg";
import card1 from "../../../../images/USB_cards_1.jpg";
import product2 from "../../../../images/Wall-Mount-Models.jpg";
import cards from "../../../../images/cards_thumb.jpg";
import card2 from "../../../../images/flashbay-trusted-1.jpg";

import product3 from "../../../../images/42-inch-lcd-digital-signage.jpg";
import product5 from "../../../../images/Mirror-advertising-player.jpg";
import product6 from "../../../../images/Touch-Screen-Kiosk2.jpg";
import product4 from "../../../../images/Touch-table3.jpg";

export default function IntelligentTech5() {
  return (
    <div className="container">
      <div
        className="business_gift"
        style={{ position: "relative", marginTop: "100px" }}
      >
        <h1
          style={{
            position: "absolute",
            textAlign: "center",
            left: "5%",
            right: "5%",
            top: "40%",
          }}
        >
          Business Gift and custom product
        </h1>
      </div>

      <div>
        <h6 style={{ marginBottom: "80px" }}>
          Who doesn’t like to get gifts? Gifts are something that everyone likes
          to get. A smart business man never will never miss out a chance to
          advertise his business. Yes, gifts can also be a way of advertising
          about your business. As a smart businessman you can do both make your
          customer by giving a gift and advertise within it just by giving away
          less costly stuffs like flash drive, Pen, mug, Bag, Shirt, T-Shirt,
          Calendar or any other accessories and don’t forget to print Your
          company’s name on it. So, if you are worried about this then we here
          to help you out this too. Call us and know why we are one of the best
          custom product makers and business gifts makers.
        </h6>

        <Image className="USB_image1" src={cards} alt=""></Image>
        <h5 style={{ textAlign: "center" }}>USB</h5>
      </div>

      <div className="USB_content">
        <div>
          <Image className="USB_image" src={card1} alt="" />
          <h5 style={{ textAlign: "center" }}>USB</h5>
        </div>
        <div>
          <Image className="USB_image" src={card2} alt="" />
          <h5 style={{ textAlign: "center" }}>USB</h5>
        </div>
      </div>

      <div className="container usb_card">
        <div>
          <Image src={product1} alt="" />
          <h4>Lcd Wall Video</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="mt-4 purchase">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div>
          <Image src={product2} alt="" />
          <h4>Wall Mount display</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="mt-4 purchase">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div>
          <Image src={product3} alt="" />
          <h4>Stand Alone Signage</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="mt-4 purchase">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div>
          <Image src={product4} alt="" />
          <h4>Touch Table</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="mt-4 purchase">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div>
          <Image src={product5} alt="" />
          <h4>OutDoor Digital Synage</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="mt-4 purchase">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
        <div>
          <Image src={product6} alt="" />
          <h4>Multimedia Kiosk</h4>
          <p>
            Traffic control centers, financial institutions, public security and
            judicial organs, exhibitions, business office buildings,
            recreational places, hydraulic monitoring stations, power plant
            monitoring stations, etc.
          </p>
          {/* <Link className="btn" href="/light/home-creative-agency/">
            <span className="rolling-text">Classic Mode</span>
          </Link> */}
          <div className="mt-4 purchase">
            <Link
              href="/light/home-creative-agency/"
              className="butn butn-md butn-bord radius-30"
            >
              <span>Learn more</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
