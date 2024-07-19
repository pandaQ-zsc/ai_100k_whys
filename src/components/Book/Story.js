import styles from "./Story.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Story() {
    const navigate = useNavigate();
  return (
    <div className={styles.story} onClick={() => navigate(`/books/1/stories/1/frames`)}>
      <h1>故事星球</h1>
    </div>
  );
}
