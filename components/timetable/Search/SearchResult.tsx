import {
  useState,
  createContext,
  MouseEventHandler,
  ChangeEventHandler,
} from "react";

import { useDisclosure } from "@chakra-ui/react";

import MultiClasses from "./MultiClasses";
import Searchbar from "./Searchbar";

type ISearchbar = {
  searchword: string;
  updateSearchword: ChangeEventHandler<HTMLInputElement>;
  resetSearchword: MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
  onToggle: MouseEventHandler<HTMLInputElement>;
};

export const SearchContext = createContext<ISearchbar>({
  searchword: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateSearchword: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  resetSearchword: () => {},
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onToggle: () => {},
});

export default function SearchResult() {
  const [searchword, setSearchword] = useState<string>("");
  const { isOpen, onToggle } = useDisclosure();

  const updateSearchword: ChangeEventHandler<HTMLInputElement> = event => {
    const newValue = event.target.value;
    setSearchword(newValue);
  };

  const resetSearchword = () => {
    setSearchword("");
  };

  const contextValue = {
    searchword,
    updateSearchword,
    resetSearchword,
    isOpen,
    onToggle,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      <Searchbar />
      {searchword && <MultiClasses />}
    </SearchContext.Provider>
  );
}
