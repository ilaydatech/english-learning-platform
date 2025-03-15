import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChooseLevel() {
  const [wordsByLevel, setWordsByLevel] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/src/word.json")
      .then((response) => response.json())
      .then((data) => setWordsByLevel(data))
      .catch((error) =>
        console.error("Kelime listesi yüklenirken hata oluştu:", error)
      );
  }, []);

  const handleLevelSelect = (level) => {
    navigate("/wordlist", { state: { level, words: wordsByLevel[level] } });
  };

  return (
    <div>
      <h1>Lütfen seviyeni seç</h1>
      {/* JSON verisinden gelen seviyelere göre butonları oluştur */}
      {Object.keys(wordsByLevel).map((level) => (
        <button key={level} onClick={() => handleLevelSelect(level)}>
          {level}
        </button>
      ))}
    </div>
  );
}

export default ChooseLevel;

// import React, { useState, useEffect } from "react"; // React bileşenleri ve hook'ları içe aktarıyoruz.
// import WordList from "./WordList"; // WordList bileşenini içe aktarıyoruz.

// function ChooseLevel() {
//   const [wordsByLevel, setWordsByLevel] = useState({}); // JSON verisini saklamak için state kullanıyoruz.
//   const [selectedLevel, setSelectedLevel] = useState(null); // Seçilen seviyeyi saklamak için state kullanıyoruz.

//   useEffect(() => {
//     // JSON dosyasından kelime seviyelerini çekiyoruz.
//     fetch("/src/word.json") // JSON dosyasını okuyor.
//       .then((response) => response.json()) // Yanıtı JSON formatına çeviriyor.
//       .then((data) => setWordsByLevel(data)) // Veriyi state'e kaydediyor.
//       .catch(
//         (error) =>
//           console.error("Kelime listesi yüklenirken hata oluştu:", error) // Hata olursa konsola yazdırıyor.
//       );
//   }, []);

//   // Kullanıcı bir seviyeyi seçtiğinde ilgili kelime listesini gösteriyoruz.
//   const handleLevelSelect = (level) => {
//     setSelectedLevel(level); // Seçilen seviyeyi state'e kaydediyoruz.
//   };

//   return (
//     <div>
//       {/* Eğer bir seviye seçilmediyse seviyeler listesi gösterilir */}
//       {!selectedLevel ? (
//         <>
//           <h1>Lütfen seviyeni seç</h1>
//           {/* JSON verisinden gelen seviyelere göre butonları oluştur */}
//           {Object.keys(wordsByLevel).map((level) => (
//             <button key={level} onClick={() => handleLevelSelect(level)}>
//               {level} {/* Buton içinde seviyenin ismi yazdırılır. */}
//             </button>
//           ))}
//         </>
//       ) : (
//         // Eğer bir seviye seçildiyse, WordList bileşeni gösterilir
//         <WordList level={selectedLevel} words={wordsByLevel[selectedLevel]} />
//       )}
//     </div>
//   );
// }

// export default ChooseLevel;
