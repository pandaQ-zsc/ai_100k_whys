import styles from "./Index.module.css";
import classNames from "classnames";
import planet001 from "../../imgs/planet_001.png"
import planet002 from "../../imgs/planet_002.png"
import planet003 from "../../imgs/planet_003.png"
import { useNavigate } from "react-router-dom";

export default function Book() {
    const navigate = useNavigate();
  return (
    <div className={styles.chapters}>
      <div className={styles.content}>
        <div className="grid grid-flow-col  auto-cols-max ">
          <div className={classNames(styles.card)} onClick={() => navigate(`/books/1/stories/1`)}>
            <img
              src={planet001}
              width="160px"
              className={styles.roadmapImg}
            />
            <p>第一章</p>
          </div>
          <div className={classNames(styles.card)} onClick={() => navigate(`/books/1/stories/1`)}>
            <img
              src={planet002}
              width="160px"
              className={styles.roadmapImg}
            />
            <p>第二章</p>
          </div>
          <div className={classNames(styles.card)} onClick={() => navigate(`/books/1/stories/1`)}>
            <img
              src={planet003}
              width="160px"
              className={styles.roadmapImg}
            />
            <p>第三章</p>
          </div>
          <div className={classNames(styles.card)} onClick={() => navigate(`/books/1/stories/1`)}>
            <img
              src={planet001}
              width="160px"
              className={styles.roadmapImg}
            />
            <p>第四章</p>
          </div>
          <div className={classNames(styles.card)} onClick={() => navigate(`/books/1/stories/1`)}>
            <img
              src={planet002}
              width="160px"
              className={styles.roadmapImg}
            />
            <p>第五章</p>
          </div>
        </div>
      </div>
    </div>
  );
}
