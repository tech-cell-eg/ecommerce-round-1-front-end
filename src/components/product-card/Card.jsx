import React from "react";
import styles from "./Card.module.css";
import { CiStar } from "react-icons/ci";
import { FaExchangeAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function Card({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={item.productImage}
          alt={item.productTitle}
          className={styles.cardImage}
        />
        <div className={styles.topIcons}>
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
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{item.productTitle}</h2>
        <p className={styles.cardDescription}>{item.productDescription}</p>
        {item.discount > 0 ? (
          <p className={styles.cardPrice}>
            ${item.productPrice - item.discount}{" "}
            <span className={styles.strikeThrough}>${item.productPrice}</span>
          </p>
        ) : (
          <p className={styles.cardPrice}>${item.productPrice}</p>
        )}
      </div>
    </div>
  );
}

export default Card;
