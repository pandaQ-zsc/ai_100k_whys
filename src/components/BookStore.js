import React from "react";
import styles from './BookStore.module.css';
export default function Bookstore() {
  return (
    <div className={styles.bg}>
      <div className={styles.bgImg} style={{ backgroundImage: "url(/imgs/bookstore.png)" }}></div>
    </div>
  );
}
