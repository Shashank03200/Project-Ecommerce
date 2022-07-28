import React, { useContext, useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import ProductImage1 from "../assets/images/shoe1.png";
import ProductImage2 from "../assets/images/shoe1.png";
import ProductImage3 from "../assets/images/shoe1.png";
import ProductImage4 from "../assets/images/shoe1.png";
import StoreCard from "../components/CustomCard/StoreCard";
import { Link, useParams } from "react-router-dom";

import Cart from "../components/Cart/Cart";
import BluePattern from "../assets/images/BluePattern.png";
import BlackPattern from "../assets/images/BlackPattern.png";
import BlueColorImage from "../assets/images/BlueColorImage.png";
import Spinner from "../components/Spinner/Spinner";

import "./Product.css";
import { CartContext } from "../context/cart-context";
import { productList } from "../data/products";

const soleItems = ["black", "#3498DB", "gray"];
const frontItems = [BlackPattern, BlueColorImage, BluePattern];
const middleItems = [BlackPattern, BlueColorImage, BluePattern];
const backItems = [BlackPattern, BlueColorImage, BluePattern];

const optionsStars = {
  size: 20,
  value: 4.5,
  edit: false,
};

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedObj, setSelectedObj] = useState({
    front: 0,
    middle: 0,
    back: 0,
    sole: 0,
    size: 0,
  });

  const { productID: itemID } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let timeout = undefined;
    if (isLoading) {
      timeout = setTimeout(() => {
        setProduct(productList.find((product) => product.itemID === itemID));
        setIsLoading(false);
      }, 2000);
    }
    console.log("Running timer");
    return () => clearTimeout(timeout);
  }, []);

  const { addToCartHandler } = useContext(CartContext);

  function cartAddHandler() {
    addToCartHandler(product, 1); // product, quantity
  }

  if (isLoading) {
    return <Spinner />;
  }

  const { itemTitle, itemDesc, itemImages, type, color, itemPrice } = product;

  return (
    <section className="ProductPage">
      <StoreCard
        cardHeading={
          <>
            <Link to={"/store"}>
              <i class="fa-solid fa-less-than"></i>
            </Link>
            <span style={{ marginLeft: "20px" }}>your design space</span>
          </>
        }
        className="Product"
      >
        <div className="Product__Container">
          <div className="Product__Wrapper ">
            <div className="Product__Wrapper-Image1">
              <img src={itemImages[0]} />
            </div>

            <div className="Product__Wrapper-Images">
              <div>
                <img src={itemImages[0]} />
              </div>
              <div>
                <img src={itemImages[0]} />
              </div>
              <div>
                <img src={itemImages[0]} />
              </div>
            </div>
            <div className="Product__RightBar">
              <div className="Product__Information">
                <h2 className="Product__Information-ProductTitle">
                  {itemTitle}{" "}
                </h2>
                <h5 className="Product__Information--ProductDescription">
                  {itemDesc}
                </h5>

                <div className="Product__Ratings">
                  <ReactStars {...optionsStars} />
                </div>
                <div className="Product__Offers">
                  <h3>Rs {itemPrice}/-</h3>
                  <p>Get an exclusive 20% on shopping with HDFC Bank</p>
                </div>
              </div>

              <div className="Product__Modify">
                <div className="Product__Modify-Setting">
                  <p>Front</p>
                  <div className="Product__Modify-Values">
                    {frontItems.map((item, i) => (
                      <span key={i}>
                        <img src={item} />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="Product__Modify-Setting">
                  <p>Middle</p>
                  <div className="Product__Modify-Values">
                    {middleItems.map((item, i) => (
                      <span key={i}>
                        <img src={item} />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="Product__Modify-Setting">
                  <p>Back</p>
                  <div className="Product__Modify-Values">
                    {backItems.map((item, i) => (
                      <span key={i}>
                        <img src={item} />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="Product__Modify-Setting">
                  <p>Sole</p>
                  <div className="Product__Modify-Values">
                    {soleItems.map((soleItem, i) => (
                      <span key={i} style={{ backgroundColor: soleItem }} />
                    ))}
                  </div>
                </div>

                <div className="Product__Modify-Setting">
                  <p>Size</p>
                  <div className="Product__Modify-Values">
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Product__Footer">
            <div className="Product__AddRating">
              <span> Rate product</span>
              <ReactStars {...optionsStars} edit={true} />
            </div>
            <div className="Product__ActionButtons">
              <button className="Product__ActionButton Button-Outlined">
                Share Design
              </button>
              <button
                className="Product__ActionButton Button-Solid"
                onClick={cartAddHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </StoreCard>
      <Cart />
    </section>
  );
};

export default Product;
