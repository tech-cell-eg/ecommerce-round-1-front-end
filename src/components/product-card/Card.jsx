import React, { useState } from "react";
import styles from "./card.module.css";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaExchangeAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";
import { addtoWishlist } from "../../redux/wishlistSlice";


function Card({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const wishlistItems = useSelector((state) => state.wishlist.wishlist);

  const isItemInCart = cartItems.some(
    (cartItem) => cartItem.data.product_id === item.id
  );

  const isInWishlist = wishlistItems?.some(
    (wishlistItem) => wishlistItem.id === item.id
  );

  const handleAddToWishlist = (productId) => {
    dispatch(addtoWishlist(productId));
    toast.success("product added to wishlist");
  };
  const handleAddToCart = () => {
    // console.log("Add to Cart in card", item);
    dispatch(addToCart({ item }));
  };

  const fallbackImage =
    "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";

  return (<>

<div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={item.image || fallbackImage}
          alt={item.name}
          className={styles.cardImage}
        />
        <div className={styles.topIcons}>
          <button
            className={styles.iconButton}
            onClick={() => handleAddToWishlist(item.id)}
          >
            {isInWishlist ? <CiHeart /> : <CiStar />}
          </button>
          <button className={styles.iconButton}>
            <FaExchangeAlt />
          </button>
          <Link
            to={`/product/${item.id}`}
            state={{ product: item }}
            className={styles.iconButton}
          >
            <IoEyeOutline />
          </Link>
        </div>

        {token ? (
          <button
            className={`${styles.addToCartButton} ${
              isItemInCart ? styles.addedButton : ""
            }`}
            onClick={handleAddToCart}
            disabled={isItemInCart}
          >
            {isItemInCart ? "Added to Cart" : "Add to Cart"}
          </button>
        ) : (
          <button
            className={`${styles.addToCartButton} ${
              isItemInCart ? styles.addedButton : ""
            }`}
            onClick={() => toast.error("Please Login First")}
            disabled={isItemInCart}
          >
            {isItemInCart ? "Added to Cart" : "Add to Cart"}
          </button>
        )}
      </div>
      <div className={styles.cardContent}>
        <Link
          to={`/product/${item.id}`}
          className={styles.cardLink}
          state={{ product: item }}
        >
          <h2 className={styles.cardTitle}>{item.name}</h2>
        </Link>
        <p className={styles.cardDescription}>{item.description}</p>
        {item.price - item.compare_price > 0 ? (
          <p className={styles.cardPrice}>
            {(item.price - item.compare_price).toFixed(2)}{" "}
            <span className={styles.strikeThrough}>
              ${item.price.toFixed(2)}
            </span>
          </p>
        ) : (
          <p className={styles.cardPrice}>${item.price.toFixed(2)}</p>
        )}
      </div>
      </div>
  </>
   
  );
}

export default Card;
