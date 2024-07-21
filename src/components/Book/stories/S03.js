import { useNavigate } from "react-router-dom";
import bg from "./imgs/s03.png";
import PlayBtn from "./PlayBtn";

export default function S03({ stories, bookId, id }) {
  const pos = [
    { top: 260, left: 220 },
    { top: 20, left: 470 },
    { top: 220, left: 450 },
    { top: 260, left: 685 },
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
