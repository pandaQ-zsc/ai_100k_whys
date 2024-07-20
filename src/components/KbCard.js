import styles from "./KbCard.module.css";

export default function KbCard() {
  return (
    <div className={styles.bg}>
      <div className={styles.bgImg} style={{ backgroundImage: "url(/imgs/kb_card.png)" }}></div>
    </div>
  );
}
