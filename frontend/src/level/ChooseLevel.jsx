import { Link } from "react-router-dom";
import words from "../word.json"; // JSON doğrudan içe aktarılıyor

function ChooseLevel() {
  return (
    <section>
      <h1>Lütfen seviyeni seç</h1>

      {Object.keys(words).map((level) => (
        <Link key={level} to={`/sublevel/${level}`}>
          <button>{level}</button>
        </Link>
      ))}
    </section>
  );
}

export default ChooseLevel;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function ChooseLevel() {
//   const [EnglishLevel, setEnglishLevel] = useState({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("./word.json")
//       .then((response) => response.json())
//       .then((data) => setEnglishLevel(data))
//       .catch((error) =>
//         console.error("Level yüklenirken hata oluştu:", error)
//       );
//   }, []);

//   const handleLevelSelect = (level) => {
//     navigate("/sublevel", { state: { level } });
//   };

//   return (
//     <div>
//       <h1>Lütfen seviyeni seç</h1>
//       {Object.keys(EnglishLevel).map((level) => (
//         <button key={level} onClick={() => handleLevelSelect(level)}>
//           {level}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default ChooseLevel;
