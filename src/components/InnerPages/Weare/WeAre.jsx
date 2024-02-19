import Image from "next/image";
import React from "react";
import aboutus from "../../../../images/Wall-Mount-Models-1.jpg";
import Link from "next/link";

function WeAre(props) {
  return (
    <div className="container">
      <div
        className="row "
        style={{
          marginBottom: "100px",
        }}
      >
        <div className="col-lg-6">
          <Image src={aboutus} alt="" style={{ width: "500px" }} />
        </div>
        <div className="col-lg-4" style={{ width: "500px" }}>
          <h4>Who We Are</h4>
          <p className="mt-8" style={{ fontSize: "20px" }}>
            CreateAbit designs is a renowned name in the digital world. We are a
            reputed marketing and branding agency based in Washington DC metro
            area. Our extensive history, rich experience, and excellent track
            record make us a more reliable choice when it comes to designing and
            marketing services.
          </p>

          <div className="purchase" style={{ marginTop: "20px" }}>
            <Link
              href="/dark/page-about/"
              className="butn butn-md butn-bord radius-30"
            >
              <span className="fs-6">Let's Go </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeAre;
