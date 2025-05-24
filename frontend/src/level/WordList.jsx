import { useParams, useNavigate } from "react-router-dom";
import words from "../word.json";

function WordList() {
  const navigate = useNavigate();
  const { level, sub } = useParams();
  const list = words[level]?.[sub] || [];

  return (
    <section className="wordlist-page">
      <h1>{`${level} / ${sub}`}</h1>

      <ul className="words-list">
        {list.map((word) => (
          <li key={word} className="word-item">
            {word}
          </li>
        ))}
      </ul>

      <button
        className="btn-primary"
        onClick={() => navigate(`/wordlist/${level}/${sub}/0`)}
      >
        Start Learning
      </button>
    </section>
  );
}

export default WordList;
// import { useParams, useNavigate } from "react-router-dom";
// import words from "../word.json";

// function WordList() {
//   const navigate = useNavigate();
//   const { level, sub } = useParams(); // /wordlist/:level/:sub
//   const list = words[level]?.[sub] || [];

//   return (
//     <section>
//       <h1>{`${level} / ${sub}`}</h1>
//       <ul>
//         {list.map((word) => (
//           <li key={word}>{word}</li>
//         ))}
//       </ul>
//       <button onClick={() => navigate(`/wordlist/${level}/${sub}/0`)}>
//         Öğren
//       </button>
//     </section>
//   );
// }

// export default WordList;
