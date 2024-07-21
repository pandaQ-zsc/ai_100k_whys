import { useNavigate } from "react-router-dom";
import bg from "./imgs/s06.png";
import PlayBtn from "./PlayBtn";

export default function S06({ stories, bookId, id }) {
  const pos = [
    { top: 100, left: 320 },
    { top: 100, left: 570 },
    { top: 340, left: 320 },
    { top: 340, left: 570 },
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
