import { useNavigate } from "react-router-dom";
import bg from "./imgs/s08.png";
import PlayBtn from "./PlayBtn";

export default function S08({ stories, bookId, id }) {
  const pos = [
    { top: 100, left: 590 },
    { top: 330, left: 590 },
    { top: 400, left: 450 },
    { top: 340, left: 285 },
    { top: 120, left: 285 },
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
