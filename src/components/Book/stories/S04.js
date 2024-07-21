import { useNavigate } from "react-router-dom";
import bg from "./imgs/s04.png";
import PlayBtn from "./PlayBtn";

export default function S04({ stories, bookId, id }) {
  const pos = [
    { top: 20, left: 380 },
    { top: 230, left: 165 },
    { top: 430, left: 420 },
    { top: 240, left: 730 },
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
