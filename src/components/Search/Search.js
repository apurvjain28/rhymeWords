import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = (props) => {
  const [searchWord, setSearchWord] = useState("");

  const searchHandler = (e) => {
    setSearchWord(e.target.value);
    props.onSearchWord(e.target.value);
  };

  return (
    <div className="search__bar">
      <SearchIcon />
      <input
        type="text"
        placeholder="Highlist words related to...."
        onChange={searchHandler}
        value={searchWord}
      ></input>
    </div>
  );
};

export default Search;
