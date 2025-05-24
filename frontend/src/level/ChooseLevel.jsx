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
// import words from "../word.json"; // JSON doğrudan içe aktarılıyor

// function ChooseLevel() {
//   return (
//     <section>
//       <h1>Lütfen seviyeni seç</h1>

//       {Object.keys(words).map((level) => (
//         <Link key={level} to={`/sublevel/${level}`}>
//           <button>{level}</button>
//         </Link>
//       ))}
//     </section>
//   );
// }

// export default ChooseLevel;
