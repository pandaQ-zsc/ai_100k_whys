import styles from "./Story.module.css";
import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import rmBg from "../../imgs/earth_rm.png";
import PlayBtn from "../PlayBtn";

export default function Story() {
  const navigate = useNavigate();
  const { bookId, id } = useParams();
  console.log("story of book", bookId, "at chapter", id);
  return (
    <div className={styles.story}>
      <img src={rmBg} alt="bg" width="100%" />

      <PlayBtn
        top={130}
        left={150}
        title="地球蓝色星球奇遇记"
        onClick={() => navigate(`/books/1/stories/1/frames`)}
      />
      <PlayBtn
        top={320}
        left={470}
        title="寻找大地尺度的奇遇"
        locked={true}
        onClick={() => navigate(`/books/1/stories/2/frames`)}
      />
      <PlayBtn
        top={120}
        left={450}
        title="南极陨石迷踪"
        locked={true}
        onClick={() => navigate(`/books/1/stories/3/frames`)}
      />
      <PlayBtn
        top={90}
        left={750}
        title="地球生命之谜"
        locked={true}
        onClick={() => navigate(`/books/1/stories/4/frames`)}
      />
      <PlayBtn
        top={380}
        left={120}
        title="天文台奇遇记"
        locked={true}
        onClick={() => navigate(`/books/1/stories/5/frames`)}
      />
      <PlayBtn
        top={390}
        left={790}
        title="地球璀璨未来"
        locked={true}
        onClick={() => navigate(`/books/1/stories/6/frames`)}
      />
    </div>
  );
}
