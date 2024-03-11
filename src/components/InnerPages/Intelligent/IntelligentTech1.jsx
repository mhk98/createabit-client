import Image from "next/image";
import banner1 from "../../../../images/company-overview-banner-1.jpg";
import banner2 from "../../../../images/meijiajiv9.jpg";

export default function IntelligentTech1() {
  return (
    <div>
      <h4
        style={{
          textAlign: "center",
          margin: "160px 0px",
        }}
      >
        INAIL™ Intelligent nail painting equipment
      </h4>
      <div className="intelligenttech1">
        <div>
          <Image
            style={{ width: "200px", height: "200px" }}
            src={banner1}
            alt=""
          />
        </div>
        <div>
          <Image
            style={{ width: "200px", height: "200px" }}
            src={banner2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
