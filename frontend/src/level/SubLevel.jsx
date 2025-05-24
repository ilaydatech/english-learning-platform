import { Link, useParams } from "react-router-dom";
import words from "../word.json";

function SubLevel() {
  const { level } = useParams();
  const subLevels = Object.keys(words[level] || {});

  return (
    <section className="sublevel-page">
      <h1>{level} – Choose a sub-level</h1>
      <div className="sublevel-list">
        {subLevels.map((part) => (
          <Link key={part} to={`/wordlist/${level}/${part}`}>
            <button className="sublevel-btn">{part}</button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SubLevel;

// import { Link, useParams } from "react-router-dom";
// import words from "../word.json";

// function SubLevel() {
//   const { level } = useParams(); //  <Route path="/sublevel/:level" element={<SubLevel />} />
//   //  :level bir placeholder'dır. {level} --> seçilen seviye burada tutulur.
//   const subLevels = Object.keys(words[level] || {});

//   return (
//     <section>
//       <h1>{level} – Bir alt seviye seç</h1>

//       {subLevels.map((part) => (
//         <Link key={part} to={`/wordlist/${level}/${part}`}>
//           <button>{part}</button>
//         </Link>
//       ))}
//     </section>
//   );
// }

// export default SubLevel;
