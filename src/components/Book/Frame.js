import classnames from "classnames";
import styles from "./Frame.module.css";
import Turn from "../Turn";
import $ from "jquery";
import books from "../../books";
import { Fragment, useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import nextStoryIcon from "../../imgs/v6_1777.png";
import kbIcon from "../../imgs/kb_001.png";
import playBtnIcon from "../../imgs/play-audio.png";

const options = {
  width: 1080,
  height: 607,
  autoCenter: true,
  acceleration: true,
  display: "double",
  elevation: 50,
  page: 2,
  gradients: !$.isTouch,
};

function findStartPage(branchIdx, name, defaultPage = 2) {
  const currentBranch = branchIdx.find((b) => b.name === name);
  if (!currentBranch || currentBranch.pages.length === 0) {
    return defaultPage;
  }

  return currentBranch.pages[0];
}

function findLastPage(branchIdx, name, defaultPage) {
  const currentBranch = branchIdx.find((b) => b.name === name);
  if (!currentBranch || currentBranch.pages.length === 0) {
    return defaultPage;
  }

  let lastPage = currentBranch.pages[currentBranch.pages.length - 1];
  if (currentBranch.jumps && currentBranch.jumps.length > 0) {
    lastPage = findLastPage(
      branchIdx,
      currentBranch.jumps[currentBranch.jumps.length - 1],
      defaultPage
    );
  }
  return lastPage;
}

const DefaultBranch = "default";
export default function Frame() {
  const { bookId, storyId } = useParams();
  const navigate = useNavigate();
  const book = books.find(bookId);
  const story = book.stories.find((s) => s.index === parseInt(storyId));
  const frames = story.pages;

  let audio = useRef(null);
  let audioCtrl = useRef(null);
  let turnRef = { turn: () => {} };
  let currentBranch = DefaultBranch;
  const branchIdx = [];
  const bookLastPage = (frames.length + 1) * 2;
  if (frames && frames.length > 0) {
    frames.forEach((p, i) => {
      const br = p.branch || DefaultBranch;
      let item = branchIdx.find((b) => b.name === br);
      if (!item) {
        item = { name: br, pages: [], jumps: [] };
        branchIdx.push(item);
      }
      item.pages.push((i + 1) * 2);
      item.pages.push((i + 1) * 2 + 1);
      if (p.switch && p.switch.length > 0) {
        item.jumps.push(p.switch[0].goto.branch);
      }
    });
  }
  const opts = Object.assign(
    {
      when: {
        start: function (e, curr) {
          // tl, tr, bl, br
          // curr.corners: "backward" or "forward"
          console.log("Start:", currentBranch, curr);
          if (curr.corners === "backward") {
            const startPage = findStartPage(branchIdx, currentBranch);
            if (curr.page === startPage) {
              e.preventDefault();
              return false;
            }
          } else if (curr.corners === "forward") {
            const lastPage = findLastPage(
              branchIdx,
              currentBranch,
              bookLastPage
            );
            if (curr.page === lastPage) {
              curr.next = bookLastPage;
              console.log("goto last page " + curr.next);
            }
          }
          return true;
        },
        turning: async function (e, curr, view) {
          console.log("turning");
          if (audio) {
            await audio.pause();
          }
        },
        turned: function (e, curr, view) {
          console.log("Current view:", view);
        },
      },
    },
    options
  );

  return (
    <div className={styles.story}>
      <div className={styles.storyContent}>
        {frames && frames.length > 0 && (
          <Turn
            options={opts}
            onInit={(r) => (turnRef = r)}
            className="magazine"
          >
            <div className="page"></div>
            {frames.map((page) => (
              <Fragment key={`${page.index}`}>
                <div key={`${page.index}_left`} className="page">
                  <div
                    className={classnames(styles.page, styles.page_left)}
                    style={{ backgroundImage: page.pic }}
                  ></div>
                  {page.text && (
                    <p className={classnames(styles.text, "text-2xl")}>
                      {page.text}
                    </p>
                  )}
                </div>
                <div key={`${page.index}_right`} className="page">
                  <div
                    className={classnames(styles.page, styles.page_right)}
                    style={{ backgroundImage: page.pic }}
                  ></div>
                  {page.audio && (
                    <div
                      className={classnames(styles.playBtnIcon)}
                      onClick={async () => {
                        const m = /^url\((.+?)\)$/.exec(page.audio);
                        if (m && audio) {
                          //await audio.pause();
                          audio.src = m[1]
                          await audio.play();
                        }
                      }}
                    >
                      <img
                        src={playBtnIcon}
                        alt="play"
                        width="100%"
                        height="auto"
                      />
                    </div>
                  )}
                  {page.switch && page.switch.length > 0 && (
                    <div className={styles.switch}>
                      {page.switch.map((s, i) => (
                        <div
                          key={i}
                          className={classnames(
                            "rounded-full",
                            "text-3xl",
                            "text-center",
                            styles.switchItem
                          )}
                          onClick={() => {
                            currentBranch = s.goto.branch;
                            const startPage = findStartPage(
                              branchIdx,
                              currentBranch
                            );
                            turnRef.turn("page", startPage);
                          }}
                        >
                          {s.q}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Fragment>
            ))}
            <div className={classnames("page", styles.sp_page)}>
              <div
                className={classnames(styles.navItem)}
                onClick={() => navigate("/books/2")}
              >
                <div className={styles.navItemIcon}>
                  <img src={kbIcon} alt="kbIcon" width="100%" height="auto" />
                </div>
                <div className={styles.navItemTitle}>
                  <span className={styles.navItemTitleText}>知识卡片</span>
                </div>
              </div>
            </div>
            <div className={classnames("page", styles.sp_page)}>
              <div className={styles.kb}>
                <h1>{story.knowledge.title}</h1>
                <p>{story.knowledge.content}</p>
              </div>
              <div
                className={classnames(
                  "shadow-md",
                  "rounded-lg",
                  styles.nextStory
                )}
                onClick={() => navigate(-1)}
              >
                <img
                  src={nextStoryIcon}
                  width="60px"
                  height="auto"
                  alt="next"
                />
                <span className="text-lg">去下一个故事吧？</span>
              </div>
            </div>
          </Turn>
        )}
      </div>
      <audio
        ref={(e) => {
          audio = e;
        }}
        src="/data/books/book_1/chapter_1/story_1/6.mp3"
      />
    </div>
  );
}
