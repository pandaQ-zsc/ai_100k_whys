import React from "react";
import styles from "./Landing.module.css";
import landingLeft from "../imgs/landing_left.png";
import landingMid from "../imgs/landing_mid.png";
import landingRight from "../imgs/landing_right.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("navigate");
    setTimeout(() => navigate("/home", { replace: true }), 1500);
  }, [navigate]);

  return (
    <div className={styles.landing}>
      <p className={styles.title}>欢迎来到 “星球奇遇”</p>
      <div className={styles.imgs}>
        <img
          className={styles.img_left}
          src={landingLeft}
          alt="landing_left"
          width="225px"
          height="auto"
        />
        <img
          className={styles.img_mid}
          src={landingMid}
          alt="landing_mid"
          width="250px"
          height="auto"
        />
        <img
          className={styles.img_right}
          src={landingRight}
          alt="landing_right"
          width="225px"
          height="auto"
        />
      </div>
      <div className={styles.progressbar}>
        <div className="relative mb-5">
          <div className="rounded-full border border-red-500 p-1">
            <div
              className="flex h-6 items-center justify-center rounded-full bg-red-300 text-xs leading-none"
              style={{ width: "85%", height: "85%" }}
            >
              <span className="p-1 text-white">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
