import { Link } from "react-router-dom";
import words from "../word.json";

function ChooseLevel() {
  return (
    <section className="choose-level-page">
      <h1>Lütfen seviyeni seç</h1>

      <div className="level-list">
        {Object.keys(words).map((level) => (
          <Link key={level} to={`/sublevel/${level}`}>
            <button className="level-btn">{level}</button>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ChooseLevel;

// import { Link } from "react-router-dom";
// import axios from "axios";
// import words from "../word.json";

// function ChooseLevel() {
//   const handleChooseLevel = (level) => {
//     axios
//       .post("http://localhost:5000/update-progress", { level })
//       .catch((error) => {
//         console.error("Seviye kaydetme hatası:", error);
//       });
//   };

//   return (
//     <section className="choose-level-page">
//       <h1>Lütfen seviyeni seç</h1>

//       <div className="level-list">
//         {Object.keys(words).map((level) => (
//           <Link key={level} to={`/sublevel/${level}`}>
//             <button
//               onClick={() => handleChooseLevel(level)}
//               className="level-btn"
//             >
//               {level}
//             </button>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ChooseLevel;
