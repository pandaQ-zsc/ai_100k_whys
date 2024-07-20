import styles from "./PlayBtn.module.css";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import playIcon from "../imgs/book-play.png";
import lockIcon from "../imgs/book-lock.png";

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
      onClick={onClick}
      className={classNames(
        styles.point,
        { [styles.locked]: locked },
        className
      )}
      style={Object.assign({ top, left }, style)}
    >
      <div className={styles.playIcon}>
        <img src={playIcon} width={50} alt="play" />
      </div>
      <div className={styles.lockIcon}>
        <img src={lockIcon} width={50} alt="lock" />
      </div>
      <span className='shadow-lg'>{title}</span>
    </div>
  );
}
