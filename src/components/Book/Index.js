import styles from "./Index.module.css";
import { useNavigate, useParams } from "react-router-dom";
import PlayBtnLite from "./PlayBtnLite";
import books from "../../data";

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
            key={1}
            top={110}
            left={160}
            locked={!chapters[0].unlocked}
            title="地球 蓝色星球奇遇记"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/1`);
              }
            }}
          />
          <PlayBtnLite
            key={2}
            top={10}
            left={310}
            locked={!chapters[1].unlocked}
            title="月球奇幻之旅"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/2`);
              }
            }}
          />
          <PlayBtnLite
            key={3}
            top={140}
            left={380}
            locked={!chapters[1].unlocked}
            title="八大行星漂流记"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/3`);
              }
            }}
          />
          <PlayBtnLite
            key={4}
            top={420}
            left={500}
            locked={!chapters[1].unlocked}
            title="神奇的太阳王国"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/4`);
              }
            }}
          />
          <PlayBtnLite
            key={5}
            top={340}
            left={390}
            locked={!chapters[1].unlocked}
            title="恒星星球大作战"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/5`);
              }
            }}
          />
          <PlayBtnLite
            key={6}
            top={420}
            left={220}
            locked={!chapters[1].unlocked}
            title="银河拼盘手"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/6`);
              }
            }}
          />
          <PlayBtnLite
            key={7}
            top={320}
            left={750}
            locked={!chapters[1].unlocked}
            title="星际穿梭往返记"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/7`);
              }
            }}
          />
          <PlayBtnLite
            key={8}
            top={120}
            left={700}
            locked={!chapters[1].unlocked}
            title="黑洞奇遇空间站"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/8`);
              }
            }}
          />
          <PlayBtnLite
            key={9}
            top={280}
            left={900}
            locked={!chapters[1].unlocked}
            title="勇闯太空乐园"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/9`);
              }
            }}
          />
          <PlayBtnLite
            key={10}
            top={410}
            left={940}
            locked={!chapters[1].unlocked}
            title="银河拼盘手"
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${id}/stories/10`);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
