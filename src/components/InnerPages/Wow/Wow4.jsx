import Image from "next/image";
import Link from "next/link";
import app1 from "../../../../images/app1.jpg";
import app2 from "../../../../images/app2.jpg";
import app3 from "../../../../images/app3.jpg";
import app4 from "../../../../images/app4.jpg";

import pro1 from "../../../../images/pro1.jpg";
export default function Wow4() {
  return (
    <div className="container mt-100">
      <div>
        <h3>Multi Touch Wall Projection System</h3>
        <p>
          Interactive projection system can be projected on the normal floor,
          wall or window with any desired effect. It will show attractive
          effects by detecting people's actions on the projection screen. We
          provide professional service, tailored to your effects. We can even
          supply multiple display technology to make two or three projection
          sizes look like one projection image without any light gaps.
        </p>
      </div>

      <div className="wow1_content" style={{ margin: "120px 0px" }}>
        <div style={{ padding: "30px" }}>
          <h3>Advantage:</h3>
          <p>Exciting to play and watch</p>
          <p> Move your body to play it’s magic!</p>
          <p>Easy and safe to use - It’s a complete virtual experience</p>
          <p>Large number of effects available</p>
          <p>Customer will never get bored</p>
          <p>Customizable to your needs</p>
          <p>Brand it, personalize it, build and design your own effects</p>
        </div>
        <Image className="wow1_image" src={pro1} alt="" />
      </div>

      <div>
        <h3>Applications:</h3>
        <p>
          Convention, centers, Retail, spaces, Airports, Exhibition spaces,
          Commercial locations, Entertainment space, Advertisement, Event, etc.
        </p>
        <section
          className="portfolio clasic section-padding mt-60"
          data-scroll-index="3"
        >
          <div className="container">
            <div className="sec-lg-head mb-50">
              <div className="row">
                <div className="col-lg-7">
                  <div className="position-re">
                    <h6 className="mb-10 dot-titl-non">Product</h6>
                    <h2 className="fz-50">Feature Products</h2>
                  </div>
                </div>
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="justify-end full-width d-flex justify-content-end">
                    <div className="vew-all">
                      <Link href="/dark/portfolio-classic-grid">
                        View All Works
                        <p>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="item mt-30">
                  <div className="img">
                    <Image src={app1} alt="" className="radius-10" />
                    <Link href="/dark/project-details1" className="tag">
                      <span>Wow Product</span>
                    </Link>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">
                        <Link href="/dark/project-details1">
                          Interactive WoW Production
                        </Link>
                      </h6>
                    </div>
                    <div className="ml-auto">
                      {/* <p className="fz-14">© {item.date}</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item mt-30">
                  <div className="img">
                    <Image src={app2} alt="" className="radius-10" />
                    <Link href="/dark/project-details1" className="tag">
                      <span>Wow Product</span>
                    </Link>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">
                        <Link href="/dark/project-details1">
                          Interactive WoW Production
                        </Link>
                      </h6>
                    </div>
                    <div className="ml-auto">
                      {/* <p className="fz-14">© {item.date}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="item mt-30">
                  <div className="img">
                    <Image src={app3} alt="" className="radius-10" />
                    <Link href="/dark/project-details1" className="tag">
                      <span>Wow Product</span>
                    </Link>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">
                        <Link href="/dark/project-details1">
                          Interactive WoW Production
                        </Link>
                      </h6>
                    </div>
                    <div className="ml-auto">
                      {/* <p className="fz-14">© {item.date}</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item mt-30">
                  <div className="img">
                    <Image src={app4} alt="" className="radius-10" />
                    <Link href="/dark/project-details1" className="tag">
                      <span>Wow Product</span>
                    </Link>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">
                        <Link href="/dark/project-details1">
                          Interactive WoW Production
                        </Link>
                      </h6>
                    </div>
                    <div className="ml-auto">
                      {/* <p className="fz-14">© {item.date}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="item mt-30">
                  <div className="img">
                    <Image src={app2} alt="" className="radius-10" />
                    <Link href="/dark/project-details1" className="tag">
                      <p>Wow Product</p>
                    </Link>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">
                        <Link href="/dark/project-details1" className="tag">
                          <span>Wow Product</span>
                        </Link>
                      </h6>
                    </div>
                    <div className="ml-auto">
                      {/* <p className="fz-14">© {item.date}</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="item mt-30">
                  <div className="img">
                    <Image src={app4} alt="" className="radius-10" />
                    <Link href="/dark/project-details1" className="tag">
                      <p>Wow Product</p>
                    </Link>
                  </div>
                  <div className="cont mt-30 d-flex">
                    <div>
                      <h6 className="line-height-1">
                        <Link href="/dark/project-details1">
                          Interactive WoW Production
                        </Link>
                      </h6>
                    </div>
                    <div className="ml-auto">
                      {/* <p className="fz-14">© {item.date}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="e801-52 x-container">
        <div className="e801-53 x-column x-sm x-1-1">
          <div className="e801-54 x-text x-text-headline">
            <div className="x-text-content">
              <div className="x-text-content-text">
                <h1
                  className="x-text-content-text-primary"
                  style={{ textAlign: "left" }}
                >
                  Technical Specs:
                </h1>
              </div>
            </div>
          </div>
          <div className="e801-55 x-text">
            <table
              className="ke-zeroborder"
              align="center"
              style={{ borderCollapse: "separate", borderSpacing: "10px" }}
            >
              <tbody>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Detection method:</h6>
                  </td>
                  <td className="py-2">
                    <h6>Proprietary motion sensor.</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Interaction Modes:</h6>
                  </td>
                  <td className="py-2">
                    <h6>
                      Single Person Interaction Mode and Multi People
                      interaction mode
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Display Support:</h6>
                  </td>
                  <td className="py-2">
                    <h6>
                      Supports all Projectors, LCD Screens, Windows, Glass, Film
                    </h6>
                  </td>
                </tr>

                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Detection Algorithms:</h6>
                  </td>
                  <td className="py-2">
                    <h6>Hand/Head precision tracking, Full body tracking</h6>
                  </td>
                </tr>

                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Sensor Cable:</h6>
                  </td>
                  <td className="py-2">
                    <h6>
                      10M standard length. Special length up to 80M available on
                      request.
                    </h6>
                  </td>
                </tr>

                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">SDK Interface:</h6>
                  </td>
                  <td className="py-2">
                    <h6>
                      C/C++, .NET, Java, OpenGL, Direct3d, Unity3D, Flash Action
                      Script.
                    </h6>
                  </td>
                </tr>

                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Operating System:</h6>
                  </td>
                  <td className="py-2">
                    <h6>Windows 7 32bit/64bit</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold"></h6>
                  </td>
                  <td className="py-2">
                    <h6>
                      CPU: Intel Pentium D 925 with 2MB Level 2 Cache or better;
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold"></h6>
                  </td>
                  <td className="py-2">
                    <h6>Memory: 1GB RAM or more;</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold"></h6>
                  </td>
                  <td className="py-2">
                    <h6>Hard disk: 40GB free hard disk space or more;</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Recommended PC:</h6>
                  </td>
                  <td className="py-2">
                    <h6>
                      Graphic card: Independent graphic card with NVIDIA GeForce
                      8600GT or better;
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold"></h6>
                  </td>
                  <td className="py-2">
                    <h6>2 USB Ports or more;</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold"></h6>
                  </td>
                  <td className="py-2">
                    <h6>Windows 7/XP;</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Power-supply:</h6>
                  </td>
                  <td className="py-2">
                    <h6>220 V & 110 V;</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Sensor Positioning:</h6>
                  </td>
                  <td className="py-2">
                    <h6>
                      A minimum of 2m and a maximum of 6m from detection area.
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Response time:</h6>
                  </td>
                  <td className="py-2">
                    <h6>
                      15 milliseconds for light correction and interaction
                      Calibration Drift: No drift.
                    </h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Display System Resolution:</h6>
                  </td>
                  <td className="py-2">
                    <h6>Supports up to 8 Screens blending.</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Operating Temperature:</h6>
                  </td>
                  <td className="py-2">
                    <h6> 0 to + 40° C</h6>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">
                    <h6 className="font-bold">Humidity:</h6>
                  </td>
                  <td className="py-2">
                    <h6>10% to 90% non-condensing</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
