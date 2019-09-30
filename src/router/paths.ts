export interface Path {
  to: string;
  text: string;
  name?: string;
}

export const paths: Array<Path> = [
  {
    to: "/profile",
    text: "基本資料",
    name: "Profile"
  },
  {
    to: "/resume",
    text: "個人經歷",
    name: "Resume"
  },
  {
    to: "/projects",
    text: "作品介紹",
    name: "Projects"
  }
];
