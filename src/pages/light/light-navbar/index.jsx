import { isLoggedIn } from "@/components/services/auth.service";
import { useGetAllCartQuery } from "@/features/cart/cart";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function LightNavbar({ lightMode, alwaysDark, darkOnScroll }) {
  const router = useRouter();

  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const { data, isLoading, isError, error } = useGetAllCartQuery(userId);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (isError) {
      // Handle error, you can log it or display an error message.
      console.error("Error fetching cart data:", error);
    } else if (!isLoading) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data && data.data) {
        setCart(data.data);
      }
    }
  }, [data, isLoading, isError, error]);
  const userLoggedIn = isLoggedIn();
  const handleLogout = () => {
    removeUserInfo(authKey);
    location.replace("/dark/login");
  };
  useEffect(() => {
    if (darkOnScroll) {
      let nav = document.querySelector("#navi");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          nav.className = "topnav dark change nav-scroll";
          nav.querySelector("img").src = "/dark/assets/imgs/logo-dark.png";
        } else {
          nav.className = "topnav";
          nav.querySelector("img").src = "/dark/assets/imgs/logo-light.png";
        }
      });
    }
  }, [darkOnScroll]);

  function toggleMenu(event) {
    let menu = document.querySelector(".hamenu");
    let nav = document.querySelector("#navi");

    if (event.currentTarget.classList.contains("open")) {
      event.currentTarget.classList.remove("open");
      menu?.classList.remove("open");
      menu.style.left = `-100%`;
      if (lightMode && !alwaysDark) {
        nav.classList.remove("navlit");
        nav.querySelector("img").src = "/dark/assets/imgs/logo-light.png";
      }
    } else {
      event.currentTarget.classList.add("open");
      menu?.classList.add("open");
      menu.style.left = 0;
      if (lightMode && !alwaysDark) {
        nav.classList.add("navlit");
        nav.querySelector("img").src = "/dark/assets/imgs/logo-dark.png";
      }
    }
  }

  function handleMouseEnter(event) {
    document.querySelectorAll("ul.main-menu li").forEach((item) => {
      item.classList.add("hoverd");
    });
    event.currentTarget.classList.remove("hoverd");
  }

  function handleMouseLeave() {
    document
      .querySelectorAll("ul.main-menu li")
      .forEach((item) => item.classList.remove("hoverd"));
  }

  function toggleSubMenu(event) {
    const subMenu = event.currentTarget.querySelector(".sub-menu");
    if (subMenu) {
      if (subMenu.classList.contains("sub-open")) {
        document.querySelectorAll(".sub-menu").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        subMenu.classList.remove("sub-open");
        subMenu.style.maxHeight = "0";
        subMenu.previousElementSibling.children[0].classList.remove("dopen");
      } else if (!subMenu.classList.contains("sub-open")) {
        document.querySelectorAll(".sub-menu").forEach((item) => {
          item.classList.remove("sub-open");
          item.style.maxHeight = "0";
          item.previousElementSibling.children[0].classList.remove("dopen");
        });
        subMenu.classList.add("sub-open");
        subMenu.style.maxHeight = "400px";
        subMenu.previousElementSibling.children[0].classList.add("dopen");
      }
    }
  }
  return (
    <div className="hamenu">
      <div className="container">
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-lg-2">
            <div className="menu-text" style={{ marginTop: "65px" }}>
              <div className="text">
                <h2>Menu</h2>
              </div>
            </div>
            <div id="navi" className={`topnav ${alwaysDark && "navlit"}`}>
              <div className="container">
                <div className="logo icon-img-120">
                  <Link href="/light/home-creative-agency/">
                    <img src="/dark/assets/imgs/logo-dark.png" alt="" />
                  </Link>
                </div>

                {cart.length && userLoggedIn > 0 && (
                  <div className="addtocart">
                    <Link href="/light/shop-cart" className="icon ml-30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.8em"
                        viewBox="0 0 576 512"
                        fill="black"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c-2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                      </svg>
                    </Link>
                    <p className=" notification">{cart?.length}</p>
                  </div>
                )}
                <div
                  className="cursor-pointer menu-icon text-dark mobile_navbar mr-10"
                  onClick={toggleMenu}
                >
                  <span className="icon">
                    {/* <i></i>
                    <i></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                  </span>
                  <span className="text">
                    <span className="word">Menu</span>
                  </span>
                </div>

                <div className="ml-50 ">
                  <Link
                    href="/dark/home-creative-agency/"
                    className="classic butn butn-md butn-bord radius-30"
                    style={{ marginTop: "-5px" }}
                  >
                    <span className="word">Dark Mode</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-2">Classic Mode</div> */}
          <div className="col-lg-5">
            <div className="menu-links">
              <ul className="main-menu rest">
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/light/home-creative-agency/" className="link">
                      <span className="fill-text" data-text="Home">
                        Home
                      </span>
                    </Link>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/light/page-abouts/" className="link">
                      <span className="fill-text" data-text="Who We Are">
                        Who We Are
                      </span>
                    </Link>
                  </div>
                </li>

                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleSubMenu}
                >
                  <div className="o-hidden">
                    <div className="cursor-pointer link dmenu">
                      <Link href="/light/page-product/" className="">
                        <span
                          className="fill-text "
                          data-text="Product Solution"
                        >
                          Product Solution
                        </span>
                      </Link>
                      <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li className="text-black">
                        <Link
                          href="/light/page-product-category1/"
                          className="sub-link "
                        >
                          Dynamic Digital Products
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link
                          href="/light/page-product-category2/"
                          className="sub-link"
                        >
                          Intelligent TECH Products
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link
                          href="/light/page-product-category3/"
                          className="sub-link"
                        >
                          INTERACTIVE WOW PRODUCTION
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleSubMenu}
                >
                  <div className="o-hidden">
                    <div className="cursor-pointer link dmenu">
                      <Link href="/light/page-services/" className="">
                        <span className="fill-text" data-text="Service">
                          Service
                        </span>
                      </Link>
                      <i></i>
                    </div>
                  </div>
                  <div className="sub-menu">
                    <ul>
                      <li className="text-black">
                        <Link href="/light/page-service1/" className="sub-link">
                          WEBSITE DEVELOPMENT
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link href="/light/page-service2/" className="sub-link">
                          WEB APPLICATION
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link href="/light/page-service3/" className="sub-link">
                          MOBILE APPS DEVELOPMENT
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link href="/light/page-service4/" className="sub-link">
                          DIGITAL MARKETING & SEO
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link href="/light/page-service5/" className="sub-link">
                          GRAPHICS DESIGN & PRINTING
                        </Link>
                      </li>
                      <li className="text-black">
                        <Link href="/light/page-service6/" className="sub-link">
                          VIDEO & ANIMATION
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link
                      href="/light/showcase-interactive-center-horizontal/"
                      className="link"
                    >
                      <span className="fill-text" data-text="Software">
                        Software
                      </span>
                    </Link>
                  </div>
                </li>

                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/light/login/" className="link">
                      <span className="fill-text" data-text="Login">
                        Login
                      </span>
                    </Link>
                  </div>
                </li>

                <li
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="o-hidden">
                    <Link href="/dark/home-creative-agency/" className="link">
                      <span
                        className="fill-text classic_btn"
                        data-text="Classic Mode"
                      >
                        Dark Mode
                      </span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 d-flex align-items-end">
            <div className="cont-info full-width">
              <div className="item">
                <h5 className="mb-15">Get In Touch</h5>
                <p>541 Melville Geek, Palo Alto, CA 94301</p>
                <p className="mt-5 mb-5 underline main-color">
                  <a href="#0">+1 840 841 25 69</a>
                </p>
                <p>
                  <a href="#0">GeekFolio_website@gmail.com</a>
                </p>
              </div>
              <div className="search-form">
                <div className="form-group">
                  <input type="text" name="search" placeholder="Search" />
                  <button>
                    <span className="pe-7s-search"></span>
                  </button>
                </div>
              </div>
              <ul className="rest social-text d-flex mt-50 fz-13">
                <li className="mr-20">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Facebook</span>
                  </a>
                </li>
                <li className="mr-20">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Twitter</span>
                  </a>
                </li>
                <li className="mr-20">
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="#0" className="hover-this">
                    <span className="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LightNavbar;
