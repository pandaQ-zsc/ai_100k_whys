import React from 'react';
import { useNavigate } from "react-router-dom";
import bg from "./imgs/s01.png";
import PlayBtn from "./PlayBtn";

export default function S01({ stories, bookId, id }) {
  const pos = [
    { top: 130, left: 140 },
    { top: 120, left: 450 },
    { top: 90, left: 750 },
    { top: 380, left: 120 },
    { top: 390, left: 790 },
  ];
  const navigate = useNavigate();
  return (
    <>
      <img src={bg} alt="bg" width="100%" />
      {stories.map((s, i) => {
        const sid = i + 1;
        return (
          <PlayBtn
            key={i}
            top={pos[i].top}
            left={pos[i].left}
            locked={!s.unlocked}
            title={s.title}
            onClick={(e) => {
              if (!e.locked) {
                navigate(`/books/${bookId}/stories/${id}/frames/${sid}`);
              }
            }}
          />
        );
      })}
    </>
  );
}
