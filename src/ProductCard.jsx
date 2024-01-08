import { useState } from 'react';
import styles from './productCard.module.css';
import { useEffect } from 'react';

const ProductCard = ({ name,id,price,addProductID }) => {
    
              
  return (
    <div className={styles.productCard}>
      <img src="../public/product-img.jpg" style={{width:"80%",height:"70%"}} alt={name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3 className={styles.productName}>{name}</h3>
 
        <p className={styles.productPrice}>${price}</p>
       
        <button onClick={()=>addProductID(id)}  className={styles.buyNowButton}>Buy Now</button>
      </div>
    </div>


  );
};

export default ProductCard;
