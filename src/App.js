import { useCallback, useEffect, useState } from "react";
import "./App.css";
import WordList from "./components/Words/WordsList";
import Search from "./components/Search/Search";

function App() {
  const [word, setWord] = useState("");
  const [rhymeWords, setRhymeWords] = useState([]);

  const searchWordHandler = (enteredWord) => {
    //console.log(enteredWord);
    setWord(enteredWord);
  };

  const fetchRhymes = useCallback(async () => {
    const response = await fetch(
      `https://api.datamuse.com/words?rel_rhy=${word}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong..");
    }

    const data = await response.json();
    //console.log(data);

    setRhymeWords(data);
  }, [word]);

  useEffect(() => {
    fetchRhymes();
  }, [fetchRhymes]);

  return (
    <div className="App">
      <Search onSearchWord={searchWordHandler} />
      <WordList rhyme={rhymeWords} />
    </div>
  );
}

export default App;
