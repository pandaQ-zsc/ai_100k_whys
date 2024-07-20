import styles from "./ParentAccount.module.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import parentAcc from "../imgs/parent_acc.png";
import learningStatImg from "../imgs/learning_stat.png";
import settingsIcon from "../imgs/settings.png";

export default function ParentAccount() {
  const navigate = useNavigate();
  return (
    <div className={styles.account}>
      <div className={styles.accountIcon}>
        <div className={classNames("shadow-md", styles.accountIconBg)}>
          <img src={parentAcc} alt="v3_769" width="auto" height="auto" />
        </div>
      </div>
      <div className={styles.settings}>
        <img width="100%" height="auto" alt="settingsIcon" src={settingsIcon} />
      </div>
      <div className={styles.stat}>
        <img width="100%" height="auto" alt="stat" src={learningStatImg} />
      </div>
    </div>
  );
}
