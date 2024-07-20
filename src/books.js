const data = [
  {
    id: 1,
    title: "十万个为什么",
    chapters: [
      {
        index: 1,
        title: "地球蓝色星球奇遇记",
        unlocked: true,
        roadmap: [
          "寻找大地尺度的奇遇",
          "南极陨石迷踪",
          "地球生命之谜",
          "天文台奇遇记",
          "地球 璀璨未来",
        ],
      },
      {
        index: 2,
        title: "八大行星漂流记",
        unlocked: true,
        roadmap: [
          "大手笔:火星移民计划",
          "木星绿野奇缘",
          "土星光环奇遇记",
          "水星迷航记",
        ],
      },
    ],
    stories: [
      {
        chapter: 1,
        index: 1,
        title: "寻找大地尺度的奇遇",
        unlocked: true,
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
            text: "可可和爱爱利用先进的技术重现古人的壮举,要亲自体验一次这项伟大的测量之旅!",
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
            text: "飞船降落在南极洲蓝冰区域。可可和爱爱踏上冰面,惊奇地发现到处都是奇形怪状的陨石,就在这时,一位探险家出现了。",
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
            text: "老人最后透露,雕刻上还隐藏着关于地球生命起源的重大秘密,可可和爱爱必须继续追查下去。",
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
            text: "可可和爱爱目睹了地球上从简单到复杂的生命形式逐步繁衍壮大的过程。",
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
            text: "可可和爱爱集中注意力,终于破译了雕像上的信息,原来地球因此处在宜居带的独特位置。",
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
            text: "老天文学家向可可和爱爱娓娓道来地球自转和公转的原理,解释了昼夜长短变化的根源。可可还亲自模拟演示了不同纬度的昼夜周期变化。",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_4/3.png)",
            audio: "url(/data/books/book_1/chapter_1/story_4/3.mp3)",
            text: "老天文学家生动讲解了日食和月食是如何形成的,并使用天文仪亲自示范了这一过程。可可和爱爱还学会计算出下一次日全食的时间和地点。",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_4/4.png)",
            audio: "url(/data/books/book_1/chapter_1/story_4/4.mp3)",
            text: '老天文学家向可可和爱爱介绍了古希腊天文学家阿利斯塔克的故事。阿利斯塔克通过巧妙的测量方法,首次测算出了日、地、月三者的大小比例,被后人誉为"古代的哥白尼"。',
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
            text: "临别之际,老人向可可和爱爱展示了一台神秘的未来窥视装置。可可和爱爱兴奋万分,只见装置中出现了地球未来的场景…",
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
            text: "在探索地球时，可可和爱爱发现了一座古老的太空发射塔，决定借助它乘坐火箭飞向月球。",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_5/3.png)",
            audio: "url(/data/books/book_1/chapter_1/story_5/3.mp3)",
            text: "可可和爱爱通过精通的航天技术修复了火箭，驾驶火箭在宇宙中自在穿行，一路上了解流浪星星的梦想和故事。",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_1/story_5/4.png)",
            audio: "url(/data/books/book_1/chapter_1/story_5/4.mp3)",
            text: "可可和爱爱终于抵达月球，被一片神秘的月球文明遗迹吸引，决心探索其中的奥秘。",
          },
        ],
        knowledge: {
          title: "地球什么时候也能有自己的光环",
          content:
            "由于月球引力的作用，地球被拉成一个近似的椭球体，地球隆起的部分会对月球施加引力，使月球进入更远的轨道。最终地球会被月球潮汐锁定，月球的公转周期和地球的自转周期相等。随后，太阳引潮力使地球自转减慢，月球轨道能量减小，轨道高度降低，最终进入地球的洛希极限，被撕裂形成环绕地球的物质环。",
        },
      },
      {
        chapter: 2,
        index: 1,
        title: "大手笔:火星移民计划",
        unlocked: true,
        pages: [
          {
            index: 1,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_1/1.png)",
            audio: "url(/data/books/book_1/chapter_2/story_1/1.mp3)",
            text: "两位勇敢的小探险家发现了一艘神秘的飞船,决定驾驶它前往火星大冒险!",
          },
          {
            index: 2,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_1/2.png)",
            audio: "url(/data/books/book_1/chapter_2/story_1/2.mp3)",
            text: "通过分析仪,他们发现了火星的两颗迥然不同的卫星,让他们无比向往下一站的探险之旅!",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_1/3.png)",
            audio: "url(/data/books/book_1/chapter_2/story_1/3.mp3)",
            text: "小卫星的景象与地球惟妙惟肖,到处是鲜活的生命,让人向往和亲近!",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_1/4.png)",
            audio: "url(/data/books/book_1/chapter_2/story_1/4.mp3)",
            text: '降落在火星表面后,分析仪发现了令人兴奋的"水渠"迹象,这让他们对揭开火星之谜充满期待!',
          },
          {
            index: 5,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_1/5.png)",
            audio: "url(/data/books/book_1/chapter_2/story_1/5.mp3)",
            text: "火星的独特景观令可可和爱爱大开眼界,处处都是新奇有趣的发现!",
          },
          {
            index: 6,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_1/6.png)",
            audio: "url(/data/books/book_1/chapter_2/story_1/6.mp3)",
            text: '在火星表面继续勘探时,他们发现了神秘的地质构造,会不会是解开"火星运河"谜题的线索呢?',
          },
          {
            index: 7,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_1/7.png)",
            audio: "url(/data/books/book_1/chapter_2/story_1/7.mp3)",
            text: "可可和爱爱无意中捡到了一些神秘的陨石,蕴含着太阳系起源的奥秘,他们决定继续追寻下去!",
          },
        ],
        knowledge: {
          title: '为什么说火星像是一个"袖珍的地球"',
          content:
            "火星的大小和地球相似，有类似的季节变化和大气层。科学家们认为，火星上可能曾有液态水，甚至有过生命迹象。",
        },
      },
      {
        chapter: 2,
        index: 2,
        title: "木星绿野奇缘",
        pages: [
          {
            index: 1,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_2/1.png)",
            audio: "url(/data/books/book_1/chapter_2/story_2/1.mp3)",
            text: "驾驶飞船前往气态巨人木星,分析仪显示它的奇特形状和大红斑风暴,让可可和爱爱无比向往!",
          },
          {
            index: 2,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_2/2.png)",
            audio: "url(/data/books/book_1/chapter_2/story_2/2.mp3)",
            text: "进入木星大气层后,可可和爱爱震惊地发现这个行星居然还环绕着数十颗卫星,场景壮观无比!",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_2/3.png)",
            audio: "url(/data/books/book_1/chapter_2/story_2/3.mp3)",
            text: "可可和爱爱降落在木卫二表面,发现这里满是冰雪,而金属探测器显示冰层下还隐藏着神秘的液体!",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_2/4.png)",
            audio: "url(/data/books/book_1/chapter_2/story_2/4.mp3)",
            text: "在木卫一上,可可和爱爱目睹了震撼的火山喷发场景,岩浆喷涌万丈高空,威力骇人!",
          },
          {
            index: 5,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_2/5.png)",
            audio: "url(/data/books/book_1/chapter_2/story_2/5.mp3)",
            text: "进入木星母星的大气层内部,可可和爱爱近距离感受到了气态巨人的磅礴气息,场景奇幻非凡!",
          },
          {
            index: 6,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_2/6.png)",
            audio: "url(/data/books/book_1/chapter_2/story_2/6.mp3)",
            text: "返回木星表面时,可可和爱爱有幸目睹了大红斑风暴的震撼场景,狂暴的气流吞噬万物,令人心生敬畏!",
          },
          {
            index: 7,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_2/7.png)",
            audio: "url(/data/books/book_1/chapter_2/story_2/7.mp3)",
            text: "就在准备离开时,可可发现土星光环中有个神秘物体在旋转,于是他们兴奋地驶向下一个目的地!",
          },
        ],
        knowledge: {
          title: "为什么木星那么扁",
          content:
            "木星自转速度非常快，这使得它的赤道区域被离心力拉伸，导致其略显扁平。",
        },
      },
      {
        chapter: 2,
        index: 3,
        title: "土星光环奇遇记",
        pages: [
          {
            index: 1,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_3/1.png)",
            audio: "url(/data/books/book_1/chapter_2/story_3/1.mp3)",
            text: "离开木星后,可可和爱爱驾驶飞船前往土星,分析仪上显示出了那光环伴随的壮丽景象!",
          },
          {
            index: 2,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_3/2.png)",
            audio: "url(/data/books/book_1/chapter_2/story_3/2.mp3)",
            text: "终于抵达目的地,可可和爱爱亲眼目睹了土星光环的壮丽景象,光芒万丈、气势恢宏!",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_3/3.png)",
            audio: "url(/data/books/book_1/chapter_2/story_3/3.mp3)",
            text: "可可和爱爱降落在土卫八表面,惊讶地发现这颗卫星仿佛有两张不同的脸孔,原是受光环影响所致!",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_3/4.png)",
            audio: "url(/data/books/book_1/chapter_2/story_3/4.mp3)",
            text: "来到土卫六后,可可和爱爱惊喜地发现这里的环境酷似地球,到处都是熟悉的景象!",
          },
          {
            index: 5,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_3/5.png)",
            audio: "url(/data/books/book_1/chapter_2/story_3/5.mp3)",
            text: "在土卫六的丘陵地带,可可和爱爱亲身体验到了这个'微缩版远古地球'的生机盎然景象。",
          },
          {
            index: 6,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_3/6.png)",
            audio: "url(/data/books/book_1/chapter_2/story_3/6.mp3)",
            text: "返回土星光环时,可可和爱爱不小心触碰到了光环内部,竟引发了意想不到的时空扭曲!",
          },
          {
            index: 7,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_3/7.png)",
            audio: "url(/data/books/book_1/chapter_2/story_3/7.mp3)",
            text: "时空扭曲后,可可和爱爱来到了一个陌生而奇特的环境,通过分析判断出这应该就是水星了!",
          },
        ],
        knowledge: {
          title: "为什么土星戴着一个美丽的光环",
          content:
            "土星的光环由无数小冰块和岩石组成，这些物质在土星的引力作用下，形成了环绕土星的美丽光环。",
        },
      },
      {
        chapter: 2,
        index: 4,
        title: "水星迷航记",
        pages: [
          {
            index: 1,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_4/1.png)",
            audio: "url(/data/books/book_1/chapter_2/story_4/1.mp3)",
            text: "离开土星后,可可和爱爱驾驶飞船前往离太阳最近的水星,分析仪开始采集这个神秘行星的数据。",
          },
          {
            index: 2,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_4/2.png)",
            audio: "url(/data/books/book_1/chapter_2/story_4/2.mp3)",
            text: "抵达水星后,可可和爱爱首先被这里类似月球但又与众不同的地貌景象所吸引和好奇。",
          },
          {
            index: 3,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_4/3.png)",
            audio: "url(/data/books/book_1/chapter_2/story_4/3.mp3)",
            text: "可可和爱爱在水星表面行走,亲身体验到了这个离太阳最近行星独特而陌生的环境和生态。",
          },
          {
            index: 4,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_4/4.png)",
            audio: "url(/data/books/book_1/chapter_2/story_4/4.mp3)",
            text: "利用探测仪扫描后,可可发现水星内部蕴藏着巨大的金属核心,占据了行星大部分体积!",
          },
          {
            index: 5,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_4/5.png)",
            audio: "url(/data/books/book_1/chapter_2/story_4/5.mp3)",
            text: "数据显示,作为太阳系最小行星,水星居然拥有如此庞大的金属核心,可可和爱爱无比惊讶!",
          },
          {
            index: 6,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_4/6.png)",
            audio: "url(/data/books/book_1/chapter_2/story_4/6.mp3)",
            text: "探索完水星表面与内部后,可可和爱爱又回到外层环境,却意外目睹了一颗彗星掠过的震撼场景!",
          },
          {
            index: 7,
            branch: "default",
            pic: "url(/data/books/book_1/chapter_2/story_4/7.png)",
            audio: "url(/data/books/book_1/chapter_2/story_4/7.mp3)",
            text: '就在准备离开水星时,可可无意捡到了一张古老的星图,上面隐隐写着"太阳核心"的标记!',
          },
        ],
        knowledge: {
          title: "为什么水星这么像月球",
          content:
            "水星和月球的地貌相似，都是布满环形山、陨石坑和沙丘，这是因为它们都没有大气层来保护自己不受陨石撞击。",
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
