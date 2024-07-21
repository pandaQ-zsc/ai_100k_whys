import styles from "./Index.module.css";
import { useNavigate, useParams } from "react-router-dom";
import PlayBtnLite from "./PlayBtnLite";
import books from "../../data";

export default function Book() {
  const { id } = useParams();
  const book = books.find(id);
  const chapters = book && book.chapters;
  const navigate = useNavigate();

  const pos = [
    { top: 110, left: 160 },
    { top: 10, left: 310 },
    { top: 140, left: 380 },
    { top: 420, left: 500 },
    { top: 340, left: 390 },
    { top: 420, left: 220 },
    { top: 320, left: 750 },
    { top: 120, left: 700 },
    { top: 280, left: 900 },
    { top: 410, left: 940 },
  ];
  return (
    <div className={styles.chapters}>
      <div className={styles.content}>
        {chapters &&
          chapters.map((c, i) => {
            const sid = i + 1;
            return (
              <PlayBtnLite
                key={i}
                top={pos[i].top}
                left={pos[i].left}
                locked={!c.unlocked}
                title={c.title}
                onClick={(e) => {
                  if (!e.locked) {
                    navigate(`/books/${id}/stories/${sid}`);
                  }
                }}
              />
            );
          })}
      </div>
    </div>
  );
}
