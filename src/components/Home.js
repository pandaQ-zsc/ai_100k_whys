import styles from "./Home.module.css";
import homeLeft from "../imgs/home_left.png";
import homeMid from "../imgs/home_mid.png";
import homeRight from "../imgs/home_right.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("navigate");
    setTimeout(() => navigate("/recent"), 2000);
  }, [navigate]);

  return (
    <div className={styles.home}>
      <p className={styles.title}>欢迎来到 “万问奇遇”</p>
      <div className={styles.imgs}>
        <img
          className={styles.img_left}
          src={homeLeft}
          alt="home_left"
          width="225px"
          height="auto"
        />
        <img
          className={styles.img_mid}
          src={homeMid}
          alt="home_mid"
          width="250px"
          height="auto"
        />
        <img
          className={styles.img_right}
          src={homeRight}
          alt="home_right"
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
