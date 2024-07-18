import styles from "./ParentAccount.module.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import v3_769 from "../imgs/v3_769.png";

export default function ParentAccount() {
  const navigate = useNavigate();
  return (
    <div className={styles.account}>
      <div className={styles.accountIcon}>
        <div className={classNames("shadow-md", styles.accountIconBg)}>
          <img src={v3_769} alt="v3_769" width="auto" height="auto" />
        </div>
      </div>
      <h1>家长中心</h1>
    </div>
  );
}
