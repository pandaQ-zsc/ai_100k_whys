import React from 'react';
import { useNavigate } from "react-router-dom";
import bg from "./imgs/s05.png";
import PlayBtn from "./PlayBtn";

export default function S05({ stories, bookId, id }) {
  const pos = [
    { top: 0, left: 410 },
    { top: 130, left: 650 },
    { top: 300, left: 660 },
    { top: 430, left: 485 },
    { top: 280, left: 230 },
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
