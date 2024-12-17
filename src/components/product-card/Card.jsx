import React from "react";
import styles from "./Card.module.css"; // Import CSS module
import { CiStar } from "react-icons/ci";
import { FaExchangeAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function Card({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Image */}
        <img src={item.image} alt={item.title} className={styles.cardImage} />

        {/* Top-right icons */}
        <div className={`${styles.topIcons} ${styles.hiddenIcons}`}>
          <button className={styles.iconButton}>
            <CiStar />
          </button>
          <button className={styles.iconButton}>
            <FaExchangeAlt />
          </button>
          <button className={styles.iconButton}>
            <IoEyeOutline />
          </button>
        </div>

        {/* Add to cart button */}
        <button
          className={`${styles.addToCartButton} ${styles.hiddenCart} w-[90%] rounded-md bg-white font-semibold text-lg`}
        >
          Add to Cart
        </button>
      </div>

      {/* Card content */}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{item.title}</h2>
        <p className={styles.cardDescription}>{item.description}</p>
        {item.discount > 0 ? (
          <p className={styles.cardPrice}>
            ${item.price - item.discount}{" "}
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
