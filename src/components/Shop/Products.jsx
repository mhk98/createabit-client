//= Data

import {
  useCreateCartMutation,
  useGetAllCartQuery,
} from "@/features/cart/cart";
import {
  useGetProductsQuery,
  useSingleCategoryQuery,
} from "@/features/product/products";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { isLoggedIn, storgeUserInfo } from "../services/auth.service";

function Products() {
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  function handlePriceInput(e) {
    const priceInput = e.currentTarget;
    const priceGap = 1000;
    const minPrice = parseInt(priceInput[0].value);
    const maxPrice = parseInt(priceInput[1].value);
    const rangeInput = document.querySelectorAll(".range-input input");
    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.currentTarget.className === "input-min") {
        rangeInput[0].value = minPrice;
      } else {
        rangeInput[1].value = maxPrice;
      }
    }
  }

  function handleRangeInput(e) {
    const rangeInput = document.querySelectorAll(".range-input input");
    const priceInput = document.querySelectorAll(".price-input input");
    const range = document.querySelector(".slider-range .progress");
    const priceGap = 1000;

    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.currentTarget.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  }

  const router = useRouter();
  function openList(e) {
    e.stopPropagation();
    const options = document.querySelector(".select-options");
    if (options.style.display === "none") options.style.display = "block";
    else options.style.display = "none";
    document.querySelector(".select-styled").classList.toggle("active");
  }

  function handleItemClick(e) {
    e.stopPropagation();
    document.querySelector(".select-styled").classList.remove("active");
    document.querySelector(".select-styled").innerHTML =
      e.currentTarget.innerHTML;
    document.querySelector("select").value =
      e.currentTarget.getAttribute("rel");
    document.querySelector(".select-options").style.display = "none";
  }

  const { data, isLoading, isError, error } = useGetProductsQuery();

  const products = data?.data;

  // console.log("products", products);

  const { data2, isLoading2, isError2, error2 } = useGetAllCartQuery(userId);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (isError2) {
      // Handle error, you can log it or display an error message.
      console.error2("Error fetching cart data:", error2);
    } else if (!isLoading2) {
      // Only set the cart if there is data and it's not already set to avoid infinite re-renders.
      if (data2 && data2.data) {
        setCart(data2.data);
      }
    }
  }, [data2, isLoading2, isError2, error2]);

  const [createCart] = useCreateCartMutation();

  const addToCart = (product, Id) => {
    if (cart.some((item) => item.Product_Id === product.Product_Id)) {
      alert("This product is already in the cart.");
    } else {
      // Create a new cart with the added product
      const updatedCart = [...cart, product];

      setCart(updatedCart);
      const data = {
        title: product.title,
        price: product.price,
        Image: product.Image,
        usertblUserID: Id,
      };
      console.log("cart data here", product);
      createCart(data);
      // Save the updated cart data to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Show a success toast message to indicate that the product has been added
      toast.success("Product added to the cart");
    }
  };

  const [selectCategory, setSelectCategory] = useState(null);

  const handleCategoryClick = async (category) => {
    setSelectCategory(category);
  };

  const {
    data: data1,
    isLoading: isLoading1,
    error: error1,
  } = useSingleCategoryQuery(selectCategory);

  console.log("data1", data1);

  const userLoggedIn = isLoggedIn();

  // const handleAlertCheckout = () => {
  //   const confirmed = window.confirm(
  //     "Please login first. Do you want to go to the login page?"
  //   );

  //   if (confirmed) {
  //     router.push("/dark/login");
  //   }
  // };

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    // Add your logic here for adding the product to the cart
    // For demonstration, I'll just show the popup
    setShowPopup(true);
  };

  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log("formData", formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://createabit-backend.onrender.com/api/v1/user/login",
        // "https://createabit-backend.onrender.com/api/v1/user/login",
        formData
      );

      if (response.data.data.accessToken) {
        toast.success("Successfully Logged In");
        localStorage.setItem("userId", response.data.data.user.User_ID);
        router.push("/");
      }
      storgeUserInfo({ accessToken: response.data.data.accessToken });
    } catch (error) {
      console.error("Error:", error);
      // Handle the error, e.g., show an error message to the user.
    }
  };
  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="sidebar md-mb80">
          <div className="mb-40 item search">
            <form action="contact.php">
              <div className="form-group">
                <input type="text" name="shop_search" placeholder="Search" />
                <button type="submit">
                  <span className="pe-7s-search"></span>
                </button>
              </div>
            </form>
          </div>

          <div className="mb-40 item categories">
            <div className="title">
              <h6>Categories</h6>
            </div>
            <div className="dot-list">
              <ul className="rest">
                <li>
                  <a onClick={() => handleCategoryClick("Technology")}>
                    Technology
                  </a>
                </li>
                <li>
                  <a onClick={() => handleCategoryClick("Accessories")}>
                    Accessories
                  </a>
                </li>
                <li>
                  <a onClick={() => handleCategoryClick("Furniture")}>
                    Furniture
                  </a>
                </li>
                <li>
                  <a onClick={() => handleCategoryClick("Clothes")}>Clothes</a>
                </li>
                <li>
                  <a onClick={() => handleCategoryClick("Jewellery")}>
                    Jewellery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-40 item price-range">
            <div className="title">
              <h6>Filter by Price</h6>
            </div>
            <div className="wrapper">
              <div className="slider-range">
                <div className="progress"></div>
              </div>
              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min="10"
                  max="10000"
                  defaultValue="10"
                  step="100"
                  onInput={handleRangeInput}
                />
                <input
                  type="range"
                  className="range-max"
                  min="0"
                  max="10000"
                  defaultValue="7500"
                  step="100"
                  onInput={handleRangeInput}
                />
              </div>
              <div className="price-input d-flex align-items-center mt-15">
                <div>
                  <div className="field">
                    <span>$</span>
                    <input
                      type="number"
                      className="input-min"
                      defaultValue="10"
                      onInput={handlePriceInput}
                    />
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="field">
                    <span>$</span>
                    <input
                      type="number"
                      className="input-max"
                      defaultValue="7500"
                      onInput={handlePriceInput}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mb-40 item best-sale">
            <div className="title">
              <h6>Best Sellers</h6>
            </div>

            <div className="line-list d-flex align-items-center">
              <div>
                <div className="img">
                  <img src="/dark/assets/imgs/shop/1.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="cont">
                  <div className="rate">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h6>Men Hooded</h6>
                  <h5>$130.00</h5>
                </div>
              </div>
              <a href="#0" className="over-link"></a>
            </div>
            <div className="line-list d-flex align-items-center">
              <div>
                <div className="img">
                  <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="cont">
                  <div className="rate">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h6>Men Hooded</h6>
                  <h5>$130.00</h5>
                </div>
              </div>
              <a href="#0" className="over-link"></a>
            </div>
            <div className="line-list d-flex align-items-center">
              <div>
                <div className="img">
                  <img src="/dark/assets/imgs/shop/5.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="cont">
                  <div className="rate">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <h6>Men Hooded</h6>
                  <h5>$130.00</h5>
                </div>
              </div>
              <a href="#0" className="over-link"></a>
            </div>
          </div> */}

          {/* <div className="item tags">
            <div className="title">
              <h6>Popular Tags</h6>
            </div>

            <div className="tags-links">
              <a href="#0">Design</a>
              <a href="#0">Development</a>
              <a href="#0">Tech</a>
              <a href="#0">Blog</a>
              <a href="#0">Branding</a>
              <a href="#0">Mobile</a>
              <a href="#0">ThemesCamp</a>
            </div>
          </div> */}
        </div>
      </div>

      <div className="col-lg-9">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data || data1 ? (
          <div className="shop-products">
            <div className="mb-40 top-side d-flex align-items-end">
              <div>
                <h6 className="fz-16 line-height-1">
                  Showing 1–9 of 12 results
                </h6>
              </div>
              <div className="ml-auto">
                <div className="select">
                  <select
                    className="form-control select-hidden"
                    onClick={openList}
                  >
                    <option value="Most Popular">Most Popular</option>
                    <option value="Sort by average rating">
                      Sort by average rating
                    </option>
                    <option value="Price [Lowest to Highest]">
                      Price [Lowest to Highest]
                    </option>
                    <option value="Price [Highest to Lowest]">
                      Price [Highest to Lowest]
                    </option>
                  </select>
                  <div className="select-styled" onClick={openList}>
                    Most Popular
                  </div>
                  <ul className="select-options">
                    <li rel="Most Popular" onClick={handleItemClick}>
                      Most Popular
                    </li>
                    <li rel="Sort by average rating" onClick={handleItemClick}>
                      Sort by average rating
                    </li>
                    <li
                      rel="Price [Lowest to Highest]"
                      onClick={handleItemClick}
                    >
                      Price [Lowest to Highest]
                    </li>
                    <li
                      rel="Price [Highest to Lowest]"
                      onClick={handleItemClick}
                    >
                      Price [Highest to Lowest]
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {selectCategory && data1.status === "Success" ? (
              <div className="row">
                {data1.data?.map((item) => (
                  <div className="col-md-4 col-lg-4" key={item.Product_Id}>
                    <div className="item mb-50">
                      <div className="img">
                        <Image
                          src={`https://createabit-backend.onrender.com/${item.image}`}
                          alt=""
                          width={300}
                          height={200}
                        />
                        {userLoggedIn ? (
                          <button
                            onClick={() => addToCart(item, userId)}
                            className="cart-color add-cart"
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <button
                            onClick={handleAddToCart}
                            className="cart-color add-cart"
                          >
                            Add to Cart
                          </button>
                        )}
                        <span className="fav">
                          <i className="far fa-heart"></i>
                        </span>
                      </div>
                      <div className="cont">
                        <div className="rate">
                          {/* {new Array(item.stars).fill().map((_, i) => (
  <i className="fas fa-star" key={i}></i>
))}
{new Array(5 - item.stars).fill().map((_, i) => (
  <i className="far fa-star" key={i}></i>
))} */}
                        </div>
                        <h6>{item.title}</h6>
                        <h5>${item.price}</h5>
                      </div>
                    </div>

                    <Modal show={showPopup} onHide={() => setShowPopup(false)}>
                      <Modal.Header closeButton>
                        <Modal.Title className="text-dark">
                          Welcome! Please Login to continue.
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form onSubmit={handleSubmit} className="register-form">
                          <div className="form-group">
                            <label className="text-left " htmlFor="email">
                              Email
                            </label>
                            <input
                              className="form-input"
                              type="email"
                              name="Email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-left " htmlFor="password">
                              Password
                            </label>
                            <input
                              className="form-input"
                              type="password"
                              name="Password"
                              id="password"
                              value={formData.Password}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <button
                            type="submit"
                            className="mt-3 butn butn-md butn-bord radius-10"
                          >
                            Login
                          </button>
                        </form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="dark"
                          onClick={() => setShowPopup(false)}
                        >
                          Close
                        </Button>
                        {/* Additional buttons can be added here */}
                      </Modal.Footer>
                    </Modal>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row">
                {products?.map((item) => (
                  <div className="col-md-4 col-lg-4" key={item.Product_Id}>
                    <div className="item mb-50">
                      <div className="img">
                        <Image
                          src={`https://createabit-backend.onrender.com/${item.image}`}
                          alt=""
                          width={300}
                          height={200}
                        />

                        {userLoggedIn ? (
                          <button
                            onClick={() => addToCart(item, userId)}
                            className="cart-color add-cart"
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <button
                            onClick={handleAddToCart}
                            className="cart-color add-cart"
                          >
                            Add to Cart
                          </button>
                        )}
                        <span className="fav">
                          <i className="far fa-heart"></i>
                        </span>
                      </div>
                      <div className="cont">
                        <div className="rate">
                          {/* {new Array(item.stars).fill().map((_, i) => (
  <i className="fas fa-star" key={i}></i>
))}
{new Array(5 - item.stars).fill().map((_, i) => (
  <i className="far fa-star" key={i}></i>
))} */}
                        </div>
                        <h6>{item.title}</h6>
                        <h5>${item.price}</h5>
                      </div>
                    </div>

                    <Modal
                      size="lg"
                      show={showPopup}
                      onHide={() => setShowPopup(false)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title className="mx-auto text-dark">
                          Please Login to continue
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="row">
                          <div className="col-lg-6">
                            <form
                              onSubmit={handleSubmit}
                              className="register-form"
                            >
                              <div className="form-group">
                                <label
                                  className="text-left text-dark"
                                  htmlFor="email"
                                >
                                  Email
                                </label>
                                <input
                                  className="form-input text-dark"
                                  type="email"
                                  name="Email"
                                  id="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  className="text-left text-dark"
                                  htmlFor="password"
                                >
                                  Password
                                </label>
                                <input
                                  className="form-input"
                                  type="password"
                                  name="Password"
                                  id="password"
                                  value={formData.Password}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="mt-3 text-white bg-black butn butn-md butn-bord radius-10"
                                style={{ width: "300px" }}
                              >
                                Login
                              </button>
                            </form>
                            <p className="mt-2 text-center text-black">
                              <span>Don't have account?</span>
                              <span>
                                <Link
                                  href="/dark/register"
                                  className="text-primary"
                                >
                                  Sign Up
                                </Link>
                              </span>
                            </p>
                          </div>
                          <div className="mt-3 col-lg-6">
                            <button
                              type="submit"
                              className="mt-3 text-white align-middle butn butn-md butn-bord radius-10"
                              style={{
                                backgroundColor: "#3B5998",
                                display: "flex",
                                alignItems: "center",
                                width: "300px",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                height={30}
                                width={18}
                                fill="white"
                              >
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                              </svg>
                              <span
                                style={{
                                  fontSize: "25px",
                                  marginLeft: "10px",
                                }}
                              >
                                Facebook
                              </span>
                            </button>
                            <button
                              type="submit"
                              className="mt-3 text-white align-middle butn butn-md butn-bord radius-10"
                              style={{
                                backgroundColor: "#D34836",
                                display: "flex",
                                alignItems: "center",
                                width: "300px",
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 512"
                                height={30}
                                width={45}
                                fill="white"
                              >
                                <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z" />
                              </svg>
                              <span
                                style={{
                                  fontSize: "25px",
                                  marginLeft: "10px",
                                }}
                              >
                                Google
                              </span>
                            </button>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          // variant="dark"
                          className="text-white bg-black border-0"
                          onClick={() => setShowPopup(false)}
                        >
                          Close
                        </Button>
                        {/* Additional buttons can be added here */}
                      </Modal.Footer>
                    </Modal>
                  </div>
                ))}
              </div>
            )}

            {/* <div className="pagination d-flex justify-content-center mt-30">
  <ul className="rest">
    <li className="active">
      <a href="#0">1</a>
    </li>
    <li>
      <a href="#0">2</a>
    </li>
    <li>
      <a href="#0">
        <i className="fas fa-chevron-right"></i>
      </a>
    </li>
  </ul>
</div> */}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Products;
