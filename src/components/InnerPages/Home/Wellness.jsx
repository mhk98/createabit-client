import Image from "next/image";
import kisok from "../../../../images/kisok.png";
import m1 from "../../../../images/m.png";
import m2 from "../../../../images/m2.png";
import m3 from "../../../../images/m3.png";
import m4 from "../../../../images/m4.png";
import m5 from "../../../../images/m5.png";

function Wellness(props) {
  return (
    <div className="container">
      <div style={{ marginBottom: "100px" }}>
        <h2 className="mb-3">Our WELLNESS Products</h2>
        <p className="mb-3" style={{ fontSize: "16px", marginBottom: "50px" }}>
          With more then 7 years experience in kiosks and interactive technology
          systems,CreateAbit now offers a wide rang of COVID WELLNESS products
          for businesses to make their enviroment safer for customers and
          employees. Get your body temperature screening devices and automatic
          hand sanitizer stations from the most trusted source in North America
        </p>
        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-lg-12 col-md-2 col-sm-2">
            <Image src={m1} alt="m" style={{ width: "250px" }} />
            <Image src={m2} alt="m2" style={{ width: "250px" }} />
            <Image src={m3} alt="m3" style={{ width: "250px" }} />
            <Image src={m4} alt="m4" style={{ width: "250px" }} />
            <Image src={m5} alt="m5" style={{ width: "250px" }} />
          </div>
        </div>
      </div>
      <div
        className="justify-between gap-5 row"
        style={{ marginBottom: "100px" }}
      >
        <div className="col-lg-5">
          <h2 className="mb-3">What We Offer</h2>
          <p
            className="mb-3 "
            style={{
              fontSize: "16px",
              marginBottom: "50px",
              fontWeight: "700",
            }}
          >
            With more then 7 years experience in kiosks and interactive
            technology systems,CreateAbit now offers a wide rang of COVID
            WELLNESS products for businesses to make their enviroment safer for
            customers and employees. Get your body temperature screening devices
            and automatic hand sanitizer stations from the most trusted source
            in North America. We offer the full spectrum of services to help
            organizations work better.
          </p>
          <p
            style={{
              fontSize: "16px",
              marginBottom: "50px",
              fontWeight: "700",
            }}
          >
            Everything from creating standards of excellence services for your
            business to work in more effective ways, assessing how you’re doing,
            and helping you perform even better in future. Get your body
            temperature screening devices and automatic hand sanitizer stations
            from the most trusted source in North America. We offer the full
            spectrum of services to help organizations work better. Everything
            from creating standards of excellence services for your business to
            work in more effective ways, assessing how you’re doing.
          </p>
        </div>
        <div className="col-lg-5" style={{ marginBottom: "50px" }}>
          <h2 className="mb-3">Self Ordering Kisok</h2>
          <Image src={kisok} alt="kisok" />
        </div>
      </div>
    </div>
  );
}

export default Wellness;
