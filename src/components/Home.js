import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import kidAcc from "../imgs/kid_acc.png";
import v3_774 from "../imgs/v3_774.png";
import v3_778 from "../imgs/v3_778.png";
import v3_782 from "../imgs/v3_782.png";
import v3_786 from "../imgs/v3_786.png";

import v3_787 from "../imgs/v3_787.png";
import v3_804 from "../imgs/v3_804.png";
import v3_808 from "../imgs/v3_808.png";
import v3_809 from "../imgs/v3_809.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.topBar}>
        <div className={styles.v3_767}>
          <div className={classNames("shadow-md", styles.v3_768)}>
            <img src={kidAcc} alt="kidAcc" width="100%" height="auto" />
          </div>
        </div>
        <div
          className={classNames("shadow-md", "rounded-lg", styles.top_link)}
          onClick={() => navigate("/badge")}
        >
          <div className={styles.top_link_icon}>
            <img src={v3_774} alt="v3_774" width="65px" height="auto" />
          </div>
          <div className={styles.top_link_bg}>
            <span className={styles.top_link_text}>我的徽章</span>
          </div>
        </div>
        <div
          className={classNames("shadow-md", "rounded-lg", styles.top_link)}
          onClick={() => navigate("/bookstore")}
        >
          <div className={styles.top_link_icon}>
            <img src={v3_778} alt="v3_778" width="65px" height="auto" />
          </div>
          <div className={styles.top_link_bg}>
            <span className={styles.top_link_text}>书城</span>
          </div>
        </div>
        <div
          className={classNames("shadow-md", "rounded-lg", styles.top_link)}
          onClick={() => navigate("/bookshelf")}
        >
          <div className={styles.top_link_icon}>
            <img src={v3_782} alt="v3_782" width="65px" height="auto" />
          </div>
          <div className={styles.top_link_bg}>
            <span className={styles.top_link_text}>书架</span>
          </div>
        </div>
        <div
          className={classNames("shadow-md", "rounded-lg", styles.top_link)}
          onClick={() => navigate("/kb")}
        >
          <div className={styles.top_link_icon}>
            <img src={v3_786} alt="v3_786" width="65px" height="auto" />
          </div>
          <div className={styles.top_link_bg}>
            <span className={styles.top_link_text}>知识卡片</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.mascot}>
          <img src={v3_787} alt="v3_787" width="350px" height="auto" />
        </div>
        <div className={styles.bookNav}>
          <h3 className={classNames("text-2xl", styles.navTitle)}>最近阅读</h3>
          <div className={styles.navItems}>
            <div
              className={classNames(styles.navItem, styles.navItem_01)}
              onClick={() => navigate("/books/2")}
            >
              <div className={styles.navItemIcon}>
                <img src={v3_804} alt="v3_804" width="120px" height="auto" />
              </div>
              <div className={styles.navItemTitle}>
                <span className={styles.navItemTitleText}>植物宝藏</span>
              </div>
            </div>
            <div
              className={classNames(styles.navItem, styles.navItem_02)}
              onClick={() => navigate("/books/3")}
            >
              <div className={styles.navItemIcon}>
                <img src={v3_808} alt="v3_808" width="120px" height="auto" />
              </div>
              <div className={styles.navItemTitle}>
                <span className={styles.navItemTitleText}>动物世界</span>
              </div>
            </div>
            <div
              className={classNames(styles.navItem, styles.navItem_03)}
              onClick={() => navigate("/books/1")}
            >
              <div className={styles.navItemIcon}>
                <img src={v3_809} alt="v3_809" width="120px" height="auto" />
              </div>
              <div className={styles.navItemTitle}>
                <span className={styles.navItemTitleText}>星球冒险</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
