const data = [
  {
    id: "course-1",
    title: "Fundamental Psixologiya",
    module: [
      {
        id: "course-1-module-1",
        title: "1-module",
        lessons: [
          {
            id: "course-1-module-1-lesson-1",
            title: "1-dars",
            content: {
              video: "https://s3.us-east-005.backblazeb2.com/audio-uploads/0cb0ad10-912a-4061-8ef5-1d45fbc99b48.mp4",
              pdf: "https://docs.google.com/document/d/1LcgliP7lkii6XhMOPzxMjzXE7dsIh2I4PYYX554Fzmk/preview",
              downloadPDF: 'https://docs.google.com/document/d/1LcgliP7lkii6XhMOPzxMjzXE7dsIh2I4PYYX554Fzmk/export?format=pdf',
              ppt: "https://docs.google.com/presentation/d/17wQFoqUEyONsuZ2JYAssFXewnL7XB--f3ans_xWsgR4/preview",
              downloadPPT: 'https://docs.google.com/presentation/d/17wQFoqUEyONsuZ2JYAssFXewnL7XB--f3ans_xWsgR4/export/pptx',
            },
          },
          {
            id: "course-1-module-1-lesson-2",
            title: "2-dars",
            content: { video: "2", pdf: "2", ppt: "2" },
          },
          {
            id: "course-1-module-1-lesson-3",
            title: "3-dars",
            content: { video: "3", pdf: "3", ppt: "3" },
          },
          {
            id: "course-1-module-1-lesson-4",
            title: "4-dars",
            content: { video: "4", pdf: "4", ppt: "4" },
          },
        ],
      },
      {
        id: "course-1-module-2",
        title: "2-module",
        lessons: [
          {
            id: "course-1-module-2-lesson-1",
            title: "1-dars",
            content: { video: "", pdf: "", ppt: "" },
          },
          {
            id: "course-1-module-2-lesson-2",
            title: "2-dars",
            content: { video: "", pdf: "", ppt: "" },
          },
          {
            id: "course-1-module-2-lesson-3",
            title: "3-dars",
            content: { video: "", pdf: "", ppt: "" },
          },
          {
            id: "course-1-module-2-lesson-4",
            title: "4-dars",
            content: { video: "", pdf: "", ppt: "" },
          },
        ],
      },
      // ... qolgan modullar uchun xuddi shunday davom etadi
    ],
  },
  {
    id: "course-2",
    title: "Amaliy Psixologiya",
    module: [
      {
        id: "course-2-module-1",
        title: "1-module",
        lessons: [
          {
            id: "course-2-module-1-lesson-1",
            title: "1-dars",
            content: { video: "", pdf: "", ppt: "" },
          },
          {
            id: "course-2-module-1-lesson-2",
            title: "2-dars",
            content: { video: "", pdf: "", ppt: "" },
          },
          {
            id: "course-2-module-1-lesson-3",
            title: "3-dars",
            content: { video: "", pdf: "", ppt: "" },
          },
          {
            id: "course-2-module-1-lesson-4",
            title: "4-dars",
            content: { video: "", pdf: "", ppt: "" },
          },
        ],
      },
      // ... qolgan modullar uchun xuddi shunday davom etadi
    ],
  },
];

export default data;
