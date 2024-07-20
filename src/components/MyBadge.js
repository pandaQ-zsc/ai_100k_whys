import styles from "./MyBadge.module.css";

export default function MyBadge() {
  return (
    <div className={styles.bg}>
      <div className={styles.bgImg} style={{ backgroundImage: "url(/imgs/my_badge.png)" }}></div>
    </div>
  );
}
