export class Post {
  md: string;
  type: string;
  date: Date;
}

export const Posts: Post[] = [
  {
    md: "hello-world",
    type: "blog",
    date: new Date("05/29/2019"),
  },
  {
    md: "app-band",
    type: "blog",
    date: new Date("04/18/2020"),
  },
  {
    md: "kerfcase",
    type: "project",
    date: new Date("09/01/2019"),
  },
  {
    md: "dicematch",
    type: "project",
    date: new Date("02/16/2020"),
  },
  {
    md: "dijkstras-cart",
    type: "project",
    date: new Date("11/20/2019"),
  },
  {
    md: "giammattei",
    type: "project",
    date: new Date("08/07/2019"),
  },
  {
    md: "minesweeper",
    type: "project",
    date: new Date("09/28/2019"),
  },
];
