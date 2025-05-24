import { useParams, useNavigate } from "react-router-dom";
import words from "../word.json";
import YouGlish from "../utils/YouGlish";

function OneWord() {

  const { level, sub, idx } = useParams();
  const navigate = useNavigate();

  const list = words[level]?.[sub] || [];
  const i = Number(idx);
  const word = list[i];
  const isLast = i === list.length - 1;

  const handleClick = () => {
    const next = isLast
      ? `/wordlist/${level}/${sub}`
      : `/wordlist/${level}/${sub}/${i + 1}`;
    navigate(next);
  };

  return (
    <section>
      <h1>{word}</h1>
      <YouGlish query={word} />
      <button className="btn-primary" onClick={handleClick}>
        {isLast ? "Bitti" : "Devam"}
      </button>
    </section>
  );
}

export default OneWord;
