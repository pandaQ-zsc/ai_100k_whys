import styles from "./Story.module.css";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import earthrmBg from "../../imgs/earth_rm.png";
import marsrmBg from "../../imgs/mars_rm.png";
import moonrmBg from "../../imgs/moon_rm.png";
import PlayBtn from "../PlayBtn";
import books from "../../books";

export default function Story() {
  const navigate = useNavigate();
  const { bookId, id } = useParams();
  const book = books.find(bookId);
  const stories = book.stories.filter((s) => s.chapter === parseInt(id));

  console.log("story of book", bookId, "at chapter", id);
  return (
    <div className={styles.story}>
    {bookId === "1" && id === "1" && (
      <>
        <img src={earthrmBg} alt="bg" width="100%" />
        <PlayBtn
          key={1}
          top={130}
          left={140}
          locked={!stories[0].unlocked}
          title="寻找大地尺度的奇遇"
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/1`);
            }
          }}
        />
        <PlayBtn
          key={2}
          top={120}
          left={450}
          title="南极陨石迷踪"
          locked={!stories[1].unlocked}
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/2`);
            }
          }}
        />
        <PlayBtn
          key={3}
          top={90}
          left={750}
          title="地球生命之谜"
          locked={!stories[2].unlocked}
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/3`);
            }
          }}
        />
        <PlayBtn
          key={4}
          top={380}
          left={120}
          title="天文台奇遇记"
          locked={!stories[3].unlocked}
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/4`);
            }
          }}
        />
        <PlayBtn
          key={5}
          top={390}
          left={790}
          title="地球璀璨未来"
          locked={!stories[4].unlocked}
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/5`);
            }
          }}
        />
      </>
    )}
    {bookId === "1" && id === "2" && (
      <>
        <img src={marsrmBg} alt="bg" width="100%" />
        <PlayBtn
          key={1}
          top={260}
          left={220}
          locked={!stories[0].unlocked}
          title="大手笔:火星移民计划"
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/1`);
            }
          }}
        />
        <PlayBtn
          key={2}
          top={20}
          left={470}
          title="木星绿野奇缘"
          locked={!stories[1].unlocked}
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/2`);
            }
          }}
        />
        <PlayBtn
          key={3}
          top={220}
          left={450}
          title="土星光环奇遇记"
          locked={!stories[2].unlocked}
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/3`);
            }
          }}
        />
        <PlayBtn
          key={4}
          top={260}
          left={685}
          title="水星迷航记"
          locked={!stories[3].unlocked}
          onClick={(e) => {
            if (!e.locked) {
              navigate(`/books/${bookId}/stories/${id}/frames/4`);
            }
          }}
        />
      </>
    )}

    </div>
  );
}
