import styles from './TotalPrice.module.css';

function TotalPrice({addTotal}) {
   
    

   
    return (
    <div className={styles.totalPriceContainer}>
      <div className={styles.totalPrice}>Total Price: ${addTotal.toFixed(2)}</div>
    </div>
  );
}

export default TotalPrice;