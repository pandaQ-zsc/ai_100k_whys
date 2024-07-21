import { useNavigate } from "react-router-dom";
import bg from "./imgs/s07.png";
import PlayBtn from "./PlayBtn";

export default function S07({ stories, bookId, id }) {
  const pos = [
    { top: 80, left: 320 },
    { top: 80, left: 590 },
    { top: 320, left: 620 },
    { top: 320, left: 285 },
    { top: 230, left: 450 },
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
