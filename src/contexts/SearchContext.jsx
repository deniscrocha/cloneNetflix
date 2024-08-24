import { createContext } from "react";

const SearchContext = createContext(
  {
    searchText: "",
    setSearchText: ()=>{}
  }
)

export default SearchContext;
