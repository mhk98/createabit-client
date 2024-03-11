import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import intelligent from "../../../../images/intelligent.jpg";
import intelligent1 from "../../../../images/intelligent2.jpg";
import intelligent2 from "../../../../images/intelligent3.jpg";
import intelligent3 from "../../../../images/sub02_01_08.jpg";
export default function IntelligentTech2() {
  return (
    <div className="intelligentech2_main">
      <h5>Windowmate</h5>
      <p style={{ marginBottom: "50px" }}>
        we provide the best product for our customers
      </p>
      <div
        className="itelligent2-border"
        style={{ marginBottom: "50px" }}
      ></div>

      <div className="intelligenttech2">
        <div className="intelligent-image">
          <p style={{ color: "black", textAlign: "center" }}>
            Modern architecture
          </p>
          <Image src={intelligent} alt="" />
        </div>
        <div className="intelligent-image">
          <p style={{ color: "black", textAlign: "center" }}>
            Contaminated windows
          </p>
          <Image src={intelligent1} alt="" />
        </div>
        <div className="intelligent-image">
          <p style={{ color: "black", textAlign: "center" }}>
            Cleaning windows
          </p>
          <Image src={intelligent2} alt="" />
        </div>
        <div className="intelligent-image">
          <p style={{ color: "black", textAlign: "center" }}>
            Cleaning windows
          </p>
          <Image src={intelligent2} alt="" />
        </div>
        <div className="intelligent-image">
          <p style={{ color: "black", textAlign: "center" }}>
            Cleaning windows
          </p>
          <Image src={intelligent2} alt="" />
        </div>
        <div className="intelligent-image">
          <p style={{ color: "black", textAlign: "center" }}>
            Cleaning windows
          </p>
          <Image src={intelligent2} alt="" />
        </div>
      </div>

      <div>
        <h5 style={{ marginTop: "50px", marginBottom: "30px" }}>
          Don’t clean window by yourself. ‘windowmate’ will clean your windows
          for you.
        </h5>
        <Image src={intelligent3} alt="" width={"100%"} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ marginTop: "50px" }}>Windowmate</h3>
        <p>
          Autonomous navigation robots attached to both sides of a glass window
          by using permanent magnet.
        </p>

        <div className="intelligenttech-package">
          <div className="intelligenttech-icon">
            <FontAwesomeIcon className="int-icon" icon={faArrowRight} />
            <h5>Safe</h5>
          </div>
          <div className="intelligenttech-icon">
            <FontAwesomeIcon className="int-icon" icon={faArrowRight} />
            <h5>Smart</h5>
          </div>
          <div className="intelligenttech-icon">
            <FontAwesomeIcon className="int-icon" icon={faArrowRight} />
            <h5>Clean</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
