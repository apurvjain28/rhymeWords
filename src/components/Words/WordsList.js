import "./WordsList.css";
import Word from "./Word";

const WordList = ({ rhyme }) => {
  return (
    <div className="wordList">
      {rhyme.map((word) => (
        <Word key={word.word} rhymeWord={word.word} />
      ))}
    </div>
  );
};

export default WordList;
