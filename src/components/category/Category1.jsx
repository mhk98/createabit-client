import { useSingleCategory1Query } from "@/features/product/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Category1 = () => {
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

  const { data, isLoading, isError, error } = useSingleCategory1Query();

  const products = data?.data;

  console.log("products", products);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.Product_Id === product.Product_Id)) {
      alert("This product is already in the cart.");
    } else {
      // Create a new cart with the added product
      const updatedCart = [...cart, product];
      setCart(updatedCart);

      // Save the updated cart data to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // Show a success toast message to indicate that the product has been added
      toast.success("Product added to the cart");
    }
  };
  return (
    <div className="row">
      {products?.map((item) => (
        <div className="col-md-6 col-lg-4" key={item.Product_Id}>
          <div className="item mb-50">
            <div className="img">
              <Image
                src={`https://createabit-backend.onrender.com/${item.image}`}
                alt=""
                width={300}
                height={200}
              />
              <button
                onClick={() => addToCart(item)}
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
  );
};

export default Category1;
