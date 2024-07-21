import { useNavigate } from "react-router-dom";
import bg from "./imgs/s02.png";
import PlayBtn from "./PlayBtn";

export default function S02({ stories, bookId, id }) {
  const pos = [
    { top: 100, left: 480 },
    { top: 100, left: 790 },
    { top: 100, left: 100 },
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
