import Image from "next/image";
import laser from "../../../../images/fiber-laser.jpg";
import fiber from "../../../../images/portable-fiber1.jpg";

export default function IntelligentTech3() {
  return (
    <div
      className="container"
      style={{ marginBottom: "150px", marginTop: "150px" }}
    >
      <div className="row gap-5 mb-50">
        <div className="col-lg-5">
          <Image src={laser} alt="" width={300} height={250} />
        </div>
        <div className="col-lg-5">
          <h3>Fiber laser marking machine</h3>
          <p>
            Fiber laser marking machine with so high technology and the main
            advantage of this machine is Long life,could up to 100000 hours, low
            maintenance,after you get the machine, you almost no need to
            maintenance this machine for life, low running cost,the running cost
            is 3 times lower than .
          </p>
        </div>
      </div>

      <div className="row gap-5">
        <div className="col-lg-3">
          <Image src={fiber} alt="" />
          <h6 style={{ color: "#ff9801", marginTop: "30px" }}>
            Standard Portable Fiber Marking And Engraving Machine
          </h6>
          <p>Check it out to see if it fits your needs!</p>
          <li>Model:MT-FP30A</li>
          <li>Size:110*110mm</li>

          <div className="purchase" style={{ marginTop: "20px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={fiber} alt="" />
          <h6 style={{ color: "#ff9801", marginTop: "30px" }}>
            Standard Portable Fiber Marking And Engraving Machine
          </h6>
          <p>Check it out to see if it fits your needs!</p>
          <li>Model:MT-FP30A</li>
          <li>Size:110*110mm</li>
          <div className="purchase" style={{ marginTop: "20px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={fiber} alt="" />
          <h6 style={{ color: "#ff9801", marginTop: "30px" }}>
            Standard Portable Fiber Marking And Engraving Machine
          </h6>
          <p>Check it out to see if it fits your needs!</p>
          <li>Model:MT-FP30A</li>
          <li>Size:110*110mm</li>
          <div className="purchase" style={{ marginTop: "20px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={fiber} alt="" />
          <h6 style={{ color: "#ff9801", marginTop: "30px" }}>
            Standard Portable Fiber Marking And Engraving Machine
          </h6>
          <p>Check it out to see if it fits your needs!</p>
          <li>Model:MT-FP30A</li>
          <li>Size:110*110mm</li>
          <div className="purchase" style={{ marginTop: "20px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={fiber} alt="" />
          <h6 style={{ color: "#ff9801", marginTop: "30px" }}>
            Standard Portable Fiber Marking And Engraving Machine
          </h6>
          <p>Check it out to see if it fits your needs!</p>
          <li>Model:MT-FP30A</li>
          <li>Size:110*110mm</li>
          <div className="purchase" style={{ marginTop: "20px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <Image src={fiber} alt="" />
          <h6 style={{ color: "#ff9801", marginTop: "30px" }}>
            Standard Portable Fiber Marking And Engraving Machine
          </h6>
          <p>Check it out to see if it fits your needs!</p>
          <li>Model:MT-FP30A</li>
          <li>Size:110*110mm</li>
          <div className="purchase" style={{ marginTop: "20px" }}>
            <a className="butn butn-md butn-bord radius-30">
              <span>LEARN MORE </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
