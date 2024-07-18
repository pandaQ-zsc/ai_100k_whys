import styles from "./BookStore.module.css";
import { useNavigate } from "react-router-dom";

export default function BookStore() {
  const navigate = useNavigate();
  return (
    <div className={styles.store}>
      <h1>书架</h1>
    </div>
  );
}
