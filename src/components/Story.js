import classnames from "classnames";
import styles from "./Story.module.css";
import $ from "jquery";
import Turn from "./Turn";
import books from "../books";
import { Fragment, useEffect, useState } from "react";

const options = {
  width: 1080,
  height: 607,
  autoCenter: true,
  display: "double",
  elevation: 50,
  page: 2,
  gradients: !$.isTouch,
  when: {
    turned: function (e, page) {
      console.log("Current view: ", $(this).turn("view"));
    },
  },
};

export default function Story() {
    const [frames, setFrames] = useState([]);
    const [coverPage, setCoverPage] = useState("");
    const [backPage, setBackPage] = useState("");

  useEffect(() => {
    const book = books.find(1);
    const story = book.stories[0];
    const pages = story.pages.filter((s) => s.branch === "default");
    setFrames(pages);
    setCoverPage(book.cover_page)
    setBackPage(book.back_page)
    console.log("books")
  }, []);

  return (
    <div className={styles.story}>
      <div className={styles.storyContent}>
        {frames.length > 0 && (<Turn options={options} className="magazine">
          {coverPage && (
            <div key="cover" className="page">
              <div
                className={classnames(styles.page)}
                style={{ backgroundImage: coverPage }}
              ></div>
            </div>
          )}
          {frames.map((page) => (
            <Fragment key={`${page.index}`}>
              <div key={`${page.index}_left`} className="page">
                <div
                  className={classnames(styles.page, styles.page_left)}
                  style={{ backgroundImage: page.pic }}
                ></div>
                {page.text && <p className={styles.text}>{page.text}</p>}
              </div>
              <div key={`${page.index}_right`} className="page">
                <div
                  className={classnames(styles.page, styles.page_right)}
                  style={{ backgroundImage: page.pic }}
                ></div>
              </div>
            </Fragment>
          ))}
          {backPage && (
            <div key="back" className="page">
              <div
                className={classnames(styles.page)}
                style={{ backgroundImage: backPage }}
              ></div>
            </div>
          )}
        </Turn>)}
      </div>
    </div>
  );
}
