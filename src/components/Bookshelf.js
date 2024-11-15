import React from "react";
import styles from "./Bookshelf.module.css";

export default function Bookshelf() {
  return (
    <div className={styles.bg}>
      <div className={styles.bgImg} style={{ backgroundImage: "url(/imgs/bookshelf.png)" }}></div>
    </div>
  );
}
