const data = [
  {
    id: 1,
    title: "十万个为什么",
    chapters: [
      {
        index: 1,
        title: "地球 蓝色星球奇遇记",
        roadmap: [
          "寻找大地尺度的奇遇",
          "南极陨石迷踪",
          "地球生命之谜",
          "天文台奇遇记",
          "地球 璀璨未来",
        ],
      },
    ],
    stories: [
      {
        chapter: 1,
        index: 1,
        title: "寻找大地尺度的奇遇",
        pages: [
          {
            index: 1,
            branch: "defalut",
            pic: "url(/data/books/book_1/chapter_1/story_1/1.png)",
            audio: "url(/data/books/book_1/chapter_1/story_1/1.mp3)",
            text: "两个好奇的小探险家正被古人精湛的天文测量智慧所吸引。",
          },
          {
            index: 2,
            branch: "defalut",
            pic: "url(/data/books/book_1/chapter_1/story_1/2.png)",
            audio: "url(/data/books/book_1/chapter_1/story_1/2.mp3)",
            text: "利用高科技还原古人的天才足迹,兄妹俩即将踏上探寻的新征程!",
            switch: [
              {
                q: "可可和爱爱亲自测量",
                goto: {
                  branch: "1",
                },
              },
              {
                q: "可可和爱爱使用高科技测量",
                goto: {
                  branch: "2",
                },
              },
            ],
          },
          {
            index: 3,
            branch: "1",
            pic: "url(/data/books/book_1/chapter_1/story_1/3.png)",
            audio: "url(/data/books/book_1/chapter_1/story_1/3.mp3)",
            text: "古人的智慧和毅力让两个孩子深受启迪,这激发了他们内心无穷的好奇!",
          },
          {
            index: 4,
            branch: "2",
            pic: "url(/data/books/book_1/chapter_1/story_1/4.png)",
            audio: "url(/data/books/book_1/chapter_1/story_1/4.mp3)",
            text: "孩子们利用先进的技术重现古人的壮举,要亲自体验一次这项伟大的测量之旅!",
          },
          {
            index: 5,
            branch: "1",
            pic: "url(/data/books/book_1/chapter_1/story_1/5.png)",
            audio: "url(/data/books/book_1/chapter_1/story_1/5.mp3)",
            text: "经过艰辛的探索和模拟计算,他们终于还原了古人当年的伟大壮举!",
          },
          {
            index: 6,
            branch: "1",
            pic: "url(/data/books/book_1/chapter_1/story_1/6.png)",
            audio: "url(/data/books/book_1/chapter_1/story_1/6.mp3)",
            text: "在了解古人智慧的同时,他们也发现了一些未解之谜,新的探险旅程或将就此展开!",
          },
        ],
        knowledge: {
          title: "一行是怎样进行大地测量的",
          content:
            "唐代天文学家一行，主持了世界上第一次地球子午线长度的实测，推算出地球子午线一度弧的长度。他发起组织了一次大规模的天文大地测量工作，在13个位点上测量北极星的地平高度和正午时分八尺表的日影长度。利用覆矩等工具，一行等人根据测量结果得出结论，南北距离大约351里80步，北极高度相差一度。这一实测结果否定了“日影千里差一寸”的说法，实际上也得到了地球是球形的有力证据。",
        },
      },
      {
        chapter: 1,
        index: 2,
        title: "南极陨石迷踪",
        pages: [
          {
            index: 1,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_2/1.png)",
            audio: "url(/data/books/book_1/chapter_1/story_2/1.mp3)",
            text: "突然,一阵奇怪的讯号传来,打断了他们的游戏。可可和爱爱面面相觑,随即打开星际分析仪查看情况。",
          },
          {
            index: 2,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_2/2.png)",
            audio: "url(/data/books/book_1/chapter_1/story_2/2.mp3)",
            text: "飞船降落在南极洲蓝冰区域。孩子们踏上冰面,惊奇地发现到处都是奇形怪状的陨石,就在这时,一位探险家出现了。",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_2/3.png)",
            audio: "url(/data/books/book_1/chapter_1/story_2/3.mp3)",
            text: '老人问道:"你们是不是要收集陨石做研究?不过得先通过我的考验。"可可自信地答应下来。',
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_2/4.png)",
            audio: "url(/data/books/book_1/chapter_1/story_2/4.mp3)",
            text: "可可利用所学知识,娓娓道来关于南极洲极端环境如何使陨石获得长期保存的原因。",
          },
          {
            index: 5,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_2/5.png)",
            audio: "url(/data/books/book_1/chapter_1/story_2/5.mp3)",
            text: "老人最后透露,雕刻上还隐藏着关于地球生命起源的重大秘密,孩子们必须继续追查下去。",
          },
        ],
        knowledge: {
          title: "为什么南极洲的陨石特别多",
          content:
            "南极洲是地球上最寒冷、最干燥的地区，陨石在这里受到的风化作用较小，可以保存数万年甚至上百万年。南极洲大部分地区被冰雪覆盖，冰上的可疑物体很可能就是陨石。南极洲的“蓝冰区”是陨石储量惊人的最大功臣。科学家可以通过卫星影像发现这些蓝冰区域，并前往搜寻，让人类陨石库中的标本数量翻了番。南极洲的陨石研究为地球科学提供了宝贵的资料，同时也受到《南极条约》的保护，规定南极洲的陨石只能用于科学研究，不能以商业为目的。",
        },
      },
      {
        chapter: 1,
        index: 3,
        title: "地球生命之谜",
        pages: [
          {
            index: 1,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_3/1.png)",
            audio: "url(/data/books/book_1/chapter_1/story_3/1.mp3)",
            text: "两个好奇的小探险家正被古人精湛的天文测量智慧所吸引。",
          },
          {
            index: 2,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_3/2.png)",
            audio: "url(/data/books/book_1/chapter_1/story_3/2.mp3)",
            text: "两个好奇的小探险家正被古人精湛的天文测量智慧所吸引。",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_3/3.png)",
            audio: "url(/data/books/book_1/chapter_1/story_3/3.mp3)",
            text: "孩子们目睹了地球上从简单到复杂的生命形式逐步繁衍壮大的过程。",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_3/4.png)",
            audio: "url(/data/books/book_1/chapter_1/story_3/4.mp3)",
            text: "突然,可可和爱爱被一股神秘力量卷走,他们来到了一个陌生的天文台。",
          },
          {
            index: 5,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_3/5.png)",
            audio: "url(/data/books/book_1/chapter_1/story_3/5.mp3)",
            text: "孩子们集中注意力,终于破译了雕像上的信息,原来地球因此处在宜居带的独特位置。",
          },
        ],
        knowledge: {
          title: "为什么地球会成为生命的乐园 ",
          content:
            "地球上的生命形态从人类到微生物，从森林到河流，从山岭到洞穴，从荒漠到极地，几乎遍及地球的每一个角落。这是因为地球有着可供生命生存和繁衍的种种有利条件，如足够的物质和能量来源，合适的资源和环境条件，特别是足够的液态水。液态的水是很好的溶剂，能够溶解多种化学物质，进行生命所需要的各种生化反应。地球的液态水环境滋养了丰富的生命。为什么昼夜长短总在变化 ",
        },
      },
      {
        chapter: 1,
        index: 4,
        title: "天文台奇遇记",
        pages: [
          {
            index: 1,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_4/1.png)",
            audio: "url(/data/books/book_1/chapter_1/story_4/1.mp3)",
            text: "可可和爱爱在太空探险时,偶然进入了这座神秘的天文台。一位慈祥的老天文学家热情地接待了他们。",
          },
          {
            index: 2,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_4/2.png)",
            audio: "url(/data/books/book_1/chapter_1/story_4/2.mp3)",
            text: "老天文学家向孩子们娓娓道来地球自转和公转的原理,解释了昼夜长短变化的根源。可可还亲自模拟演示了不同纬度的昼夜周期变化。",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_4/3.png)",
            audio: "url(/data/books/book_1/chapter_1/story_4/3.mp3)",
            text: "老天文学家生动讲解了日食和月食是如何形成的,并使用天文仪亲自示范了这一过程。孩子们还学会计算出下一次日全食的时间和地点。",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_4/4.png)",
            audio: "url(/data/books/book_1/chapter_1/story_4/4.mp3)",
            text: '老天文学家向孩子们介绍了古希腊天文学家阿利斯塔克的故事。阿利斯塔克通过巧妙的测量方法,首次测算出了日、地、月三者的大小比例,被后人誉为"古代的哥白尼"。',
          },
          {
            index: 5,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_4/5.png)",
            audio: "url(/data/books/book_1/chapter_1/story_4/5.mp3)",
            text: "老天文学家解开了一个令人费解的谜题:为什么太阳和月亮在地球上看起来差不多一样大?原来这都要归功于它们与地球的恰当位置和距离。",
          },
          {
            index: 6,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_4/6.png)",
            audio: "url(/data/books/book_1/chapter_1/story_4/6.mp3)",
            text: "临别之际,老人向孩子们展示了一台神秘的未来窥视装置。孩子们兴奋万分,只见装置中出现了地球未来的场景…",
          },
        ],
        knowledge: {
          title: "为什么昼夜长短总在变化",
          content:
            "故事解释了地球昼夜长短变化的原因。地球环绕太阳公转，同时自转，形成了昼夜更替。地球自转的赤道面和公转平面呈一个夹角，导致同一地点不同时间受太阳照射的角度不同，从而形成了昼夜长短的变化。在赤道，白天和黑夜的长度永远相等。而在南北极，昼夜长短的变化最剧烈。",
        },
      },
      {
        chapter: 1,
        index: 5,
        title: "地球 璀璨未来",
        pages: [
          {
            index: 1,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_5/1.png)",
            audio: "url(/data/books/book_1/chapter_1/story_5/1.mp3)",
            text: "未来地球可能会拥有光环，这一切都归结于月球轨道的变化。",
          },
          {
            index: 2,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_5/2.png)",
            audio: "url(/data/books/book_1/chapter_1/story_5/2.mp3)",
            text: "在探索地球时，孩子们发现了一座古老的太空发射塔，决定借助它乘坐火箭飞向月球。",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_5/3.png)",
            audio: "url(/data/books/book_1/chapter_1/story_5/3.mp3)",
            text: "孩子们通过精通的航天技术修复了火箭，驾驶火箭在宇宙中自在穿行，一路上了解流浪星星的梦想和故事。",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_5/4.png)",
            audio: "url(/data/books/book_1/chapter_1/story_5/4.mp3)",
            text: "孩子们终于抵达月球，被一片神秘的月球文明遗迹吸引，决心探索其中的奥秘。",
          },
        ],
        knowledge: {
          title: "地球什么时候也能有自己的光环",
          content:
            "由于月球引力的作用，地球被拉成一个近似的椭球体，地球隆起的部分会对月球施加引力，使月球进入更远的轨道。最终地球会被月球潮汐锁定，月球的公转周期和地球的自转周期相等。随后，太阳引潮力使地球自转减慢，月球轨道能量减小，轨道高度降低，最终进入地球的洛希极限，被撕裂形成环绕地球的物质环。",
        },
      },
    ],
  },
];

const books = {
  data,
  find: (id) => {
    return data.find((b) => b.id === parseInt(id));
  },
};
export default books;
