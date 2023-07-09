import { useState } from "react";

import { default as _Searchbar } from "@/components/common/Searchbar";

export type SearchbarHookProps = {
  placeholder: string;
  searchDefault?: boolean;
  addKeyword?: boolean;
  searchCourse?: boolean;
  handleClick: () => void;
};

export default function useSearchbar(
  props: SearchbarHookProps,
): [string, () => JSX.Element] {
  const [searchword, setSearchword] = useState("");

  const _props = {
    searchword,
    setSearchword,
  };

  const Searchbar = () => <_Searchbar {...props} {..._props} />;

  return [searchword, Searchbar];
}
