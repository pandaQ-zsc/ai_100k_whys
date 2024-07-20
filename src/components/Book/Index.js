import styles from "./Index.module.css";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import PlayBtnLite from "../PlayBtnLite";
import books from "../../books";

export default function Book() {
  const { id } = useParams();
  const book = books.find(id);
  const chapters = book && book.chapters;
  const navigate = useNavigate();

  return (
    <div className={styles.chapters}>
      {chapters && (
        <div className={styles.content}>
          <PlayBtnLite
            key={0}
            top={110}
            left={160}
            locked={!chapters[0].unlocked}
            title="地球蓝色星球奇遇记"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/1`);
              }
            }}
          />
          <PlayBtnLite
            key={1}
            top={140}
            left={380}
            locked={!chapters[1].unlocked}
            title="八大行星漂流记"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/2`);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
