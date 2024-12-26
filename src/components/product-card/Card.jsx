import React, { useState } from "react";
import styles from "./card.module.css";
import { CiHeart, CiStar } from "react-icons/ci";
import { FaExchangeAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import addtowhishlist from "../../api/wishlist/addtowhishlist";
import toast from "react-hot-toast";


function Card({ item }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);


  const isItemInCart = cartItems.some(
    (cartItem) => cartItem.data.product_id === item.id
  );

  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleAddToWishlist = async (itemId) => {
    try {
      const response = await addtowhishlist(itemId);
      console.log(response);
      toast.success("Item added to wishlist!");
      setIsInWishlist(true)
    } catch (error) {
      console.log(error);
      toast.error("Failed to add item to wishlist.");
    }
  };


  const handleAddToCart = () => {
    // console.log("Add to Cart clicked for item:", item);
    dispatch(addToCart({ item, userId: 13 })); 
  };

  const fallbackImage =
    "https://img.freepik.com/premium-vector/elegant-clothes-hanger-fashion-beauty_677686-509.jpg";

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={item.image || fallbackImage}
          alt={item.name}
          className={styles.cardImage}
        />
        <div className={styles.topIcons} onClick={() => handleAddToWishlist(item.id)}>
        <button className={styles.iconButton}>
        {isInWishlist ? (
            <CiHeart />
            ) : (
              <CiStar />
            )}
             </button>
          <button className={styles.iconButton}>
            <FaExchangeAlt />
          </button>
          <button className={styles.iconButton}>
            <IoEyeOutline />
          </button>
        </div>
        <button
          className={`${styles.addToCartButton} ${
            isItemInCart ? styles.addedButton : ""
          }`}
          onClick={handleAddToCart}
          disabled={isItemInCart} 
        >
          {isItemInCart ? "Added to Cart" : "Add to Cart"}
        </button>
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
            ${item.price - item.compare_price}{" "}
            <span className={styles.strikeThrough}>${item.price}</span>
          </p>
        ) : (
          <p className={styles.cardPrice}>${item.price}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
