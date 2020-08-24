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
];
