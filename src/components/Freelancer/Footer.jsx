//= Data
import data from "@/data/app-data.json";
import Link from "next/link";

function Footer({ lightMode }) {
  return (
    <div>
      <footer className="sub-bg bord-thin-top">
        <div className="sub-footer pt-40 pb-40 ">
          <div className="container">
            <div className="row pb-60">
              <div className="col-lg-4">
                <ul className="rest social-text ">
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Team
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Client
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="rest social-text ">
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Team
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Client
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="rest social-text ">
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Team
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Client
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lightMode ? "light" : "dark"}/page-team`}>
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="logo">
                  <a href="#0">
                    <img
                      src={`/dark/assets/imgs/logo-${
                        lightMode ? "dark" : "light"
                      }.png`}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">
                      © 2023 Geekfolio is Proudly Powered by{" "}
                      <span className="underline">
                        {" "}
                        <a href={data.author_link}>{data.author}</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
