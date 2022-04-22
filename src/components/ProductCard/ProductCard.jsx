import React, { useContext } from "react";
import "./ProductCard.css";
import { CartValueContext } from "../../components/ContextProvider";

const ProductCard = ({ product }) => {
  const { cart, setCart } = useContext(CartValueContext);

  //Add To Cart
  const addToCart = (product) => {
    const temp = [...cart];
    if (
      temp.find((x) => {
        return x.id === product.id;
      })
    ) {
      alert("Already Added To Cart");
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="col-lg-4 col-md-4 col-12">
      <div className="productcard " onClick={() => addToCart(product)}>
        <div className="productcard__image ">
          <img
            src={product.image}
            alt=""
            className="img-fluid img-responsive"
          />
        </div>
        <h4 className="productcard__name text-start">
          {product.name}
          <span>{product.portion} g</span>
        </h4>
        <p className="productcard__price text-start">$ {product.price}</p>
        <div className="productcard__ratings">
          <i className="fa-solid fa-star"></i>
          {product.rating}
        </div>
        <div className="productcard__like">
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
