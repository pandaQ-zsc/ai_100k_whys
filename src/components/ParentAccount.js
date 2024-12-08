import React from "react";
import styles from "./ParentAccount.module.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import kidAcc from "../imgs/kid_acc.png";
import parentAcc from "../imgs/parent_acc.png";

export default function ParentAccount() {
  const navigate = useNavigate();

  return (
    <div className={styles.bg}>
      <p className={styles.title}>欢迎来到 “星球奇遇”</p>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.iconLink} onClick={() => navigate("/landing", {replace:true})}>
            <div
              className={classNames(styles.kid, styles.iconBg, 'rounded-full',
                'shadow-lg')}
            >
              <img src={kidAcc} alt="kidAcc" width="150px" height="150px" />
            </div>
            <span className={classNames('text-xl')}>儿童</span>
          </div>
          <div className={styles.iconLink} onClick={() => navigate("/parent", {replace:true})}>
            <div
              className={classNames(
                styles.parent,
                styles.iconBg,
                "rounded-full",'shadow-lg'
              )}
            >
              <img src={parentAcc} alt="parentAcc" width="150px" height="150px" />
            </div>
            <span className={classNames("text-xl")}>家长</span>
          </div>
        </div>
      </div>
    </div>
  );
}
