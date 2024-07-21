import styles from "./Story.module.css";
import { useParams } from "react-router-dom";
import books from "../../data";
import S01 from "./stories/S01";
import S02 from "./stories/S02";
import S03 from "./stories/S03";
import S04 from "./stories/S04";
import S05 from "./stories/S05";
import S06 from "./stories/S06";
import S07 from "./stories/S07";
import S08 from "./stories/S08";
import S09 from "./stories/S09";
import S10 from "./stories/S10";

export default function Story() {
  const { bookId, id } = useParams();
  const book = books.find(bookId);
  const stories = book.stories.filter((s) => s.chapter === parseInt(id));

  console.log("story of book", bookId, "at chapter", id);
  return (
    <div className={styles.story}>
      {bookId === "1" && id === "1" && (
        <S01 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "2" && (
        <S02 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "3" && (
        <S03 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "4" && (
        <S04 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "5" && (
        <S05 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "6" && (
        <S06 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "7" && (
        <S07 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "8" && (
        <S08 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "9" && (
        <S09 stories={stories} bookId={bookId} id={id} />
      )}
      {bookId === "1" && id === "10" && (
        <S10 stories={stories} bookId={bookId} id={id} />
      )}
    </div>
  );
}
