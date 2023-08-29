import searchApis from "@/api/search";
import { BoardItemType } from "@/types";

export const wait = (timeToDelay: number) =>
  new Promise(resolve => setTimeout(resolve, timeToDelay));

export const testAutocompleteFunction = async (keyword: string) => {
  const data: string[] = [];
  await wait(500);
  data.push(keyword);
  return data;
};

export const searchFunctionFactory = (type: string) => {
  const testSearchFunction = async (keyword: string, page: number) => {
    await wait(1000);
    const returnArray: BoardItemType[] = [];
    // 검색 api 연결
    const response = await searchApis.searchPosts(keyword, page);
    console.log("search", response);
    const tmpItem: BoardItemType = {
      id: 1,
      views: 123,
      // type 은 글에 관련된
      leftTag: type,
      title: `제목 ${keyword}`,
      description: "본문",
      comments: 24,
      likes: 3,
      date: "2022-12-12",
    };

    returnArray.push({ ...tmpItem, id: 1 });
    returnArray.push({ ...tmpItem, id: 2 });
    returnArray.push({ ...tmpItem, id: 3 });
    return response.data?.data.posts;
  };
  return testSearchFunction;
};
