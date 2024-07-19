const data = [
    {
      "id": 1,
      "title": "伽利略与神奇望远镜",
      "cover_page": "url(/stories/001/ch01/v3_cover.png)",
      "back_page": "url(/stories/001/ch01/v3_back.png)",
      "chapters": [
        {
          "index": 1,
          "title": "地球",
        },
        {
          "index": 2,
          "title": "月亮",
        },
      ],
      "stories": [
        {
          "chapter": 1,
          "index": 1,
          "title": "寻找大地尺度的奇遇",
          "pages": [
            {
              "index": 1,
              "branch": "default",
              "pic": "url(/stories/001/ch01/v3_001.png)",
              "text": "1. 原来都这是一种奇特的望远镜,可以让远处的事物变得清晰无比！",
            },
            {
              "index": 2,
              "branch": "default",
              "pic": "url(/stories/001/ch01/v3_002.png)",
              "text": "2. 原来都这是一种奇特的望远镜,可以让远处的事物变得清晰无比！",
            },
            {
              "index": 3,
              "branch": "default",
              "pic": "url(/stories/001/ch01/v3_003.png)",
              "text": "3. 原来都这是一种奇特的望远镜,可以让远处的事物变得清晰无比！",
            },
            {
              "index": 4,
              "branch": "default",
              "pic": "url(/stories/001/ch01/v3_004.png)",
              "audio": "",
              "text": "4. 原来都这是一种奇特的望远镜,可以让远处的事物变得清晰无比！",
              "switch": [
                {
                  "q": "我不相信伽利略",
                  "goto": {
                    "branch": "1",
                  },
                },
                {
                  "q": "我相信伽利略！",
                  "goto": {
                    "branch": "2",
                  },
                },
              ],
            },
            {
              "index": 5,
              "branch": "1",
              "pic": "url(/stories/001/ch01/v3_001.png)",
              "text": "1 - 5"
            },
            {
              "index": 6,
              "branch": "1",
              "pic": "url(/stories/001/ch01/v3_002.png)",
              "text": "1 - 6"
            },
            {
              "index": 7,
              "branch": "1",
              "pic": "url(/stories/001/ch01/v3_003.png)",
              "text": "1 - 7"
            },
            {
              "index": 8,
              "branch": "2",
              "pic": "url(/stories/001/ch01/v3_004.png)",
              "text": "2 - 8"
            },
            {
              "index": 9,
              "branch": "2",
              "pic": "url(/stories/001/ch01/v3_002.png)",
              "text": "2 - 9"
            }
          ],
        },
        {
          "chapter": 1,
          "index": 2,
          "title": "南极陨石迷踪",
          "pages": [],
        },
      ],
    },
    {
      id: 2,
      title: "伽利略与神奇望远镜2",
      cover_page: "url(/stories/001/ch01/v3_cover.png)",
      back_page: "url(/stories/001/ch01/v3_back.png)",
      chapters: [
        {
          index: 1,
          title: "地球",
        },
        {
          index: 2,
          title: "月亮",
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
              branch: "default",
              pic: "url(/stories/001/ch01/v3_001.png)",
            },
            {
              index: 2,
              branch: "default",
              pic: "url(/stories/v3_002.png)",
            },
            {
              index: 3,
              branch: "default",
              pic: "url(/stories/v3_003.png)",
            },
            {
              index: 4,
              branch: "default",
              pic: "url(/stories/v3_004.png)",
              audio: "",
              text: "原来都这是一种奇特的望远镜,可以让远处的事物变得清晰无比！",
              switch: [
                {
                  q: "我不相信伽利略",
                  goto: {
                    page: 5,
                  },
                },
                {
                  q: "我相信伽利略！",
                  goto: {
                    page: 7,
                  },
                },
              ],
            },
            {
              index: 5,
              branch: "1",
              pic: "url(/stories/v3_005.png)",
            },
            {
              index: 6,
              branch: "1",
              pic: "url(/stories/v3_006.png)",
            },
            {
              index: 7,
              branch: "2",
              pic: "url(/stories/v3_007.png)",
            },
            {
              index: 8,
              branch: "2",
              pic: "url(/stories/v3_008.png)",
            },
          ],
        },
        {
          chapter: 1,
          index: 2,
          title: "南极陨石迷踪",
          pages: [],
        },
      ],
    },
  ];
  
  const books = {
    data,
    find: (id) => {
      return data.find((b) => (b.id === parseInt(id)));
    },
  };
  export default books;
  