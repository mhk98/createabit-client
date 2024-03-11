import Image from "next/image";
import product6 from "../../../../images/Barrier gate.jpg";
import product7 from "../../../../images/Car Parking System.jpg";
import product3 from "../../../../images/Flap Barrier gate.jpg";
import product4 from "../../../../images/Swing barrier gate.png";
import product1 from "../../../../images/Tripod Turnstile.png";
import product5 from "../../../../images/full height turnstile.jpg";
import product2 from "../../../../images/high speed gate.jpg";

export default function IntelligentTech4() {
  return (
    <div className="container">
      <div className="row gap-50 mb-3" style={{ margin: "120px 0px" }}>
        <div className="col-lg-6">
          <h5>Tripod Turnstile</h5>
          <p>
            Our web application development department is equipped with the
            state-of-the-art equipment and a highly-trained team of development
            that generates outstanding ideas for our client’s project. They work
            closely with you to generate optimal outcomes for your application/
            software concerns. We complete your project within the given
            deadline.
          </p>
          <div className="purchase" style={{ marginTop: "10px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <Image className="cart_parking_image" src={product1} alt="" />
        </div>
      </div>
      <div className="cart_parking">
        <div>
          <Image className="cart_parking_image" src={product2} alt="" />
        </div>

        <div>
          <h5>Flap Barrier gate</h5>
          <p>
            We specialize in design and development for mobile apps and
            websites. We design websites and mobile apps that are further
            facilitated with a high-performance rate. Our team of developers and
            designers at Createabit Design are acquainted with the creation and
            development of iOS and Android apps that are user-specific and
            mobile-friendly-specific.
          </p>
          <div className="purchase" style={{ marginTop: "10px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
      </div>

      <div className="cart_parking">
        <div>
          <h5>Flap Barrier gate</h5>
          <p>
            Our web application development department is equipped with the
            state-of-the-art equipment and a highly-trained team of development
            that generates outstanding ideas for our client’s project. They work
            closely with you to generate optimal outcomes for your application/
            software concerns. We complete your project within the given
            deadline.
          </p>
          <div className="purchase" style={{ marginTop: "10px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div>
          <Image className="cart_parking_image" src={product3} alt="" />
        </div>
      </div>

      <div className="cart_parking">
        <div>
          <Image className="cart_parking_image" src={product4} alt="" />
        </div>

        <div>
          <h5>Swing barrier gate</h5>
          <p>
            We specialize in design and development for mobile apps and
            websites. We design websites and mobile apps that are further
            facilitated with a high-performance rate. Our team of developers and
            designers at Createabit Design are acquainted with the creation and
            development of iOS and Android apps that are user-specific and
            mobile-friendly-specific.
          </p>
          <div className="purchase" style={{ marginTop: "10px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
      </div>

      <div className="cart_parking">
        <div>
          <h5>Full Height Turnstile</h5>
          <p>
            Our web application development department is equipped with the
            state-of-the-art equipment and a highly-trained team of development
            that generates outstanding ideas for our client’s project. They work
            closely with you to generate optimal outcomes for your application/
            software concerns. We complete your project within the given
            deadline.
          </p>
          <div className="purchase" style={{ marginTop: "10px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div>
          <Image className="cart_parking_image" src={product5} alt="" />
        </div>
      </div>
      <div className="cart_parking">
        <div>
          <Image className="cart_parking_image" src={product6} alt="" />
        </div>

        <div>
          <h5>Barrier gate</h5>
          <p>
            We specialize in design and development for mobile apps and
            websites. We design websites and mobile apps that are further
            facilitated with a high-performance rate. Our team of developers and
            designers at Createabit Design are acquainted with the creation and
            development of iOS and Android apps that are user-specific and
            mobile-friendly-specific.
          </p>
          <div className="purchase" style={{ marginTop: "10px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
      </div>
      <div className="cart_parking">
        <div>
          <h5>Car Parking System</h5>
          <p>
            Our web application development department is equipped with the
            state-of-the-art equipment and a highly-trained team of development
            that generates outstanding ideas for our client’s project. They work
            closely with you to generate optimal outcomes for your application/
            software concerns. We complete your project within the given
            deadline.
          </p>
          <div className="purchase" style={{ marginTop: "10px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div>
          <Image className="cart_parking_image" src={product7} alt="" />
        </div>
      </div>
    </div>
  );
}
