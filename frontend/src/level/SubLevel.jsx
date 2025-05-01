import { Link, useParams } from "react-router-dom";
import words from "../word.json";

function SubLevel() {
  const { level } = useParams(); //  <Route path="/sublevel/:level" element={<SubLevel />} />
  //  :level bir placeholder'dır. {level} --> seçilen seviye burada tutulur.
  const subLevels = Object.keys(words[level] || {});

  return (
    <section>
      <h1>{level} – Bir alt seviye seç</h1>

      {subLevels.map((part) => (
        <Link key={part} to={`/wordlist/${level}/${part}`}>
          <button>{part}</button>
        </Link>
      ))}
    </section>
  );
}

export default SubLevel;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function SubLevel() {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const level = state?.level || "A1";

//   const [subLevels, setSubLevels] = useState([]); // ["1.Part", "2.Part", …]

//   useEffect(() => {
//     fetch("./word.json")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data[level]) {
//           setSubLevels(Object.keys(data[level]));
//         } else {
//           setError(`"${level}" seviyesi JSON’da bulunamadı.`);
//         }
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [level]);

//   const handleSubLevelSelect = (subLevel) => {
//     navigate("/wordlist", { state: { level, subLevel } });
//   };

//   return (
//     <div>
//       <h1>{level} – Bir alt seviye seç</h1>
//       {subLevels.map((sl) => (
//         <button key={sl} onClick={() => handleSubLevelSelect(sl)}>
//           {sl}
//         </button>
//       ))}
//     </div>
//   );
// }

// export default SubLevel;

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function SubLevel() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const level = location.state?.level || "A1";

//   const [SubLevel, setSubLevel] = useState({});

//   useEffect(() => {
//     fetch("./word.json")
//       .then((response) => response.json())
//       .then((data) => setSubLevel(data))
//       .catch((error) =>
//         console.error("SubLevel yüklenirken hata oluştu:", error)
//       );
//   }, []);

//   const handleSubLevelSelect = (subLevel) => {
//     navigate("/wordlist", { state: { level, subLevel } });
//   };

//   return (
//     <div>
//       {Object.keys(SubLevel).map((sublevel) => (
//         <button key={sublevel} onClick={() => handleSubLevelSelect(sublevel)}>
//           {sublevel}
//         </button>
//       ))}
//     </div>
//   );4
// }

// export default SubLevel;
