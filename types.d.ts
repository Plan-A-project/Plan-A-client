export type BoardItemType = {
  title: string;
  views: number;
  description?: string;
  tagType?: "primary" | "secondary" | "grey";
  image?: string;
  imageAlt?: string;
  dday?: number;
  date?: string;
  comments?: number;
  bookmark?: boolean;
  likes?: number;
  leftTag?: string;
  id?: number | string;
  createdAt?: string;
};
