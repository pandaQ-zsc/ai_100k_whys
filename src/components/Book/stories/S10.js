import React from 'react';
import { useNavigate } from "react-router-dom";
import bg from "./imgs/s10.png";
import PlayBtn from "./PlayBtn";

export default function S10({ stories, bookId, id }) {
  const pos = [
    { top: 390, left: 260 },
    { top: 370, left: 560 },
    { top: 210, left: 720 },
    { top: 220, left: 450 },
    { top: 120, left: 270 },
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
