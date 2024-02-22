//= Data

import { useCreateCartMutation } from "@/features/cart/cart";
import {
  useGetProductsQuery,
  useSingleCategoryQuery,
} from "@/features/product/products";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

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

  return (
    <div className="row">
      <div className="col-lg-3">
        <div className="sidebar md-mb80">
          <div className="item search mb-40">
            <form action="contact.php">
              <div className="form-group">
                <input type="text" name="shop_search" placeholder="Search" />
                <button type="submit">
                  <span className="pe-7s-search"></span>
                </button>
              </div>
            </form>
          </div>

          <div className="item categories mb-40">
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

          <div className="item price-range mb-40">
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

          <div className="item best-sale mb-40">
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
          </div>

          <div className="item tags">
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
          </div>
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
                          src={`http://localhost:5000/${item.Image}`}
                          alt=""
                          width={300}
                          height={200}
                        />
                        <button
                          onClick={() => addToCart(item, userId)}
                          className="text-white add-cart"
                        >
                          Add to Cart
                        </button>
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
                          src={`http://localhost:5000/${item.Image}`}
                          alt=""
                          width={300}
                          height={200}
                        />
                        <button
                          onClick={() => addToCart(item, userId)}
                          className="text-white add-cart"
                        >
                          Add to Cart
                        </button>
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
