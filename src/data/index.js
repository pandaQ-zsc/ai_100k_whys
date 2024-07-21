import b01 from "./book01.json";

function build(bk) {
  let chapter = "";
  const item = {
    id: bk.id,
    title: bk.title,
    chapters: (b01.chapters || []).map((c) => ({ ...c, unlocked: true })),
    stories: (b01.stories || []).map((s) => {
      const n = { ...s, unlocked: false };
      if (chapter !== n.chapter) {
        chapter = n.chapter;
        n.unlocked = true;
      }
      return n;
    }),
  };

  return [item];
}

const assets = build(b01);

const books = {
  data: assets,
  find: (id) => {
    return assets.find((b) => b.id === parseInt(id));
  },
};
export default books;
