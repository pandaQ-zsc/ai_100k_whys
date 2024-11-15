import React from 'react';
import { useNavigate } from "react-router-dom";
import bg from "./imgs/s09.png";
import PlayBtn from "./PlayBtn";

export default function S09({ stories, bookId, id }) {
  const pos = [
    { top: 420, left: 650 },
    { top: 160, left: 790 },
    { top: 30, left: 300 },
    { top: -20, left: 560 },
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
