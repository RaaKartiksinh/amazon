import React from "react";
import Cart from "../Cart/Cart";
import ImageSlider from "../Slider/Slider";
import OverSlider from "../OverSlider/OverSlider";
import apiHelper from "../Commn/ApiHelper";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      let result = await apiHelper.getProduct();
      setProduct(result.data.Product);
    } catch (error) {
      console.log(error);
    }
  };





  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="over-slider" style={{ marginBottom: "calc(32vw + 10px)"  }}>
        <ImageSlider />
        <div className="Over_slider_carts">
          <OverSlider />
        </div>

        
      </div>
      <div className="cart">
        <>
          <div className="container-fluid">
            <div className="row d-flex align-items-start ">
              {product.map((x) => (
                <Cart product={x} key={x._id} />
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
