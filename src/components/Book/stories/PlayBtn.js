import styles from "./PlayBtn.module.css";
import classNames from "classnames";
import playIcon from "../../../imgs/book-play.png";
import lockIcon from "../../../imgs/book-lock.png";

export default function PlayBtn({
  title,
  locked,
  className,
  style,
  top,
  left,
  onClick,
}) {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick({ title, locked });
        }
      }}
      className={classNames(
        styles.point,
        { [styles.locked]: locked },
        className
      )}
      style={Object.assign({ top, left }, style)}
    >
      <div className={styles.playIcon}>
        <img src={playIcon} width="100%" alt="play" className="rounded-full" />
      </div>
      <div className={styles.lockIcon}>
        <img src={lockIcon} width="100%" alt="lock" className="rounded-full" />
      </div>
      <span className="shadow-lg">{title}</span>
    </div>
  );
}
