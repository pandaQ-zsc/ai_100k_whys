import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import v3_769 from "../imgs/v3_769.png";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.bg}>
      <p className={styles.title}>欢迎来到 “万问奇遇”</p>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.iconLink} onClick={() => navigate("/landing")}>
            <div
              className={classNames(styles.kid, styles.iconBg, "rounded-full",'shadow-lg')}
            >
              <img src={v3_769} alt="v3_769" width="auto" height="auto" />
            </div>
            <span className={classNames("text-xl")}>儿童</span>
          </div>
          <div className={styles.iconLink} onClick={() => navigate("/landing")}>
            <div
              className={classNames(
                styles.parent,
                styles.iconBg,
                "rounded-full",'shadow-lg'
              )}
            >
              <img src={v3_769} alt="v3_769" width="auto" height="auto" />
            </div>
            <span className={classNames("text-xl")}>家长</span>            
          </div>
        </div>
      </div>
    </div>
  );
}
