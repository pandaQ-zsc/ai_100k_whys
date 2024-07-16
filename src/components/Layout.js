import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </main>
  );
}
