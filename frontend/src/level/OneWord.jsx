import { useParams, useNavigate } from "react-router-dom";
import words from "../word.json";
import YouGlish from "../pages/YouGlish";

function OneWord() {
  const { level, sub, idx } = useParams();
  const navigate = useNavigate();

  const list = words[level]?.[sub] || [];
  const i = Number(idx);
  const word = list[i]; // ← mevcut kelime
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
      {/* kelimeyi prop olarak yolla */}
      <YouGlish query={word} />
      <button onClick={handleClick}>{isLast ? "Bitti" : "Devam"}</button>
    </section>
  );
}

export default OneWord;

// import { useParams, useNavigate } from "react-router-dom";
// import words from "../word.json";
// import YouGlish from "../pages/YouGlish";

// function OneWord() {
//   const { level, sub, idx } = useParams();
//   const navigate = useNavigate();

//   const list = words[level]?.[sub] || [];
//   const i = Number(idx);
//   const isLast = i === list.length - 1;

//   const handleClick = () => {
//     if (isLast) {
//       navigate(`/wordlist/${level}/${sub}`); // listeye geri dön
//     } else {
//       navigate(`/wordlist/${level}/${sub}/${i + 1}`);
//     }
//   };

//   return (
//     <section>
//       <h1>{list[i]}</h1>
//       <YouGlish/>
//       <button onClick={handleClick}>{isLast ? "Bitti" : "Devam"}</button>
//     </section>
//   );
// }

// export default OneWord;
