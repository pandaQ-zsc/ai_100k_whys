import styles from "./Index.module.css";
import classNames from "classnames";
import rmBg from "../../imgs/star_chapters_rm.png";
import { useNavigate } from "react-router-dom";

export default function Book() {
  const navigate = useNavigate();
  return (
    <div className={styles.chapters}>
      <div
        className={styles.content}
        onClick={() => navigate(`/books/1/stories/1`)}
      >
        <img src={rmBg} alt="bg" width="100%" />
      </div>
    </div>
  );
}
