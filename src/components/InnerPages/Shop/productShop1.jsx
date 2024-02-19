import Image from "next/image";

import { useCreateCartMutation } from "@/features/cart/cart";
import { useGetProductsQuery } from "@/features/product/products";
const ProductShop1 = () => {
  const { data } = useGetProductsQuery();
  console.log("products", data?.data);
  const products = data?.data;

  const [createCart, { isLoading, isError }] = useCreateCartMutation();

  const addToCart = (product) => {
    console.log("productDetails", product);
    createCart(product);
  };

  return (
    <div className="container">
      <div
        className="row  justify-center align-middle mx-auto gap-5"
        style={{ margin: "160px 0px" }}
      >
        {products?.map((product) => (
          <div className="col-lg-3" key={product.id}>
            <Image
              src={`https://createabit-backend.onrender.com/${product.image}`}
              alt=""
              width={300}
              height={200}
            />
            <h4>{product.title}</h4>
            <p>{product.text}</p>
            <p style={{ fontWeight: "700" }}>${product.price}</p>

            <div className="purchase mt-4">
              <button
                onClick={() => addToCart(product)}
                className="butn butn-md butn-bord radius-30"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShop1;
